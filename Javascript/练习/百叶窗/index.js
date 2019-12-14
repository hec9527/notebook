//等价与window.onload
document.onreadystatechange=function(){
	"use strict";
	if(document.readyState==="complete"){
		var oBanner=document.getElementById("sectionsWrapper");//包裹百叶窗的容器
		var oSection=oBanner.getElementsByTagName("section");  //百叶窗中显示图片的容器
		var oContorl=document.getElementById("contorl");       //显示、控制页面信息的容器
		var length=oSection.length;    //图片容器的数量
		var pageNum=5;     //百叶窗划分数量   输入10-40以内的数字
		var page=false;     //是否加载百叶窗
		var ctrl=false;     //是否加载控制窗格
		var oTimer=null;    //动画定时器
		var time=4000;      //百叶窗的变换间隔，单位毫秒，建议不低于2000
		var lock=false;     //百叶窗变换限制
		var lastPage=0;     //上一个页面
		var currentpage=0;  //将要显示的页面，请勿更改
		if(!page){
			for(var i=0;i<length;i++){
				var url=oSection[i].getAttribute("data-href");
				oSection[i].style.width=oBanner.offsetWidth+"px";
				oSection[i].style.height=oBanner.offsetHeight+"px";
				oSection[i].style.background="url("+url+")";
				oSection[i].style.backgroundSize=oBanner.offsetWidth+"px "+oBanner.offsetHeight+"px";
				oSection[i].style.display="none";
				for(var j=0;j<pageNum;j++){
					var odiv=document.createElement("div");
					odiv.style.background="url("+url+")";
					odiv.style.backgroundRepeat="no-repeat";
					odiv.style.backgroundPosition=(oBanner.offsetWidth/pageNum)*j+"px 0px";
					odiv.style.backgroundSize=oBanner.offsetWidth+"px "+oBanner.offsetHeight+"px";
					odiv.style.height=oBanner.offsetHeight+"px";
					odiv.style.width=Math.ceil((oBanner.offsetWidth)/pageNum)+"px";
					oSection[i].appendChild(odiv);
					odiv=null;
				}
			}
			oSection[0].style.display="block";
			page=true;
		}

		/**
		 * 轮播控制
		 */
		if(!ctrl){
			oContorl.style.marginLeft=(oBanner.offsetWidth-oContorl.offsetWidth)/2+"px";
			oContorl.style.marginTop=(oBanner.offsetHeight-oContorl.offsetHeight*1.5)+"px";
			if(oContorl.children.length<=0){
				for(i=0;i<length;i++){
					var odiv1=document.createElement("div");
					if(i===0){
						odiv1.style.background="#ffa703";
					}
					oContorl.appendChild(odiv1);
					odiv1=null; 
				}
			}
			ctrl=true;
		}

		/**
		 * 定时器，控制轮播时间
		 */
		setInterval(function(){
			//控制器没有锁定的时候执行
			if(!lock){
				lastPage=currentpage;
				currentpage++;
				if(currentpage>=length){
					currentpage=0;
				}
				else if(currentpage<0){
					currentpage=length-1;
				}
				var url=oSection[currentpage].getAttribute("data-href");
				odiv=oSection[currentpage].getElementsByTagName("div");
				for(i=0;i<pageNum;i++){
					odiv[i].style.background="url("+url+")";
					odiv[i].style.backgroundRepeat="no-repeat";
					odiv[i].style.backgroundPosition=(oBanner.offsetWidth/pageNum)*j+"px 0px";
					odiv[i].style.backgroundSize=oBanner.offsetWidth+"px "+oBanner.offsetHeight+"px";
					for(j=0;j<oSection.length;j++){
						oSection[j].style.display="none";
						oContorl.childNodes[j].style.background="hsla(192, 98%, 49%, 0.726)";
					}
					oSection[currentpage].style.display="block";
					oContorl.childNodes[currentpage].style.background="#ffa703";
				}
				lock=true;
				setTimeout(function(){
					lock=false;
				},time);
			}
		},0)
	}
};