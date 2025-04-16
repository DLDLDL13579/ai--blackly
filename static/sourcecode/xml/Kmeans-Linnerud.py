import sklearn
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error,r2_score
import matplotlib.pyplot as plt
from sklearn.preprocessing import StandardScaler

#导内置Linnerud数据集包
from sklearn.datasets import load_linnerud
# 加载数据集
linnerud = load_linnerud()
# 选择对生理指标进行聚类（data数组）
# 生理指标：体重、腰围、脉搏
X = linnerud.data
y = linnerud.target#该两条语句分类的时候不使用，在聚类时用
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
from sklearn.cluster import KMeans

# 数据标准化
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
# 初始化 KMeans 算法，设定聚类数量为 3（可以根据需要调整）
kmeans = KMeans(n_clusters=3, random_state=42)


# 训练模型
kmeans.fit(X_scaled)
# 获取聚类结果
cluster_labels = kmeans.labels_
# 可视化聚类结果（选择前两个特征进行可视化）
plt.figure(figsize=(8, 6))
plt.scatter(X_scaled[:, 0], X_scaled[:, 1], c=cluster_labels, cmap='viridis', marker='o', edgecolor='k', s=50)
# 标记聚类中心
centers = kmeans.cluster_centers_
plt.scatter(centers[:, 0], centers[:, 1], c='red', s=200, alpha=0.75, marker='X', label='Centroids')
plt.xlabel('特征 1')
plt.ylabel('特征 2')
plt.title('数据集中前两个指标的K-Means聚类结果')
plt.legend()
plt.grid(True)
plt.show()
