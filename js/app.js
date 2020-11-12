$('.tab-item').click(function () {
    $(this).parent().children('.tab-item').removeClass('active');
    $(this).addClass('active');
    const location = $(this).attr('place');
    $('.tab-content').hide();
    $('.tab-content.' + location).show();
});

$('.faq-board .faq-title').click(function () {
    if ($(this).parent().hasClass('opened')) {
        $(this).parent().removeClass('opened');
    } else {
        $(this).parent().addClass('opened');
    }
});

$('#password-confirm-btn').click(function () {
    if ($('#password-input').val() === 'kindness') {
        $('#passwordModal').modal('hide');
    }
});

$('#passwordModal').on('shown.bs.modal', function (e) {
    $('.modal-open').css('padding-right', 0);
});

const thank_form = document.forms['thank-note-form'];
const thank_url = 'https://script.google.com/macros/s/AKfycbwIAAuRxPOEzQf0PZ0kSdT30cwmErBSFB3lGN_M4NelVuE7s8_9/exec';
thank_form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(thank_url, {method: 'POST', mode: 'no-cors', body: new FormData(thank_form)})
        .then(response => {
            $('#message-content').text('Thank you! You have submitted your note to the team at Goodwill Southern California! You are ready to move to the next activity in your Kindness Quest :)');
            $('#messageModal').modal('show');
        })
        .catch(error => console.error('Error!', error.message))
});

const donation_form = document.forms['donation-form'];
const donation_url = 'https://script.google.com/macros/s/AKfycbwexfbr2kLFLkzi0z68MGH-6YwFRC3xG00k_aSzoFUu74NaTdbC/exec';
donation_form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(donation_url, {method: 'POST', mode: 'no-cors', body: new FormData(donation_form)})
        .then(response => {
            $('#message-content').text('Thank you so much for your donation selection. Please move to the next step in our Kindness Quest to continue making a difference!');
            $('#messageModal').modal('show');
        })
        .catch(error => console.error('Error!', error.message))
});

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

    $('.tab-content.europe-middle-east').hide();
    $('.tab-content.asia-pacific').hide();

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

    // Gets the video src from the data-src on each button

    let $videoSrc;
    $('.video-btn').click(function () {
        $videoSrc = $(this).data("src");
    });

    // when the modal is opened autoplay it
    $('#myModal').on('shown.bs.modal', function (e) {
        $('.modal-open').css('padding-right', 0);
        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })

    // stop playing the youtube video when I close the modal
    $('#myModal').on('hide.bs.modal', function (e) {
        // a poor man's stop video
        $("#video").attr('src', $videoSrc);
    });

    $('#passwordModal').modal({backdrop: 'static', keyboard: false});
});