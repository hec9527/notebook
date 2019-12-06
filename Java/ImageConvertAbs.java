import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;


/**
 * @Copyright 2019/10/10-forever
 * @Author: xixin Email:1466879550@qq.com
 * @Date: 2019/10/10 15:45
 */

public class ImageConvertAbs {
    private final static char[] asc = " .-~:;?>+o0Oaagg#GB&@".toCharArray();


    public static void main(String[] args) {
        String imgPath = "./1.png";
        System.out.println(imgPath);
        String fileUrl = "./2.jpg";
        createCharImg(imgPath, fileUrl);
    }

    private static void createCharImg(String imgPath, String fileUrl) {
        FileInputStream fileInputStream;
        try {
            fileInputStream = new FileInputStream(imgPath);
            BufferedImage image = ImageIO.read(fileInputStream);
            
            int w = image.getWidth();
            int h = image.getHeight();
            
            int size = 12;
            BufferedImage newbufferedImage = new BufferedImage(w*size , h*size , 1);
            new java.util.Scanner(System.in).next();
            // Graphics graphics = newbufferedImage.getGraphics();
            
            // graphics.setColor(Color.black);
            
            // graphics.fillRect(0, 0, w * size, h * size);
            
            // graphics.setFont(new Font("Fixedsys.ttf", Font.ITALIC, size));
            
            // graphics.setColor(Color.white);
            
            // StringBuffer sb = new  StringBuffer();

            // short R = 0;
            // short G = 0;
            // short B = 0;
            // short index =0;
            // short gray = 0;


            // for (int i = 0; i < h; i++) {

            //     for (int j = 0; j < w; j++) {

            //         int rgb = image.getRGB(j, i);

            //         Color color = new Color(rgb);

            //         R = (short)color.getRed();
            //         G = (short)color.getGreen();
            //         B = (short)color.getBlue();

            //         gray = (short)((R * 299 + G * 587 + B * 114) / 1000);
            //         index = (short)((asc.length - 1) * gray / 255);
                    
            //         sb.append(asc[index]);
            //         graphics.drawString(sb.toString(), j * size, i * size);
            //         sb.delete(0,1);
            //     }
                

            // }
            // graphics.dispose();
            
            ImageIO.write(newbufferedImage, "jpg", new File(fileUrl));
            System.out.println("new images....");

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
