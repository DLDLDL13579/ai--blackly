# -*- coding: utf-8 -*-
import sys
import matplotlib as mpl
mpl.use('Agg')
import matplotlib.pyplot as plt

try:
    #训练、测试完整代码
    #单元1.导入库和配置参数
    import os
    import cv2
    import numpy as np
    import xml.etree.ElementTree as ET
    from sklearn.model_selection import train_test_split
    import tensorflow as tf
    from keras import layers, models, optimizers
    import matplotlib.pyplot as plt
    # 配置参数
    DATA_PATH = r'./zebra_data'
    TEST_IMG_PATH = r'./zebra_data/test/8.png'  # 测试图片路径
    IMG_SIZE = 128
    BATCH_SIZE = 16
    EPOCHS = 15
          # 单元2.加载数据集、数据预处理
    class ZebraDataset:
        def __init__(self, data_dir):
            self.data_dir = data_dir
            self.samples = []

            # 加载正样本（斑马线）
            zebra_dir = os.path.join(data_dir, "zebra")
            zebra_label_dir = os.path.join(data_dir, "zebra_label")
            self._load_samples(zebra_dir, zebra_label_dir, is_positive=True)

            # 加载负样本（其他）
            others_dir = os.path.join(data_dir, "others")
            others_label_dir = os.path.join(data_dir, "others_label")
            self._load_samples(others_dir, others_label_dir, is_positive=False)

        def _load_samples(self, img_dir, label_dir, is_positive):
            for img_name in os.listdir(img_dir):
                if img_name.endswith(".png"):
                    img_path = os.path.join(img_dir, img_name)
                    xml_path = os.path.join(label_dir, img_name.replace(".png", ".xml"))

                    if not os.path.exists(xml_path):
                        continue

                    tree = ET.parse(xml_path)
                    root = tree.getroot()

                    # 解析图像尺寸
                    size = root.find("size")
                    width = int(size.find("width").text)
                    height = int(size.find("height").text)

                    # 检查是否存在目标
                    obj = root.find("object")
                    if is_positive:
                        # 正样本必须包含有效标注
                        if obj is not None:
                            bndbox = obj.find("bndbox")
                            coords = [int(bndbox.find(tag).text) for tag in ["xmin", "ymin", "xmax", "ymax"]]
                            self.samples.append((img_path, [1] + coords, (width, height)))
                    else:
                        # 负样本不应包含目标
                        if obj is None:
                            self.samples.append((img_path, [0, 0, 0, 0, 0], (width, height)))
    #数据预处理
        def load_data(self):
            images, labels = [], []
            for img_path, label, (w, h) in self.samples:
                img = cv2.imread(img_path)
                img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

                # 预处理
                img = cv2.resize(img, (IMG_SIZE, IMG_SIZE)) / 255.0

                # 归一化坐标（仅正样本）
                if label[0] == 1:
                    norm_coords = [
                        label[1] / w, label[2] / h,
                        label[3] / w, label[4] / h
                    ]
                    labels.append([1] + norm_coords)
                else:
                    labels.append([0, 0, 0, 0, 0])

                images.append(img)

            return np.array(images), np.array(labels)
    # ## 单元3.构建模型
    def build_model(input_shape):
        model = models.Sequential([
            layers.Conv2D(16, (3, 3), activation='relu', input_shape=input_shape),
            layers.MaxPooling2D(2, 2),
            layers.Conv2D(32, (3, 3), activation='relu'),
            layers.MaxPooling2D(2, 2),
            layers.Flatten(),
            layers.Dense(64, activation='relu'),
            layers.Dense(5)  # 输出：分类(1) + 坐标(4)
        ])
        return model

    # ## 单元4：定义损失函数
    @tf.function  # 将该函数编译为 TensorFlow 图，提升性能，加快训练速度
    def custom_loss(y_true, y_pred):
        # 提取类别标签（第 0 列）：y_true 和 y_pred 的第 0 列分别是类别的真实值和预测值
        cls_true = y_true[:, 0]
        cls_pred = y_pred[:, 0]

        # 计算分类损失：使用二分类交叉熵（binary_crossentropy）
        # from_logits=True 表示预测值尚未经过 sigmoid 函数
        cls_loss = tf.keras.losses.binary_crossentropy(cls_true, cls_pred, from_logits=True)

        # 提取回归框（bbox）坐标（从第1列开始）：真实值和预测值的坐标部分
        box_true = y_true[:, 1:]
        box_pred = y_pred[:, 1:]

        # 创建掩码：只有正样本（cls_true=1）的回归框才需要计算损失
        # 将 cls_true 转为 float32 类型，0/1 对应无效/有效样本
        mask = tf.cast(cls_true, tf.float32)

        # 使用均方误差（MSE）作为位置回归损失函数
        mse = tf.keras.losses.MeanSquaredError()

        # 只对正样本的框进行回归损失计算（负样本的框乘以 0 被忽略）
        # mask[:, None] 将 mask 扩展维度以匹配 box 坐标维度
        reg_loss = mse(box_true * mask[:, None], box_pred * mask[:, None])

        # 返回总损失：分类损失 + 回归损失（默认权重为 1:1，可按需要加权）
        return cls_loss + reg_loss

    # ## 单元5.训练验证保存模型
    def train_and_evaluate():
        # 加载数据
        dataset = ZebraDataset(DATA_PATH)
        X, y = dataset.load_data()

        # 划分数据集：60%训练，20%验证，20%测试
        X_train, X_temp, y_train, y_temp = train_test_split(X, y, test_size=0.4, random_state=42)
        X_val, X_test, y_val, y_test = train_test_split(X_temp, y_temp, test_size=0.5, random_state=42)

        # 构建模型
        model = build_model((IMG_SIZE, IMG_SIZE, 3))
        model.compile(
            optimizer=optimizers.Adam(learning_rate=0.001),
            loss=custom_loss,
            metrics=['accuracy']
        )

        # 训练模型
        history = model.fit(
            X_train, y_train,
            validation_data=(X_val, y_val),
            epochs=EPOCHS,
            batch_size=BATCH_SIZE
        )

        # 评估模型
        test_loss, test_acc = model.evaluate(X_test, y_test)
        print(f"测试集评估结果：损失={test_loss:.4f}, 准确率={test_acc:.4f}")

        # 保存模型
        model.save('zebra_cnn_model.h5')
        return model
    # ## 单元6.模型预测

    def predict_and_visualize(model, img_path):
        # 加载原始图像
        orig_img = cv2.imread(img_path)
        if orig_img is None:
            print(f"错误：无法读取图片 {img_path}")
            return

        h, w = orig_img.shape[:2]

        # 预处理
        img = cv2.cvtColor(orig_img, cv2.COLOR_BGR2RGB)
        img = cv2.resize(img, (IMG_SIZE, IMG_SIZE)) / 255.0
        img = np.expand_dims(img, axis=0)

        # 预测
        pred = model.predict(img)[0]
        cls_prob = 1 / (1 + np.exp(-pred[0]))  # Sigmoid转换概率

        if cls_prob > 0.5:
            # 还原坐标到原始尺寸
            xmin = int(pred[1] * w)
            ymin = int(pred[2] * h)
            xmax = int(pred[3] * w)
            ymax = int(pred[4] * h)

            # 打印坐标
            print(f"检测到斑马线，坐标框：")
            print(f"左上角: ({xmin}, {ymin})")
            print(f"右下角: ({xmax}, {ymax})")

            # 绘制结果
            cv2.rectangle(orig_img, (xmin, ymin), (xmax, ymax), (0, 255, 0), 2)
            cv2.putText(orig_img, f"Zebra: {cls_prob:.2f}", (xmin, ymin - 10),
                        cv2.FONT_HERSHEY_SIMPLEX, 0.6, (0, 255, 0), 2)
        else:
            print("未检测到斑马线")
            cv2.putText(orig_img, "No Zebra Crossing", (10, 30),
                        cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 0, 255), 2)

        # # 显示结果
        #cv2.imshow("Detection Result", orig_img)
        #cv2.waitKey(0)
        #cv2.destroyAllWindows()
        # 使用 matplotlib 显示图像（代替cv2.imshow)
        plt.figure(figsize=(6, 6))
        plt.imshow(cv2.cvtColor(orig_img, cv2.COLOR_BGR2RGB))  # 转回RGB
        plt.title("Detection Result")
        plt.axis("off")  # 不显示坐标轴
        plt.savefig('output.png')


    if __name__ == "__main__":
        # 训练并评估模型
        trained_model = train_and_evaluate()

        # 测试指定图片
        if os.path.exists(TEST_IMG_PATH):
            print("正在测试图片:", TEST_IMG_PATH)
            predict_and_visualize(trained_model, TEST_IMG_PATH)
        else:
            print(f"测试图片不存在：{TEST_IMG_PATH}")

except Exception as e:
    print("执行错误:", str(e))
finally:
    if len(plt.get_fignums()) > 0:
        plt.savefig(r'/Users/meihaoshidai/Downloads/Blockly-AI-Program/temp_files/output.png')
    plt.close('all')
