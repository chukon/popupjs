jQuery.get('notification.txt', function(data) {
    alert(data);
    var s = JSON.stringify(data);
    if (s != ""){
        var createDialog = function(s , "1-Minute Guide") {
         var dialog =  "<div id=dialog <h1>" + s + "</h1></div>";
        $('body').append(dialog);
        $('#dialog').prop('title' , title);
         $('#dialog').dialog();
         }
    }
});

