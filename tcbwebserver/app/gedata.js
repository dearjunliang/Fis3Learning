define(["url","app/shops.js","jquery","map"],function(conf,shop,$,map){

  return{
  	deldata:function(data){
  		console.log("122deldata");
  		console.log(map);
		var positions;var shops;
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
	      console.log(map);
	      map.init(shops,positions);
		} 
	}
 }
})