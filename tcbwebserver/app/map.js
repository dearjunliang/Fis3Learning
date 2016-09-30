define(["url","app/shops.js","jquery"],function(conf,shop,$){
  return{
  	init:function(shops,positions){
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
    function infocnt(data){
      console.log("aaa");
      $(".ifshopname").text(data.shop_name);
      $(".ifshopmain").text("主营："+data.main);
      $(".ifshopad").text("地址："+data.addr);
      $(".ifshophref").attr("href",data.shop_addr);
      return $(".infocnt").html();
    }       
  }
 
}
})
