from tkinter import simpledialog


print(''.join([str(x) for x in [simpledialog.askstring('输入框','请输入姓名：'), '的年龄为', simpledialog.askstring('输入框','abc'), '岁']]))