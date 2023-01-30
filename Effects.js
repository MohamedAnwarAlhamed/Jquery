// $ == jquery
$(document).ready(function() {

    $("nameofele").click(function() {
        $("nameofele").hide();
    })
    $("nameofele").click(function() {
        $("nameofele").hide(2000);
    })
    $("nameofele").click(function() {
        $("nameofele").hide(2000,function (){
            alert("The paragraph is now hidden");
        });
    });
   

});
// ====================
// https://www.w3schools.com/jquery/jquery_ref_effects.asp

