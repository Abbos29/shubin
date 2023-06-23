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




// MAGNIFIC

$(document).ready(function() {
  // Инициализируем Magnific Popup
  $('.modal-link').magnificPopup({
    type: 'inline',
    closeMarkup: '<button title="%title%" class="mfp-close">×</button>'
  });

  // Функция для открытия модального окна 1
  $('#btn1').on('click', function() {
    $.magnificPopup.open({
      items: {
        src: '#modal1'
      },
      type: 'inline'
    });
  });

  // Функция для открытия модального окна 2
  $('#btn2').on('click', function() {
    $.magnificPopup.open({
      items: {
        src: '#modal2'
      },
      type: 'inline'
    });
  });

  // Функция для открытия модального окна 3
  $('#btn3').on('click', function() {
    $.magnificPopup.open({
      items: {
        src: '#modal3'
      },
      type: 'inline'
    });
  });

  // Функция для открытия модального окна 4
  $('#btn4').on('click', function() {
    $.magnificPopup.open({
      items: {
        src: '#modal4'
      },
      type: 'inline'
    });
  });

  // Функция для открытия модального окна 5
  $('#btn5').on('click', function() {
    $.magnificPopup.open({
      items: {
        src: '#modal5'
      },
      type: 'inline'
    });
  });

  // Функция для открытия модального окна 6
  $('#btn6').on('click', function() {
    $.magnificPopup.open({
      items: {
        src: '#modal6'
      },
      type: 'inline'
    });
  });

  // Функция для открытия модального окна 7
  $('#btn7').on('click', function() {
    $.magnificPopup.open({
      items: {
        src: '#modal7'
      },
      type: 'inline'
    });
  });

  // Функция для открытия модального окна 8
  $('#btn8').on('click', function() {
    $.magnificPopup.open({
      items: {
        src: '#modal8'
      },
      type: 'inline'
    });
  });

});




const form = document.getElementById("contact-form");
const modalTitle = document.getElementById("modal-title");
const submitButton = document.querySelector(".form__btn");
const thanksMessage = document.querySelector(".thanks");
const formInput = document.querySelector('.form__input');

function sendFormData(event) {
  event.preventDefault();
  
  if (formInput.checkValidity()) { // Проверяем валидность данных
    const formData = new FormData(form);
    fetch(form.action, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then(() => {
        form.classList.add("hidden");
        modalTitle.classList.add("hidden");
        thanksMessage.classList.add("open");
        thanksMessage.classList.remove("hidden");
        // setTimeout(() => {
        //   window.location.href = "https://t.me/+oh7s4EQp0oQzM2Yy";
        // }, 3000);
      })
      .catch((error) => console.error(error));
  } else {
    formInput.reportValidity(); // Выводим сообщение об ошибке
  }
}

// Добавляем слушатель событий на кнопку отправки формы:
submitButton.addEventListener("click", sendFormData);