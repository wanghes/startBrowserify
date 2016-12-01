(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var censoredWords = ["sad", "bad", "mad"];
var customCensoredWords = [];
function censor(inStr) {
  for (idx in censoredWords) {
    inStr = inStr.replace(censoredWords[idx], "****");
  }
  for (idx in customCensoredWords) {
    inStr = inStr.replace(customCensoredWords[idx], "****");
  }
  return inStr;
}
function addCensoredWord(word){
  customCensoredWords.push(word);
}
function getCensoredWords(){
  return censoredWords.concat(customCensoredWords);
}
exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;
},{}],2:[function(require,module,exports){
module.exports = function(){
	var name = 'Ma Yun ta da ye'
	console.log('name: %s',name);
	return name;
}
},{}],3:[function(require,module,exports){
window.onload = function  () {
	var name = require("./include/name");
	var censors = require('./censors');
	var str = 'sad he is mad,his father is bad';
	var newStr = censors.censor(str);
	document.write(newStr);
	document.write('<br>Name:'+name());
}
},{"./censors":1,"./include/name":2}]},{},[3]);
