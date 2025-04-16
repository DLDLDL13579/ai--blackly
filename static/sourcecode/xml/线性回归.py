import sklearn
import numpy as np
import matplotlib.pyplot as plt
from sklearn.preprocessing import StandardScaler

#导内置Linnerud数据集包
from sklearn.datasets import load_linnerud
# 加载 Linnerud 数据集
linnerud = load_linnerud()
# 我们选择对生理指标进行聚类（data 数组）
# 生理指标：体重、腰围、脉搏
X = linnerud.data
# 数据标准化
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
from sklearn.linear_model import LinearRegression

# 初始化线性回归模型
model = LinearRegression()

# 训练模型
model.fit(X_train, y_train)
# 对测试集进行预测
y_pred = model.predict(X_test)

# 打印模型的系数
print("系数:", model.coef_)
print("截距:", model.intercept_)

# 计算模型的均方误差和R^2值
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)
print("均方误差:", mse)
print("R^2 Score(决定系数):", r2)

# 可视化预测结果
plt.scatter(y_test, y_pred)
plt.xlabel("实际值")
plt.ylabel("预测值")
plt.title("线性回归预测值 vs 实际值")
plt.show()
