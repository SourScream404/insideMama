const burgerButton = document.querySelector('.button-burger')
const headerMenu = document.querySelector('.header-menu')

burgerButton.onclick = function ()  {
headerMenu.classList.toggle('header-menu-open');

};

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
  });

  const recomendedSwiper = new Swiper('.recomendedSwiper', {
    slidesPerView: 2,
    enabled: false,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
      1730: {
        slidesPerView: 3,
      },
      500: {
        enabled: true,
        slidesPerView: 3,
      }
    }
  });

  const popularSwiper = new Swiper('.popularSwiper', {
    slidesPerView: "auto",
    freeMode: true,
    grabCursor: true,
    spaceBetween: 20,
  });