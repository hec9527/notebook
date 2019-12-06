/**
 * 画布工具类
 */



 var canvas=(function (){
    var bg=document.getElementById("bgCanvas").getContext("2d");
    var pl=document.getElementById("playerCanvas").getContext("2d");
    var rd=document.getElementById("randerCanvas").getContext("2d");
    var br=document.getElementById("brickCanvas").getContext("2d");
    var draw=function(canvas,img,sourceX,sourceY,sourceW,sourceH,canvasX,canvasY,canvasW,canvasH){
        canvas.drawImage(img,sourceX,sourceY,sourceW,sourceH,canvasX,canvasY,canvasW,canvasH)
    };
    var clearRect=function(canvas,originalX,originalY,width,height){
        canvas.clearRect(originalX,originalY,width,height);
    };
    var clearAll=function(canvas){
        canvas.width=canvas.width;
    }
    return {
        bg,pl,rd,br,draw,clearRect,clearAll
    }
 })