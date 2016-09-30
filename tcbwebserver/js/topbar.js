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