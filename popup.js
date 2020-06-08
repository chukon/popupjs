jQuery.get('notification.txt', function(data) {
    alert(data);
        var createDialog = function(data , "1-Minute Guide") {
         var dialog =  "<div id=dialog <h1>" + data + "</h1></div>";
        $('body').append(dialog);
        $('#dialog').prop('title' , title);
         $('#dialog').dialog();
         }
});

