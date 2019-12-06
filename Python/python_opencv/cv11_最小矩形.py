import cv2, numpy
img = numpy.zeros((200, 200), dtype=numpy.uint8)

img[50:150, 50:150] = 255

ret, thresh = cv2.threshold(img, 237, 255, 0)

image,contours,hierarchy = cv2.findContours(thresh, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

color = cv2.cvtColor(img, cv2.COLOR_GRAY2BGR)

# img = cv2.drawContours(color, contours, -1, (0, 0, 255), 5)

for c in contours:
    x, y, w, h, = cv2.boundingRect(c)
    
    cv2.rectangle(img, (x, y), (x + w, x + y), (0, 0, 255), 2)
    
    rect = cv2.minAreaRect(c)
    box = cv2.boxPoints(rect)
    box = numpy.int0(box)
    cv2.drawContours(img, [box], 0, (0, 0, 255), 3)
    
    (x, y), radius = cv2.minEnclosingCircle(c)
    center = (int(x), int(y))
        
    radius = int(radius)
    
    img = cv2.circle(img, center, radius, (255, 0, 0), 2)
    
    cv2.drawContours(img, contours, -1, (255, 0, 0), 1)

cv2.imshow("show", img)

cv2.waitKey(0)

cv2.destroyAllWindows()
