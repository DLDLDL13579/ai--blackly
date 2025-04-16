import os
import cv2
import numpy as np
import tensorflow as tf
from tensorflow.keras import layers, models
from tensorflow.keras.preprocessing.image import ImageDataGenerator



# 数据集路径
TRAIN_DIR = "./Zebra/train/"
VAL_DIR = "./Zebra/val/"
# 基础配置
IMG_SIZE = 50  # 图片尺寸
BATCH_SIZE = 32
EPOCHS = 15
# 数据预处理
train_datagen = ImageDataGenerator(rescale=1. / 255)
val_datagen = ImageDataGenerator(rescale=1. / 255)

train_generator = train_datagen.flow_from_directory(
    TRAIN_DIR,
    target_size=(IMG_SIZE, IMG_SIZE),
    batch_size=BATCH_SIZE,
    class_mode='binary'
)

val_generator = val_datagen.flow_from_directory(
    VAL_DIR,
    target_size=(IMG_SIZE, IMG_SIZE),
    batch_size=BATCH_SIZE,
    class_mode='binary',
    shuffle=False
)

# 构建简单CNN模型
model = models.Sequential([
    layers.Conv2D(32, (3, 3), activation='relu', input_shape=(IMG_SIZE, IMG_SIZE, 3)),
    layers.MaxPooling2D((2, 2)),
    layers.Flatten(),
    layers.Dense(64, activation='relu'),
    layers.Dense(1, activation='sigmoid')
])

model.compile(optimizer='adam',
              loss='binary_crossentropy',
              metrics=['accuracy'])

# 训练模型
history = model.fit(
    train_generator,
    epochs=EPOCHS,
    validation_data=val_generator
)

# 保存模型
model.save('zebra_cnn.h5')


# 预测函数
def predict_image(img_path):
    img = cv2.imread(img_path)
    if img is None:
        return "无法读取图片", 0.0

    img = cv2.resize(img, (IMG_SIZE, IMG_SIZE))
    img = img / 255.0
    img = np.expand_dims(img, axis=0)

    prediction = model.predict(img)[0][0]
    return "斑马线" if prediction > 0.5 else "非斑马线", prediction


# 测试样例
test_image = "./Zebra/val/zebra_crossing/21.png"  # 修改为实际路径
result, confidence = predict_image(test_image)
print(f"\n预测结果: {result}")
print(f"置信度: {confidence:.2%}")