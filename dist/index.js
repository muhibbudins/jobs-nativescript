"use strict";var _createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var Suggest=function(){function a(b,c){_classCallCheck(this,a),this.wrapper=b,this.id="asdasd",this.options=Object.assign({},c),this.state={},this.start()}return _createClass(a,[{key:"template",value:function(){return"\n      <div class=\"suggest-wrapper\" data-suggest-id=\""+this.id+"\">\n        <input type=\"text\" />\n        <div class=\"suggest-list\"></div>\n      </div>\n    "}},{key:"result",value:function(a,b){return a.map(function(a){var c=a.title.toLowerCase().replace(b,"<b>$1</b>");return"<div class=\"suggest-list_item\" data-title=\""+a.title+"\" data-value=\""+a.value+"\">"+c+"</div>"}).join("\n")}},{key:"draw",value:async function(a,b){var c=this;await fetch(this.options.url).then(function(a){return a.json()}).then(function(d){var e="("+b.split(/ /g).join("|")+")",f=new RegExp(e,"g");a.innerHTML=c.result(d.filter(function(a){return f.test(a.value)||f.test(a.title)}),f)})}},{key:"start",value:function(){var a=this,b=document.querySelector("body"),c=document.querySelector(this.wrapper);c.innerHTML=this.template();var d=document.querySelector("[data-suggest-id=\""+this.id+"\"]"),f=d.querySelector("input"),g=d.querySelector(".suggest-list");f.addEventListener("keyup",function(b){var c=b.target.value;c.length>=a.options.minimal?(g.classList.add("suggest-list_active"),a.draw(g,c).then(function(){g.querySelectorAll(".suggest-list_item").forEach(function(b){b.addEventListener("click",function(b){a.state=b.target.dataset,f.value=a.state.title},!1)})})):g.classList.remove("suggest-list_active")},!1),f.addEventListener("focus",function(b){var c=b.target.value;c.length>=a.options.minimal?g.classList.add("suggest-list_active"):g.classList.remove("suggest-list_active")},!1),c.addEventListener("click",function(a){a.stopPropagation()},!1),b.addEventListener("click",function(){g.classList.remove("suggest-list_active")},!1)}}]),a}();