from tkinter import simpledialog




youAge = float(simpledialog.askstring('输入框','请输入年龄：'))
if youAge <= 20:
  print(youAge)
else:
  print('请输入小于等于20岁的年龄！')
