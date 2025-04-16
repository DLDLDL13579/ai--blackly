import numpy as np
import sklearn
from urllib.request import urlretrieve
from sklearn.metrics import classification_report
from sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error,r2_score
from sklearn.preprocessing import StandardScaler
import matplotlib.pyplot as plt

#导内置Linnerud数据集包
from sklearn.datasets import load_linnerud
# 加载数据集
linnerud = load_linnerud()
# 选择对生理指标进行聚类（data数组）
# 生理指标：体重、腰围、脉搏
X = linnerud.data[:, 0].reshape(-1, 1)  # 引体向上次数
y = linnerud.target[:, 0]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
