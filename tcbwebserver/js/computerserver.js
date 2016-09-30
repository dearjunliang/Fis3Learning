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

var datapre = document.getElementsByClassName("datapre")[0],
datanext = document.getElementsByClassName("datanext")[0],
datapg = document.getElementsByClassName("datapg");
for(var i=0;i<datapg.length;i++){
	(function(j){
		datapg[j].onclick = function(e){
			var evt = e||window.e;
			evt.preventDefault();
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
			evt.preventDefault();
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
	urlfirst = "http://localhost:3000/tcb/shops/pagecount/1?callblack=?";
	$.getJSON(urlfirst,pressJSONP);
	 //地图关闭事件
	$(".mapclose").on("click",function(){
		$("#mapcnt").css("display","none");
		$("#motai").css("display","none");
	})
	$(".map").on("click",function(){
		$("#mapcnt").css("display","block");
		$("#motai").css("display","block");
		$.getJSON(urlfirst,pressJSONP);
	})
	//点击页码更新数据
	$(".datapg").on("click",dataclick)
	$(".mapdatapg").on("click",dataclick)
	//
	function dataclick(){
		var page = $(this).text();
		// $(".datapre").on("click",function(e){
		// 	var evt = e||window.e;
		// 	evt.preventDefault();
		// 	page--;
		// })
		// $(".datanext").on("click",function(e){
		// 	var evt = e||window.e;
		// 	evt.preventDefault();
		// 	page++;
		// })
		
		var url = "http://localhost:3000/tcb/shops/pagecount/"+page+"?callblack=?";
		$.getJSON(url,pressJSONP);
	}	
})
var positions;var shops;
//将从服务器数据获得的数据填充到商店展示区域
	function pressJSONP(data){
		var shops =data.shop_data;
		positions=[];
		for(var i=0;i<5;i++){
			$($(".shoppic")[i]).attr("src",shops[i].shop_ico);
			$($(".shopname")[i]).text(shops[i].shop_name);
			$($(".shopsell")[i]).text("主营："+shops[i].main);
			$($(".shopad")[i]).text("地址："+shops[i].addr);
			$($(".shopvst")[i]).text("人气："+shops[i].shop_visit+"次浏览");
			//地图经纬度
			positionx = shops[i].map_longitude;
			positiony = shops[i].map_latitude;
			position=[positionx,positiony];
			positions.push(position);
			init(shops);
		}	
	}
	function init(shops){
        var map = new AMap.Map('map', {
            center:positions[0],
            zoom: 10
        });
        map.plugin(["AMap.ToolBar"], function() {
            map.addControl(new AMap.ToolBar());
        });	
        var icon = new AMap.Icon({
            image : './images/map.png',//24px*24px
            //icon可缺省，缺省时为默认的蓝色水滴图标，
            size : new AMap.Size(24,38)
  		});
  		var marks=[],info=[];
        for(var i = 0;i < 5;i++){
        	(function(j){
        		marks[j] = new AMap.Marker({
	            icon : icon,//24px*24px
	            position :positions[j],
	            offset : new AMap.Pixel(-12,-12),
	            map : map
	   			});

	   			info[j] = new AMap.InfoWindow({
      				content:infocnt(shops[j]),
       				offset:new AMap.Pixel(0,-28)
   				})
    			//info[j].open(map,marks[j].getPosition())
    			var clickHandle = AMap.event.addListener(marks[j],"click",function(){
   					info[j].open(map,marks[j].getPosition());
   				});
        	})(i)
        }      	  		
	}
	  			


function infocnt(data){
	$(".ifshopname").text(data.shop_name);
	$(".ifshopmain").text("主营："+data.main);
	$(".ifshopad").text("地址："+data.addr);
	$(".ifshophref").attr("href",data.shop_addr);
	return $(".infocnt").html()
}



