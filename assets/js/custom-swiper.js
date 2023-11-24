var swiper = new Swiper("#first-fold-swiper", {
    slidesPerView: 1,
    direction: 'horizontal',
    spaceBetween: 0,
    slidesPerGroup: 1,
    loopFillGroupWithBlank: false,
    speed: 750,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    breakpoints: {
        1200: {
            direction: 'vertical'
        }
    },
    pagination: {
        el: '#first-fold-swiper .swiper-pagination',
        clickable: true,
        dynamicBullets: false,
        renderBullet: function (index, className) {
            return '<span class="' + className + ' swiper-pagination-bullet--svg-animation"><svg width="26" height="26" viewBox="0 0 28 28"><circle class="svg__circle-outside" cx="14" cy="14" r="12" fill="none" stroke-width="1"></circle><circle class="svg__circle" cx="14" cy="14" r="12" fill="none" stroke-width="1"></circle><circle class="svg__circle-inner" cx="14" cy="14" r="3" fill="#C4C9D0"></circle></svg></span>';
        },
    },

});
var $swiperSelector = $('.slider-swiper');

$swiperSelector.each(function (index) {
    var $this = $(this);
    $this.addClass('swiper-slider-' + index);

    var swiper = new Swiper('.swiper-slider-' + index, {
        direction: 'horizontal',
        loop: false,
        freeMode: true,
        spaceBetween: 20,
        // speed: 9000,
        // autoplay: {
        //     delay: 0,
        //     disableOnInteraction: false,
        // },
        breakpoints: {
            1920: {
                slidesPerView: 3.7
            },
            992: {
                slidesPerView: 2.7
            },
            320: {
                slidesPerView: 0.9
            }
        },

        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
            dragSize: 50
        }
    });
});
var $swiperSelector1 = $('.slider-swiper-2');

$swiperSelector1.each(function (index) {
    var $this = $(this);
    $this.addClass('swiper-slider-1-' + index);

    var swiper1 = new Swiper('.swiper-slider-1-' + index, {
        direction: 'horizontal',
        loop: false,
        freeMode: true,
        spaceBetween: 0,
        breakpoints: {
            1920: {
                slidesPerView: 1.1
            },
            992: {
                slidesPerView: 1.1
            },
            320: {
                slidesPerView: 1
            }
        },

        scrollbar: {
            el: '.swiper-slider-1-' + index + ' .swiper-scrollbar',
            draggable: true,
            dragSize: 50
        }
    });
});



var $swiperSelector2 = $('.slider-swiper-3');

$swiperSelector2.each(function (index) {
    var $this = $(this);
    $this.addClass('swiper-slider-2-' + index);

    var swiper2 = new Swiper('.swiper-slider-2-' + index, {
        direction: 'horizontal',
        loop: false,
        freeMode: false,
        spaceBetween: 20,
        slidesPerView: 1,
        scrollbar: {
            el: '.swiper-slider-2-' + index + ' .swiper-scrollbar',
            draggable: true,
            dragSize: 50
        }
    });
});

