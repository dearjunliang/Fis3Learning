define(["backbone","url","app/shops.js","jquery","deldata","map"],function(bb,conf,shop,$,gd,map){
  var router = Backbone.Router.extend({
    routes: {
      "help":                 "help",    // #help
      "getshopdata/:m/:count":"getdata"
    },
    getdata: function(m,count) {
      var url = conf.shopsUrl + "/" + m + "/pagecount/" + count;
      shop.listShop(url,gd.deldata);
    }
  });
  return new router();
  })
