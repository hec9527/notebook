import matplotlib.pyplot as plt

dataX = [1, 2, 3, 4, 5, 8, 9, 5, 2]
dataY = [7, 8, 9, 10, 11, 8, 5, 7, 6]

plt.title('lines')
plt.xlabel('x')
plt.ylabel('y')
plt.xlim(0, 10)  # X轴的范围
plt.ylim(5, 11)  # y轴的范围
plt.xticks([0.0, 1.1, 2.2,3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 9.9])  # 设置x轴的刻度   传入列表
plt.yticks([5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0])
plt.plot(dataX, dataX, dataX, dataY, True, True)
plt.savefig("./resource/1_plot")
plt.show()