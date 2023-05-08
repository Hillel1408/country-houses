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
        swipe: false,
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

const headerBtn = document.querySelector('.header__btn img');
const headerNav = document.querySelector('.header__nav');
const headerCloseBtn = document.querySelector('.header__nav-icon img');

headerBtn.addEventListener('click', function () {
    headerNav.classList.toggle('active');
    document.body.classList.toggle('lock');
});

headerCloseBtn.addEventListener('click', function () {
    headerNav.classList.toggle('active');
    document.body.classList.toggle('lock');
});

const headerNavLinks = document.querySelectorAll('.header__list-link');
headerNavLinks.forEach((item) => {
    item.addEventListener('click', () => {
        headerNav.classList.toggle('active');
        document.body.classList.remove('lock');
    });
});

const phoneInput = document.querySelectorAll('.feedback__input');
phoneInput.forEach((item) => {
    const phoneMask = new IMask(item, {
        mask: '+{7}(000)000-00-00',
    });
});
