 jQuery.get('notification.txt', function(data) {
         //alert(data.length);
          // initialize title and body variables
        if (data.length > 3){
        var notifs = data;
        var Title = "1-Minute Guide";
        if (checkCookie() == false)
        {
           createDialog(notifs , Title);
        }
}
});

var createDialog = function(text , title) {
    //create dialog <div> shell
    var dialog =  "<div id=dialog <h1>" + text + "</h1></div>";
    
    // create the dialog <div>
    $('body').append(dialog);
    
    // update the <div>'s title
    $('#dialog').prop('title' , title);
    
    //create the dialog
    $('#dialog').dialog();
}

function checkCookie() {
    // Get cookie using our custom function
    var notif = getCookie("notification");
 alert(notif);
    if(notif != "") {
      return true;
    } else {
      return false;    
      setCookie("notification","notif", 2);
    }
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime()+(hours*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
