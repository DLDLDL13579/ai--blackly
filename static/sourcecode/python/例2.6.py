from tkinter import simpledialog




youAge = simpledialog.askstring('输入框','请输入年龄：')
if float(youAge) <= float(20):
  print(youAge)
