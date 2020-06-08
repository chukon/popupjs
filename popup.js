jQuery.get('notification.txt', function(data) {
    alert(data);
    $( "#notif" ).dialog({
            width: "auto",
            height: "auto",
        });
});
