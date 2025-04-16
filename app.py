import subprocess
import base64
import sys
import time
from pathlib import Path
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import webbrowser
from threading import Timer

# 初始化路径
BASE_DIR = Path(__file__).parent.resolve()
TEMP_DIR = BASE_DIR / "temp_files"
TEMP_DIR.mkdir(exist_ok=True)

app = Flask(__name__,
            static_folder='static',
            template_folder='templates')
CORS(app)

app.config['JSON_AS_ASCII'] = False
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024

def cleanup_files(*filenames):
    """安全删除临时文件（解决 Windows 文件占用问题）"""
    for filename in filenames:
        if filename.exists():
            max_retries = 3
            for _ in range(max_retries):
                try:
                    filename.unlink()
                    break
                except Exception as e:
                    time.sleep(0.5)
                    if _ == max_retries - 1:
                        print(f"无法删除文件 {filename}: {str(e)}")

@app.route('/')
def index():
    return render_template('vueindex.html')

@app.route('/run_code', methods=['POST'])
def run_code():
    temp_code_path = TEMP_DIR / "temp_code.py"
    output_image_path = TEMP_DIR / "output.png"

    cleanup_files(temp_code_path, output_image_path)

    try:
        if not request.is_json:
            return jsonify({'success': False, 'message': '请求必须为 JSON 格式'}), 400

        data = request.get_json()
        if 'code' not in data:
            return jsonify({'success': False, 'message': '未提供代码'}), 400

        # 生成更安全的代码模板
        code_template = f"""# -*- coding: utf-8 -*-
import sys
import matplotlib as mpl
mpl.use('Agg')
import matplotlib.pyplot as plt

try:
{_indent_code(data['code'], 4)}
except Exception as e:
    print("执行错误:", str(e))
finally:
    if len(plt.get_fignums()) > 0:
        plt.savefig(r'{output_image_path}')
    plt.close('all')
"""
        with open(temp_code_path, 'w', encoding='utf-8') as f:
            f.write(code_template)

        # 执行代码并捕获输出
        result = subprocess.run(
            [sys.executable, str(temp_code_path)],
            cwd=str(TEMP_DIR),
            capture_output=True,
            text=True,
            timeout=100,
            encoding='utf-8'
        )

        # 构建响应数据
        response_data = {
            'success': result.returncode == 0,
            'output': result.stdout.strip(),
            'error': result.stderr.strip() if result.returncode != 0 else None
        }

        # 处理生成的图片
        if output_image_path.exists():
            with open(output_image_path, 'rb') as f:
                response_data['image'] = base64.b64encode(f.read()).decode()
        else:
            response_data['image'] = None

        return jsonify(response_data)

    except subprocess.TimeoutExpired:
        return jsonify({'success': False, 'error': '代码执行超时（30秒限制）'}), 408
    except Exception as e:
        return jsonify({
            'success': False,
            'error': f'服务器内部错误: {str(e)}'
        }), 500

def _indent_code(code: str, spaces: int):
    """为代码添加统一缩进"""
    indent = ' ' * spaces
    return '\n'.join([indent + line if line.strip() else line for line in code.split('\n')])

def open_browser():
    try:
        webbrowser.open('http://localhost:5001')
    except Exception as e:
        print(f"自动打开浏览器失败: {str(e)}")

if __name__ == '__main__':
    try:
        import matplotlib
    except ImportError:
        print("错误：请先安装 matplotlib！执行命令：pip install matplotlib")
        exit(1)

    Timer(1, open_browser).start()
    app.run(
        host='0.0.0.0',
        port=5001,
        debug=False,
        use_reloader=False,
        threaded=True
    )