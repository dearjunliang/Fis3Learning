
requirejs.config({
    baseUrl: 'lib',
    paths: {
        jquery: 'jquery',
        tool:'../app/myutil',
        backbone:"backbone",
        url:"../app/config",
        deldata:"../app/gedata",
        map:"../app/map"
    },
    shim :{
        'tool':{
            exports:'lw'
        }
    }
});

// require(['jquery','tool','backbone','app/shops.js'],function($,m,b,shops){
//     console.log($);
//     console.log(m);
//     console.log(b);
//     shops.listShop;
// })

require(["router.js"],function(r){
    Backbone.history.start();
});