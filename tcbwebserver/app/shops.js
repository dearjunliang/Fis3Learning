define(["tool","jquery","url"],function(t,$,conf){
	return {
		listShop:function(url,fn){
			var result = null;
			$.ajax({
				type:"get",
				url:url,
				success:function(data){
					fn(data);
				}
			})
			return result
		}
	}
})