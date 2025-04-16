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
X = california.data
y = california.target
# 分割数据集为训练集和测试集
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=20%, random_state=42)
from sklearn.linear_model import LogisticRegression

# 初始化逻辑回归模型
model = LogisticRegression(max_iter=1000)

# 训练模型
model.fit(X_train, y_train)
# 进行预测
y_pred = model.predict(X_test_scaled)
# 评估模型
accuracy = accuracy_score(y_test, y_pred
report = classification_report(y_test, y_pred)
print(f"Accuracy: {accuracy}")
print("Classification Report:")
print(report)
