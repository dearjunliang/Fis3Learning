/**
 * 我的工具箱,组件
 */

(function(context) {
	var lw = {};
	/**
	 * 创建XMLHttpRequest对象
	 * @return {[type]} [description]
	 */
	lw.xhr = (function() {
		if (typeof XMLHttpRequest != "undefined") { //标准的XHR对象的创建
			return new XMLHttpRequest();
		} else if (typeof ActiveXObject != "undefined") {
			//IE 7
			if (typeof arguments.callee.activeXString != "string") {
				var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp"];
				var len = 0;
				for (var i = 0, len = versions.length; i < len; i++) {
					try {
						new ActiveXObject(versions[i]);
						arguments.callee.activeXString = versions[i];
						break;
					} catch (e) {
						//
					}
				}
			}
			return new ActiveXObject(arguments.callee.activeXString);
		} else {
			throw new Error("你整的是啥浏览器啊？俺们也不支持你这玩应");
		}
	})();

	/**
	 * 事件注册器
	 * @param  {[type]} ) {		if        (window.addEventListener) {			return function(elem, type, fn) {				elem.addEventListener(type, fn, false);			}		} else if (window.attachEvent) {			return function(elem, type, fn) {				elem.attachEvent('on' + type, fn);			}		}	})( [description]
	 * @return {[type]}   [description]
	 */
	lw.addEvent = (function() {
		if (window.addEventListener) {
			return function(elem, type, fn) {
				elem.addEventListener(type, fn, false);
			}
		} else if (window.attachEvent) {
			return function(elem, type, fn) {
				elem.attachEvent('on' + type, fn);
			}
		}
	})();

	/**
	 * 单实例的工厂对象
	 * @param {Function} fn [description]
	 */
	function SingletonFactory(fn) { //工厂
		var ret;
		return function() {
			return ret || (ret = fn.apply(this, arguments));
		}

	}

	var a = SingletonFactory(function() {
		return new createXHR()
	});

	lw.ce = function(elem){
		return document.createElement(elem);
	}
	//
	context.lw = lw;

})(window);