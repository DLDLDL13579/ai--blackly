import cv2
img = cv2.imread("D:/Blockly-AI-Program/sourcecode/zebra.png")
print("原始分辨率：", img.shape)
for i, (w, h) in enumerate([img.shape[1::-1], (320,240), (160,120)]):
	resized = cv2.resize(img, (w, h))
	win = f"{w}x{h}"
	cv2.imshow(win, resized)
	cv2.moveWindow(win, i*(w+20), 0)  # 水平排列窗口
	cv2.setMouseCallback(win, lambda e,x,y,_,__,r=resized,wn=win:
		cv2.setWindowTitle(wn, f"{wn} | Pixel: {r[y,x]}") if e == cv2.EVENT_MOUSEMOVE else None)
cv2.waitKey(0)
cv2.destroyAllWindows()
