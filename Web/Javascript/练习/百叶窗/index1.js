var wraper=document.getElementById("sectionsWrapper");
var sections=wraper.getElementsByTagName("section");
var controlBoxs=document.getElementById("contorl").getElementsByTagName("li");
var animationBox=document.getElementById("animation");
var currentPage=0;
var arr=[];

/**
 * 初始化页面信息  加载section背景
 */
var init=function(){
    for(i=0;i<sections.length;i++){
        sections[i].style.background="url("+sections[i].getAttribute("data-href")+")";
        sections[i].style.backgroundPosition="0 0";
        sections[i].style.backgroundSize=wraper.offsetWidth+"px "+wraper.offsetHeight+"px";
    }
    timer();
}
/**
 * 页面定时器
 */
var timer=function(){
    changeSection(currentPage);
    createWindow(currentPage,20);
    setInterval(function(){
        currentPage++;
        currentPage=currentPage>4?0:currentPage;
        changeSection(currentPage);
        createWindow(currentPage,20);
    },5000);
}
/**
 * 改变显示的seciton
 */
var changeSection=function(x){
    for(i=0;i<sections.length;i++){
        if(i==x){
            sections[i].style.display="block";
            controlBoxs[i].classList.add("ctrlBoxShow");
        }else{
            sections[i].style.display="none";
            controlBoxs[i].classList.remove("ctrlBoxShow");
        }
    }
}
/**
 * blindsWondows    创建竖向的div
 */
var blindsWondows=function(num){
    for(i=0;i<num;i++){
        var node=document.createElement("div");
        arr[i]=node;
        
        animationBox.appendChild(node);
    }
}
/**
 * 百叶窗    -----创建 百叶窗 div  *******竖向百叶窗*******
 */
var createWindow=function(index,num){
    if(arr.length<=0){
        blindsWondows(num);
    }
    for(i=0;i<arr.length;i++){
        arr[i].classList.remove("outBottom","oTB_T","oTB_B","transX","transY");
        arr[i].classList.add("blinds");
        arr[i].style.width=Math.ceil(animationBox.offsetWidth/num)+"px";
        arr[i].style.left=i*Math.ceil(animationBox.offsetWidth/num)+"px";
        arr[i].style.background="url("+sections[index].getAttribute("data-href")+")";
        arr[i].style.backgroundPosition=(-Math.ceil(animationBox.offsetWidth/num))*i+"px 0";
        arr[i].style.backgroundSize=wraper.offsetWidth+"px "+wraper.offsetHeight+"px";
    }
    var aniIndex=Math.ceil(Math.random()*4);
    var next=index+1>=5?0:index+1;
    sections[index].style.display="none";
    sections[next].style.display="block";
    var i=0;
    var timer=null;
    if(aniIndex==1){
        timer=setInterval(function(){
            if(i>=0&&i<arr.length){
                arr[i].classList.add("outBottom");
                i++;
            }else{
                clearInterval(timer);
            }
        },50);
    }else if(aniIndex==2){
        timer=setInterval(function(){
            if(i>=0&&i<arr.length){
                if(i%2==0){
                    arr[i].classList.add("oTB_T");
                }else{
                    arr[i].classList.add("oTB_B");
                }
                i++;
            }else{
                clearInterval(timer);
            }
        },50);
    }else if(aniIndex==3){
        timer=setInterval(function(){
            if(i>=0&&i<arr.length){
                arr[i].classList.add("transX");
                i++;
            }else{
                clearInterval(timer);
            }
        },50);
    }else{
        timer=setInterval(function(){
            if(i>=0&&i<arr.length){
                arr[i].classList.add("transY");
                i++;
            }else{
                clearInterval(timer);
            }
        },50);
    }
}
init();