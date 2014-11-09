/**
 * Created by Karol on 2014-11-07.
 */


$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');  // or fluent transition: 'jswing'
        event.preventDefault();
    });
})


$(window).scroll(
    function() {
        if ($(".navbar").offset().top > 69) {
            $(".navbar-fixed-top").addClass("nav-lower");
            //alert("something's happened");
        }
        else {
            $(".navbar-fixed-top").removeClass("nav-lower");
        }
    }
);
