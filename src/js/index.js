//var json=require('./new_file.js');

var fnstr=require('./new_file.js');

require('!style-loader!css-loader!./style.css');

var $=require('jquery')

document.write(fnstr('<div>今天天气henhao！</div>'));

$("div").html('第二次修改').css({"background-color":'green'})
