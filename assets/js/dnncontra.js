$(document).ready(function ($) {
    "use strict";

    // hack for GH-22
    if ($("a#dnn_dnnLogin_enhancedLoginLink").attr ("href").toLowerCase ().indexOf ("logoff") < 0) {
        $("a#dnn_dnnLogin_enhancedLoginLink")
            .attr ("href", window.contraSkin.baseUrl + "/login?returnurl="
                + encodeURIComponent(window.contraSkin.profileUrl))
            .attr ("onclick", "return dnnModal.show('"
                + window.contraSkin.baseUrl
                + "/login?returnurl="
                + encodeURIComponent(window.contraSkin.profileUrl) + "&popUp=true',/*showReturn*/true,300,650,true,'')");
    }

    $(function () {
        if ($('form').hasClass('showControlBar')) $('.header').addClass('admin-bar');
    });


    var headerEle = function () {
        var $headerHeight = $('header').height();
        $('.hidden-header').css({ 'height': $headerHeight + "px" });
    };

    $(window).load(function () {
        headerEle();
    });

    $(window).resize(function () {
        headerEle();
    });



    /*----------------------------------------------------*/
    /*	Sticky Header
	/*----------------------------------------------------*/

    (function () {

        var docElem = document.documentElement,
			didScroll = false,
			changeHeaderOn = 100;
        document.querySelector('header');

        function init() {
            window.addEventListener('scroll', function () {
                if (!didScroll) {
                    didScroll = true;
                    setTimeout(scrollPage, 250);
                }
            }, false);
        }

        function scrollPage() {
            var sy = scrollY();
            if (sy >= changeHeaderOn) {
                //$('.top-bar').slideUp(300);
                $("header").addClass("fixed-header");
                //$('.navbar-brand').css({ 'padding-top': 19 + "px", 'padding-bottom': 19 + "px" });

                if (/iPhone|iPod|BlackBerry/i.test(navigator.userAgent) || $(window).width() < 479) {
                    $('.navbar-default .navbar-nav > li > a').css({ 'padding-top': 0 + "px", 'padding-bottom': 0 + "px" })
                } else {
                    $('.navbar-default .navbar-nav > li > a').css({ 'padding-top': 20 + "px", 'padding-bottom': 20 + "px" })
                    $('.search-side').css({ 'margin-top': -7 + "px" });
                };

            }
            else {
                //$('.top-bar').slideDown(300);
                $("header").removeClass("fixed-header");
                //$('.navbar-brand').css({ 'padding-top': 27 + "px", 'padding-bottom': 27 + "px" });

                if (/iPhone|iPod|BlackBerry/i.test(navigator.userAgent) || $(window).width() < 479) {
                    $('.navbar-default .navbar-nav > li > a').css({ 'padding-top': 0 + "px", 'padding-bottom': 0 + "px" })
                } else {
                    $('.navbar-default .navbar-nav > li > a').css({ 'padding-top': 28 + "px", 'padding-bottom': 28 + "px" })
                    $('.search-side').css({ 'margin-top': 0 + "px" });
                };

            }
            didScroll = false;
        }

        function scrollY() {
            return window.pageYOffset || docElem.scrollTop;
        }

        init();



    })();

    /*----------------------------------------------------*/
    /*	Back Top Link
	/*----------------------------------------------------*/

    var offset = 200;
    var duration = 500;
    $(window).scroll(function () {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(400);
        } else {
            $('.back-to-top').fadeOut(400);
        }
    });
    $('.back-to-top').click(function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 600);
        return false;
    })









});