$(document).ready(function ($) {
    $('.card-slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 400,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
});

// ! SLider 3

$(document).ready(function ($) {
    $('.card-slider1').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 400,
            settings: {
                dots: false,
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
});