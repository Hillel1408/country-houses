$(document).ready(function () {
    $('.popup__slider-big').slick({
        arrows: true,
        dots: false,
        asNavFor: '.popup__slider-small',
    });
    $('.popup__slider-small').slick({
        asNavFor: '.popup__slider-big',
        focusOnSelect: true,
        arrows: false,
        dots: false,
        slidesToShow: 'auto',
    });
});
