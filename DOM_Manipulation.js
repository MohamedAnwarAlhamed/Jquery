$(document).ready(function() {
    // set, get
    text = $('div').text() // get
    $('p').text(text + ' - This is a new text'); // set

    html = $('div').html() // get
    $('p').html(html + ' <p>This is a new html</p>'); // set

    val = $('input').val() // get
    $('p').val(val + ' - This is a new value'); // set

    attr = $('div').attr('id') // get
    $('p').attr('class','c1'); // set

    // add
    $('p').append(' - This is a new text'); // add text inside
    $('p').prepend('This is a new text - '); // add text inside
    $('p').after('This is a new text - '); // add text
    $('p').before(' - This is a new text'); // add text
    $('p').remove(); // remove
    $('p').addCalss('c1'); // add class
    $('p').removeCalss('c1'); // remove class
    $('p').toggleClass('c1'); // toggle class
    $('p').css('color','red'); // set css
    $('p').css({color:'red',background:'blue'}); // set css
    $('p').css('color'); // get css
    $('p').width(); // get width 
    $('p').innerWidth(); // get inner width (width + padding)
    $('p').outerWidth(true); // get outer width (width + padding + border + margin with true)
    $('p').width(100); // set width
    $('p').innerWidth(100); // set inner width
    $('p').outerWidth(100); // set outer width
    //hieght like width
    


});

//https://www.w3schools.com/jquery/jquery_ref_html.asp 