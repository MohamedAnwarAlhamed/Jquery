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

    $("nameofele").click(function() {
        $("nameofele").hide(2000).show(2000).slideUp(5000).slideDown(3000);
    });
   

});
// ====================
// https://www.w3schools.com/jquery/jquery_ref_effects.asp

