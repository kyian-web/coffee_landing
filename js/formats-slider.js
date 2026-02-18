const swiper = new Swiper(".swiper-container", {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1280: {
            slidesPerView: 1,
        },
    },

    navigation: {
        nextEl: ".carousel-button.next",
        prevEl: ".carousel-button.prev",
    },

    effect: "cube",
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
});
