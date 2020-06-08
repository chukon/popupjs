window.onload = function(){
var fs = require('fs');
var text = fs.readFileSync('notification.txt', 'utf8');
alert(text);
};
