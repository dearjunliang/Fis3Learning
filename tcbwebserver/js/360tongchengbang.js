var citycheck = document.getElementsByName("citycheck")[0];
var citycnt = document.getElementsByClassName("citycnt")[0];
var closecitycnt = document.getElementsByName("closecitycnt");

citycheckClick = function(e){
	var evt=e||window.e;
	evt.preventDefault();
	citycnt.style.display = "block";
}
citycheck.addEventListener("click",citycheckClick);
closecitycnt[0].onclick = function(e){
	var evt=e||window.e;
	citycnt.style.display = "none";
}

//轮播图
var imgshowcnt = document.getElementsByClassName("top-cate-img")[0],
turnimgdiv = document.getElementsByClassName("turnimgdiv")[0],
light = document.getElementsByClassName("lightitem"),
x = 0,
count = 1;
window.onload = function(){
	turnimgdiv.time = setInterval(turnImg,1);
}
function turnImg(){
	x-=10;
	turnimgdiv.style.left = x +"px";
	if (x%1200== 0||x==0){
		clearInterval(turnimgdiv.time);
		for(var j =0;j < light.length;j++){
			light[j].style.background = "white";
		}
		light[count].style.background = "black";
		count++;
		if(count==5){
		count =0;
	}
		setTimeout(function(){
			turnimgdiv.time=setInterval(turnImg,1);
		},3000)
	}
	if (x< -6000){
		x= 0;
	}
}
for(var i =0;i<light.length;i++){
	(function(j){
		light[j].onclick=function(){
			clearInterval(turnimgdiv.time);
			turnimgdiv.style.left = -j*1200+"px";
			for(var k =0;k < light.length;k++){
			light[k].style.background = "white";
		}
			this.style.background = "black";
			x = -1200*j;
		}
	})(i)
}


var topcatemenu = document.getElementsByClassName("top-cate-menu")[0];
var menuitem = topcatemenu.getElementsByTagName("li");
var itencnt = document.getElementsByClassName("displaybar");
var qipao2 = document.getElementsByClassName("qipao2");
for(var i = 0;i<menuitem.length;i++){
	(function(j){
		menuitem[j].onmouseover = function(){
			qipao2[j].style.display = "block";
			itencnt[j].style.display = "block";
			itencnt[j].style.top = j*85 + "px";
		}
	})(i)	
}
for(var i = 0;i<menuitem.length;i++){
	(function(j){
		menuitem[j].onmouseout = function(){
			qipao2[j].style.display = "none";
			itencnt[j].style.display = "none";
		}
	})(i)	
}
for(var i = 0;i<itencnt.length;i++){
	(function(j){
		itencnt[j].onmouseover = function(){
			this.style.display = "block";
			qipao2[j].style.display = "block";
		}
	})(i)
}
for(var i = 0;i<itencnt.length;i++){
	(function(j){
		itencnt[j].onmouseout = function(){
			this.style.display = "none";
			qipao2[j].style.display = "none";
		}
	})(i)
}

var datapre = document.getElementsByClassName("datapre")[0],
datanext = document.getElementsByClassName("datanext")[0],
datapg = document.getElementsByClassName("datapg");
for(var i=0;i<datapg.length;i++){
	(function(j){
		datapg[j].onclick = function(e){
			var evt = e||window.e;
			if (j>0){
				datapre.style.display = "inline-block";
				//datanext.style.display = "block";
			}
			for(var k=0;k<datapg.length;k++){
				datapg[k].style.background = "white";
				datapg[k].style.color = "#9F9999";
			}
			this.style.background = "#FC6621";
			this.style.color = "#fff";
		}
	})(i)
}

var mapdatapre = document.getElementsByClassName("mapdatapre")[0],
mapdatanext = document.getElementsByClassName("mapdatanext")[0],
mapdatapg = document.getElementsByClassName("mapdatapg");
for(var i=0;i<mapdatapg.length;i++){
	(function(j){
		mapdatapg[j].onclick = function(e){
			var evt = e||window.e;
			if (j>0){
				mapdatapre.style.display = "inline-block";
				//datanext.style.display = "block";
			}
			for(var k=0;k<mapdatapg.length;k++){
				mapdatapg[k].style.background = "white";
				mapdatapg[k].style.color = "#9F9999";
			}
			this.style.background = "#FC6621";
			this.style.color = "#fff";
		}
	})(i)
}
//鼠标进入商店区域显示进入商店按钮 和 鼠标离开商店区域隐藏进入商店按钮 以及背景变色（css hover可以实现）
var listitem = document.getElementsByClassName("listitem");
for(var i = 0;i<listitem.length;i++){
	(function(j){
		listitem[j].onmouseover=function(){
			$($(".itemcntright")[j]).css("display","block");
		}
	})(i)
}
for(var i = 0;i<listitem.length;i++){
	(function(j){
		listitem[j].onmouseout=function(){
			$($(".itemcntright")[j]).css("display","none");
		}
	})(i)
}


//服务器数据获取以及添加到页面
$(document).ready(function(){
	// urlfirst = "http://localhost:3000/tcb/shops/pagecount/1?callblack=?";
	// $.getJSON(urlfirst,pressJSONP);
	 //地图关闭事件
	$(".mapclose").on("click",function(){
		$("#mapcnt").css("display","none");
		$("#motai").css("display","none");
	})
	$(".map").on("click",function(){
		$("#mapcnt").css("display","block");
		$("#motai").css("display","block");
	})
})

//将从服务器数据获得的数据填充到商店展示区

//底部搜索栏事件处理
$(".searchipt").on("focus",function(){
	if ($(this).val().length==0){
		$(".morensrh").css("display","block");
	}else if ($(this).val().length!=0){
		$(".search").css("display","block");
	}
})
$(".searchipt").on("blur",function(){
		$(".morensrh").css("display","none");
		$(".search").css("display","none");
})
$(".search").mouseover(function(){
	$(".search").css("display","block");
})

//input 变化事件
var searchipt = document.getElementsByClassName("searchipt")[0];
searchipt.oninput = function(e){
	evt = e||window.e;
	e.preventDefault();
	var script=null;
	script = $("<script></script>")
	script.appendTo("body");
	//input里面的值改变下方内容也发生变化	
	if ($(this).val().length==0){
		$(".morensrh").css("display","block");
		$(".search").css("display","none");
	}else if ($(this).val().length!=0){
		$(".morensrh").css("display","none");
		$(".search").css("display","block");
	}
	console.log($(this).val());
	//数据获取
	var urlipt = "http://suggest.bang.360.cn/suggest?word="+$(this).val()+"&category=7&encodein=utf-8&encodeout=utf-8&format=json&callback=suggest&t=0.3514809920297852"
	script.attr("src",urlipt);
	script.remove();
}
 function suggest(datas){
 	var data = datas.result;
 	$(".search").html(null);
 	for(var i= 0;i< (data.length < 6 ? data.length : 6);i++){
 	 $("<p class='searchcnt'></p>").text(data[i].word).appendTo($(".search"));
 	}
 	$(".searchcnt").mouseover(function(){
 		$(this).css("background","lightgreen");
 	})
 	$(".searchcnt").mouseout(function(){
 		$(this).css("background","white");
 	})
 	$(".searchcnt").click(function(){
 		$(".searchipt").val($(this).text());
 	})
 }