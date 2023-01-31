/*
--https://www.w3schools.com/jquery/jquery_ref_traversing.asp
*/

$(document).ready(function() {

    $("p").parent().css({"color": "red", "border": "2px solid red"});
    $("p").parents('div').css({"color": "red", "border": "2px solid red"});
    $("p").parentsUntil("div").css({"color": "red", "border": "2px solid red"});

    $("p").children('ul').css({"color": "red", "border": "2px solid red"});
    $("p").find("span").css({"color": "red", "border": "2px solid red"});

    $("p").siblings().css({"color": "red", "border": "2px solid red"});
    $("p").next().css({"color": "red", "border": "2px solid red"});
    $("p").nextAll().css({"color": "red", "border": "2px solid red"});
    $("p").nextUntil("h2").css({"color": "red", "border": "2px solid red"});
    $("p").prev().css({"color": "red", "border": "2px solid red"});
    $("p").prevAll().css({"color": "red", "border": "2px solid red"});
    $("p").prevUntil("h2").css({"color": "red", "border": "2px solid red"});

});