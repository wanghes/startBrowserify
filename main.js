window.onload = function  () {
	var name = require("./include/name");
	var censors = require('./censors');
	var str = 'sad he is mad,his father is bad';
	var newStr = censors.censor(str);
	document.write(newStr);
	document.write('<br>Name:'+name());
}