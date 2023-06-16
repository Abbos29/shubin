// Custom Scripts

AOS.init({
    once: true
});

// Аккордеон
function accordion() {
    const items = document.querySelectorAll('.accordion__item-trigger')
    items.forEach(item => {
        item.addEventListener('click', () => {
            const parent = item.parentNode
            if (parent.classList.contains('accordion__item-active')) {
                parent.classList.remove('accordion__item-active')
            } else {
                document
                    .querySelectorAll('.accordion__item')
                    .forEach(child => child.classList.remove('accordion__item-active'))   
                parent.classList.add('accordion__item-active')
            }
        })
    })
}
accordion() 


// Модальное окно
// function bindModal(trigger, modal, close) {
//     trigger = document.querySelector(trigger),
//     modal = document.querySelector(modal),
//     close = document.querySelector(close)

//     const body = document.body

//     trigger.addEventListener('click', e => {
//         e.preventDefault()
//         modal.style.display = 'flex'
//         body.classList.add('locked')
//     });
//     close.addEventListener('click', () => {
//         modal.style.display = 'none'
//         body.classList.remove('locked')
//     });
//     modal.addEventListener('click', e => {
//         if (e.target === modal) {
//         modal.style.display = 'none'
//         body.classList.remove('locked')
//         }
//     })
// }

// // ПЕРВЫЙ аргумент - класс кнопки, при клике на которую будет открываться модальное окно.
// // ВТОРОЙ аргумент - класс самого модального окна.
// // ТРЕТИЙ аргумент - класс кнопки, при клике на которую будет закрываться модальное окно.
// bindModal('.modal__btn', '.modal__wrapper', '.modal__close')


const swiperReview = new Swiper('.review__swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    autoHeight: true,

    autoplay: {
      delay: 5000,
    },

    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
    // when window width is >= 320px
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    1280: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  }
});


const swiperAbout = new Swiper('.about__swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    autoHeight: true,

    autoplay: {
      delay: 5000,
    },

    pagination: {
      el: '.swiper-pagination',
    },

    // Responsive breakpoints
    breakpoints: {
    // when window width is >= 320px
    480: {
      slidesPerView: 1,
      spaceBetween: 20
    },
  }
});


// /* JavaScript for smooth scrolling */
// const smoothScroll = function (target, duration) {
//   const targetEl = document.querySelector(target);
//   const targetPos = targetEl.getBoundingClientRect().top;
//   const startPos = window.pageYOffset;
//   let startTime = null;

//   const animation = function (currentTime) {
//     if (startTime === null) {
//       startTime = currentTime;
//     }
//     const timeElapsed = currentTime - startTime;
//     const run = ease(timeElapsed, startPos, targetPos, duration);
//     window.scrollTo(0, run);
//     if (timeElapsed < duration) {
//       requestAnimationFrame(animation);
//     }
//   };

//   const ease = function (t, b, c, d) {
//     t /= d / 2;
//     if (t < 1) return (c / 2) * t * t + b;
//     t--;
//     return (-c / 2) * (t * (t - 2) - 1) + b;
//   };

//   requestAnimationFrame(animation);
// };

// const links = document.querySelectorAll("a");

// links.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     e.preventDefault();
//     const currentLink = item.getAttribute("href");
//     smoothScroll(currentLink, 1000);
//   });
// });
