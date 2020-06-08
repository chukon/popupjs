jQuery.get('notification.txt', function(data) {
    alert(data);
    $( "#dialog-box" ).dialog({
            width: "auto",
            height: "auto",
        });
});
