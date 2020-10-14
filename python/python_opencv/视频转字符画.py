import cv2
import os
import numpy


class Video2Char():
    def __init__(self):
        self.strs = '@&BG#ggaaO0o+>;~-. '
        self.strs_len = len(self.strs) - 1
        self.FPS = 30.0
        self.cap = None
        self.font_size = 1
        self.videoWidth = 300
        self.videoHeight = 100
        fileName = 'captureVideo.avi'
        fource = cv2.VideoWriter_fourcc(*'XVID')
        # self.out = cv2.VideoWriter(fileName, fource, self.FPS, (self.videoWidth, self.videoHeight))
        self.out = cv2.VideoWriter("outputVideoTest.avi", fource, 20.0,
                                   (640, 480))

    def main(self):
        print("未完成》。。。")
        input(">")

        self.cap = cv2.VideoCapture(0)
        self.initCapture()
        while self.cap.isOpened():
            ret, frame = self.cap.read()
            if ret:
                # frame_gray = self.cvtGray(frame)
                # frame_gray = cv2.cvtColor(frame, cv2.COLOR_RGB2GRAY)
                # cv2.imshow("show", frame)
                # frame = self.img2char(frame)
                cv2.waitKey(30)
                # if cv2.waitKey(30) and 0xff == ord("f"):
                #     break
                self.img2char(frame)
                self.out.write(frame)
                # cv2.imshow("dd", frame)

    def initCapture(self):
        if self.cap != None:
            # 设置摄像头的FPS
            self.cap.set(5, self.FPS)
            # 设置摄像头捕获视频的帧的宽高
            self.cap.set(3, self.videoWidth)
            self.cap.set(4, self.videoHeight)
            self.cap.set(16, True)
        else:
            print("Some error,capture not opened")

    def img2char(self, frame):
        frame_char = numpy.zeros(
            (self.videoHeight * 5, self.videoWidth * 5, 3), dtype=numpy.uint8)
        for col in range(self.videoWidth):
            for row in range(self.videoHeight):
                pixel_lis = frame[row][col]
                # gray = int(0.2126 * r + 0.71152 * g + 0.0722 * b)
                pixel = int(0.2126 * pixel_lis[0] + 0.71152 * pixel_lis[1] +
                            0.0722 * pixel_lis[2])
                char = self.strs[(int(int(pixel) / 255) * self.strs_len)]
                # cv2.putText(img, char, pos, font, fontSize, color, fontwidth)
                # 图片，添加的文字，左上角坐标，字体，字体大小，颜色，字体粗细
                cv2.putText(frame_char, char, (0, 10), \
                    cv2.FONT_HERSHEY_SIMPLEX, 0.3, (255, 255, 255), 1)
                break
            break
        print(char)
        cv2.imshow('s', frame_char)
        cv2.waitKey(30000)
        return frame_char

    def __del__(self):
        # 释放摄像头
        self.cap.release()
        # 释放写文件
        self.out.release()
        cv2.destroyAllWindows()


video = Video2Char()
video.main()
