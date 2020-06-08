window.onload = function(){
let content = fs.readFileSync('notification.txt', 'utf8');
alert(content);
};
