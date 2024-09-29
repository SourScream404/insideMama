const burgerButton = document.querySelector('.button-burger')
const headerMenu = document.querySelector('.header-menu')

burgerButton.onclick = function ()  {
headerMenu.classList.toggle('header-menu-open');

};

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
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
    slidesPerView: 3,
    loop: false,
    centeredSlides: true,
    grabCursor: true,
  });