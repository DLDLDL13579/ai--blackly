import sklearn
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error,r2_score
import matplotlib.pyplot as plt
from sklearn.preprocessing import StandardScaler

#导内置加州房价数据集包
from sklearn.datasets import fetch_california_housing

# 加载数据集
california = fetch_california_housing()
X = california.data,y = california.target
# 分割数据集为训练集和测试集
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=20%, random_state=42)
from sklearn.linear_model import LogisticRegression

# 初始化逻辑回归模型
model = LogisticRegression(max_iter=1000)

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

# 评估模型
accuracy = accuracy_score(y_test, y_pred
report = classification_report(y_test, y_pred)
print(f"分类精度: {accuracy}")
print("分类报告:")
print(report)

# 可视化预测结果
plt.scatter(y_test, y_pred)
plt.xlabel("实际值")
plt.ylabel("预测值")
plt.title("预测值 vs 实际值")
plt.show()
