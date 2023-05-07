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

const popupBtn = document.querySelector('.popupBtn');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');

popupBtn.addEventListener('click', function () {
    popup.classList.toggle('open');
    document.body.classList.toggle('lock');
});
popupClose.addEventListener('click', function () {
    popup.classList.toggle('open');
    document.body.classList.toggle('lock');
});
