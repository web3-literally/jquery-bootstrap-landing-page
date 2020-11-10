$('.tab-item').click(function () {
    $(this).parent().children('.tab-item').removeClass('active');
    $(this).addClass('active');
});

function initialize() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: new google.maps.LatLng(42.3341, -83.0478),
        // mapTypeId: google.maps.MapTypeId.ROADMAP,
        // mapTypeId: google.maps.MapTypeId.SATELLITE,
        // disableDefaultUI: true,
        zoomControl: true
    });
}

google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(function () {
    $('.donate-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true,
        responsive: [{
            breakpoints: 1024,
            breakpointSettings: {
                slidesToShow: 2,
            }
        }]
    });

    $('#mobile-menu-icon').click(function () {
        if ($('.dropdown-menu').is(':visible')) {
            $('.dropdown-menu').slideUp(100);
            $('.menu-mask').hide();
        } else {
            $('.dropdown-menu').slideDown(100);
            $('.menu-mask').show();
        }
    });
    $('.dropdown-menu>li>a').click(function () {
        $('.dropdown-menu').slideUp(100);
        $('.menu-mask').hide();
    });
    $('.menu-mask').click(function () {
        $('.dropdown-menu').slideUp(100);
        $('.menu-mask').hide();
    });
});