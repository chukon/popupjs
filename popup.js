jQuery.get('notification.txt', function(data) {
alert(data.length);
    // initialize title and body variables
if (data.length > 3){
var notif = data;
var Title = "1-Minute Guide";
createDialog(notif , Title);
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

