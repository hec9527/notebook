
/**
 * 2018.4.14
 * @author hc
 */

var oUl=document.getElementById("ul-box");
oUl.innerHTML+=oUl.innerHTML;           /*复制一份lis 到ul*/
var oLi=document.getElementsByClassName("lis");
var timer=null;
var elementLeft=0;
move();
oUl.onmouseover=function(){
    stop();
}
oUl.onmouseout=function(){
    move();
}


function move() {
    timer=setInterval(function(){
        /**使用CSS3设置动画效果  提高性能 */
        elementLeft++;
        oUl.style.WebkitTransform="translateX("+-elementLeft+"px)";
        if(elementLeft>=1500){
            elementLeft=0;
        }
        
        /**直接使用JS设置动画效果 反复渲染页面 执行动画 */
        // oUl.style.left=oUl.offsetLeft-1+"px";
        // if(oUl.offsetLeft<=-1500){
        //     oUl.style.left=0+"px";
        // }
    },14);
}
function stop(){
    clearInterval(timer);
}




