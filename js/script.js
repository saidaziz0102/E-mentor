'use strict';
window.addEventListener('DOMContentLoaded', () => {

    var typed = new Typed('.master__desc-title', {
        strings: [
            'Учитесь у лучших',
        ],
        typeSpeed: 100,
        backSpeed: 40,
        loop: true,
    });

    const burger = document.querySelector('.burger'),
        menu = document.querySelector('.header__list');

    burger.addEventListener('click', () => {
        if (menu.classList.contains('header__list--active')) {
            menu.classList.remove('header__list--active'),
                burger.classList.remove('burger--active');
        } else {
            menu.classList.add('header__list--active'),
                burger.classList.add('burger--active');
        }
    });
})