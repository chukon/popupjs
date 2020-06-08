window.onload = function(){
var fs = require('fs');
 
fs.readFile('notification.txt', 'utf8', function(err, contents) {
    console.log(contents);
});
 
console.log('after calling readFile');
};

