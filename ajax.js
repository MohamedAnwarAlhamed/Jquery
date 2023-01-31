/*
https://www.w3schools.com/jquery/jquery_ref_ajax.asp
*/

$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "",
        data:{format: "json",},
        error: function () {
            $("#info").html("<p>An error has occurred</p>");
        },
        success: function (data) {
            var $title = $("<h1>").text(data.talks[0].talk_title);
            var $description = $("<p>").text(data.talks[0].talk_description); $("#info").append($title).append($description);
        },
        });
});