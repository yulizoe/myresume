// JavaScript Document
//初始化载入js
window.onload=function(){
	 //获取DOM对象
    var oskill=document.getElementById('skill');

//弹框事件处理
   $("#erp , .icon1").click(function(){
	   popup("../resources/erp.png");
	   });
   $("#enterprise , .icon2").click(function(){
	   popup("../resources/enterprise.png");
	   });
   $("#bootstrap , .icon3").click(function(){
	   popup("../resources/bootstrap.png");
	   });	   	   
   
		
//组件一			
//实现弹出图片开始
function popup(showimg){
	 //创建遮罩层
	 var fullbg=document.createElement("div");
	 fullbg.setAttribute('class','fullbg');
	 document.body.appendChild(fullbg);
	 //创建图片框
	 var imgbox=document.createElement("div");
	 imgbox.setAttribute('class','imgbox');
	 document.body.appendChild(imgbox);
	 //插入图片
	 var showImg=document.createElement("img");
	 showImg.setAttribute('class','showImg');
	 imgbox.appendChild(showImg);
	 showImg.src=showimg;
	 //关闭符号
	 var pclose=document.createElement("img");
	 pclose.setAttribute('id','pclose');
	 imgbox.appendChild(pclose);
	 pclose.src="../resources/close.png";
	 
	 //关闭符号的事件
	 $(document).ready(function(){
		 $('#pclose').click(
		 function(){
			 $('.fullbg,.imgbox').remove();
			 });
	 });
//实现弹出图片结束
	}


//组件二
//chart组件开始
function chart(name,degree){
	 //创建小条
     var bar=document.createElement("div");
	 bar.setAttribute('class','bar');
	 oskill.appendChild(bar);
	 //创建名字
	 var charttext1=document.createTextNode(name);
	 bar.appendChild(charttext1);
	 var blank=document.createTextNode(" ");
	 bar.appendChild(blank);
	 var charttext2=document.createTextNode(degree);
	 bar.appendChild(charttext2);
	 //创建进度条的盒子
	 var degreebarbox=document.createElement("div");
	 degreebarbox.setAttribute('class','degreebarbox');
	 bar.appendChild(degreebarbox);
	 //创建进度条
	 var degreebar=document.createElement("div");
	 degreebar.setAttribute('class','degreebar');
	 degreebar.style.width=degree;
	 degreebarbox.appendChild(degreebar);
//chart组件结束	 
	 }

//通过ajax获得后台数据
$(document).ready(function(){
 $.ajax({  
    url:'../page/chartdata.json',  
    dataType:'JSON'  
}).done(function(data){  
    // 处理成功回调
	 $.each(data,function(i){
		chart(data[i].name,data[i].degree);
	  });   
}).fail(function(){  
     //处理失败显示图片
	 $('#skill img').css('display','block');
}); 
});


//组件三，导航
function navstyle(){
	$('.nav a').click(function(){
		$('.nav a').removeClass();
		this.setAttribute('class','active');
		});
	}

navstyle();


//组件四，滚动框
/*以下是获得元素*/
var oAbusolute_box=document.getElementsByClassName("abusolute_box")[0];
//每次滚动的长度
var tabWidth=-400;
/*以下是各个事件*/
		 	
//执行tab()函数
	Tab();

//滚动框移上去和离开的事件
oAbusolute_box.onmouseover=stops;
oAbusolute_box.onmouseout=Tab;
		
/*以下是封装的函数*/	
//Tab方法开始,有Interval
function Tab(){
		//setInterval方法
		timer=setInterval(tab,2000);
//Tab方法结束	
}
//tab方法
function tab(){
	//107是每张小图片的宽度
	 oAbusolute_box.style.left=oAbusolute_box.offsetLeft+tabWidth+'px';
	 //转换为数值类型方便比较
	 var Left=parseInt(oAbusolute_box.style.left);
	 //当长滚动条滚动到一半时就重新回到开头
	 if(Left<-oAbusolute_box.offsetWidth*0.5){
		 oAbusolute_box.style.left=0+'px';
		 }	
	 }	
	 
//停止滚动事件
function stops(){
	clearInterval(timer);
	}



//组件五
//放在图片上出现放大镜
$('.magnifier').mouseover(function(){
	$(this).css("opacity","0.9");
	$(this).children("input").css("opacity","0.9");
}).mouseout(function(){
	$(this).css("opacity","0.7");
	$(this).children("input").css("opacity","0.3");
	});

//window.onload结束	  
};