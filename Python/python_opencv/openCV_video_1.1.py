import cv2
#课堂代码案例



videoCapture = cv2.VideoCapture("./BadApple.mp4")

fps = videoCapture.get(cv2.CAP_PROP_FPS)

size = (int(videoCapture.get(cv2.CAP_PROP_XI_WIDTH)), int(videoCapture.get(cv2.CAP_PROP_FRAME_HEIGHT)))

videoWriter = cv2.VideoWriter("./media/output.avi", cv2.VideoWriter_fourcc('1', '4', '2', '0'), fps, size)

info, frame = videoCapture.read()

while info:  # Loop until there are no more frames
    
    videoWriter.write(frame)

    cv2.imshow("show",frame)
    
    info, frame = videoCapture.read()
