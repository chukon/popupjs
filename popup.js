window.onload = function(){
const fs = require('fs')
fs.readFile('notification.txt', (err, data) => {
  if (err) {
    alert(err)
    return
  }
 alert(data)
})
};

