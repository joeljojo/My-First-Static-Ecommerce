/*========================================
            Navigation
========================================= */

$(function() {
    //Show/Hide Nav On Page Load
    showHideNav();
    $(window).scroll(function() {
        //Show/Hide Nav On Window's Scroll
        showHideNav();
    });

    function showHideNav() {
        if ($(window).scrollTop() > 50) {
            //Show White Nav
            $("nav").addClass("white-nav-top");
            //Show Logo 01
            $(".navbar-brand img").attr("src", "img/logo/img-logo 01.png");
            //Show Back To Top Button
            $("#back-to-top").fadeIn();
        } else {
            //Hide White Nav
            $("nav").removeClass("white-nav-top");
            //Show Logo 02
            $(".navbar-brand img").attr("src", "img/logo/img-logo 02.png");
            //Hide Back To Top Button
            $("#back-to-top").fadeOut();
        }
    }
});