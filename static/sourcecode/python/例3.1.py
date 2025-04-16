import numpy as np
import sklearn
from urllib.request import urlretrieve
from sklearn.metrics import classification_report
from sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error,r2_score
from sklearn.preprocessing import StandardScaler
import matplotlib.pyplot as plt

import pandas as pd
# 1. 读取 CSV 文件
data = pd.read_csv('D:/Blockly-AI-Program/sourcecode/datasets/Wholesale_customers/Wholesale_customers.csv')
# 获取所有的列名
all_columns = data.columns.tolist()
target_column = 'Channel, Region'  # 获取类标列名

# 获取特征列名（排除目标列）
feature_columns = [col for col in all_columns if col != target_column]

# 2. 准备特征和目标数据
X= data[feature_columns]
y= data[target_column]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
from sklearn.cluster import KMeans

# 数据标准化
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
# 初始化 KMeans 算法，设定聚类数量为 3（可以根据需要调整）
kmeans = KMeans(n_clusters=3, random_state=42)

# 可视化聚类结果（选择前两个特征进行可视化）
plt.figure(figsize=(8, 6))
plt.scatter(X_scaled[:, 0], X_scaled[:, 1], c=cluster_labels, cmap='viridis', marker='o', edgecolor='k', s=50)
# 标记聚类中心
centers = kmeans.cluster_centers_
plt.scatter(centers[:, 0], centers[:, 1], c='red', s=200, alpha=0.75, marker='X', label='Centroids')
plt.xlabel('Feature 1')
plt.ylabel('Feature 2')
plt.title('K-Means Clustering on Dataset')
plt.legend()
plt.grid(True)
plt.show()
