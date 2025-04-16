import sklearn
import numpy as np
import matplotlib.pyplot as plt
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import mean_squared_error
from sklearn.metrics import r2_score
from sklearn.datasets import load_iris

# 加载波士顿房价数据集
boston = load_iris()
X = boston.data
y = boston.target
# 分割数据集为训练集和测试集
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
from sklearn.linear_model import LogisticRegression

# 初始化线性回归模型
model = LogisticRegression()

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
