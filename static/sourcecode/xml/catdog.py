import tensorflow as tf
from tensorflow.keras.layers import Input, Conv2D, MaxPooling2D, Flatten, Dense, Dropout
from tensorflow.keras.models import Model
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.optimizers import Adam

import pandas as pd
# 1. 读取 CSV 文件
data = pd.read_csv('D:/Blockly-AI-Program/sourcecode/datasets/catdog')
# 获取所有的列名
all_columns = data.columns.tolist()
target_column = 'none'  # 获取类标列名

# 获取特征列名（排除目标列）
feature_columns = [col for col in all_columns if col != target_column]

# 2. 准备特征和目标数据
X= data[feature_columns]
y= data[target_column]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
# 构建AlexNet模型
def AlexNet(input_shape=(224, 224, 3), num_classes=2):
inputs = Input(shape=input_shape)

# 第一层卷积和池化
x = Conv2D(96, (11, 11), strides=(4, 4), activation='relu', padding='same')(inputs)
x = MaxPooling2D((3, 3), strides=(2, 2))(x)
x = Dropout(0.25)(x)

# 第二层卷积和池化
x = Conv2D(256, (5, 5), strides=(1, 1), activation='relu', padding='same')(x)
x = MaxPooling2D((3, 3), strides=(2, 2))(x)
x = Dropout(0.25)(x)

# 第三层卷积
x = Conv2D(384, (3, 3), strides=(1, 1), activation='relu', padding='same')(x

# 第四层卷积
x = Conv2D(384, (3, 3), strides=(1, 1), activation='relu', padding='same')(x)
# 第五层卷积和池化
x = Conv2D(256, (3, 3), strides=(1, 1), activation='relu', padding='same')(x)
x = MaxPooling2D((3, 3), strides=(2, 2))(x)
x = Dropout(0.25)(x)

# 全连接层
x = Flatten()(x)
x = Dense(4096, activation='relu')(x)
x = Dropout(0.5)(x)
x = Dense(4096, activation='relu')(x)
x = Dropout(0.5)(x)

# 输出层
outputs = Dense(num_classes, activation='sigmoid')(x)  # 对于二分类，使用sigmoid激活函数
model = Model(inputs, outputs)
return model

# 实例化模型
model = AlexNet()

# 编译模型
model.compile(optimizer=Adam(lr=0.001),  # 可以调整学习率
loss='binary_crossentropy',  # 二分类任务使用二元交叉熵损失
metrics=['accuracy'])

# 训练模型
model.fit(train_generator,epochs=20,validation_data=validation_generator)# 训练的轮数20,可调整
model.save('D:/Blockly-AI-Program/sourcecode/model/model_catdog.h5')
# 绘制训练过程的损失图和验证准确率图
plt.figure(figsize=(12, 5))
# 绘制训练损失
plt.subplot(1, 2, 1)
plt.plot(history.history['loss'], label='Training Loss', color='blue')
plt.plot(history.history['val_loss'], label='Validation Loss', color='red')
plt.title('Training & Validation Loss vs. Epochs')
plt.xlabel('Epochs')
plt.ylabel('Loss')
plt.legend()
# 绘制验证准确率
plt.subplot(1, 2, 2)
plt.plot(history.history['accuracy'], label='Training Accuracy', color='blue')
plt.plot(history.history['val_accuracy'], label='Validation Accuracy', color='orange')
plt.title('Training & Validation Accuracy vs. Epochs')
plt.xlabel('Epochs')
plt.ylabel('Accuracy')
plt.legend()
plt.tight_layout()
plt.savefig("training_loss_acc.png")
plt.show()
# 评估模型在测试集上的准确率
test_loss, test_acc = model.evaluate(x_test, y_test, verbose=2)
print(f'Accuracy of the model on the test images: {100 * test_acc:.2f}%')}
