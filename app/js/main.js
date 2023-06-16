$(function(){
 $('.reviews__inner').slick({
  dots: true,
  infinite: false,
  prevArrow: '<button type="button" class="slick-next"><svg><use xlink:href="images/sprite.svg#prev-arrow"></use></svg></button>',
  nextArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="images/sprite.svg#next-arrow"></use></svg></button>'
 });
});


$(window).on('load resize', function(){
  if ($(window).width() < 768) {
    $('.benefits__list:not(.slick-initialized)').slick({
      arrows: false,
      dots:true,
      infinite: true,
      speed: 100,
      slidesToShow: 1
    });
  } else {
    $("benefits__list.slick-initialized").slick("unslick");
  }
});




var mixitup = mixitup('.features-list__items')

document.addEventListener('DOMContentLoaded', () => {

  const burger = document.querySelector('.burger'); 
  burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active'); 
  });
});

document.addEventListener('DOMContentLoaded', () => {

  const burger = document.querySelector('.burger'); 
  const mobileMenu = document.querySelector('.header-menu__list'); 
  const bodyLock = document.querySelector('body'); 

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('header-menu__list--active'); 
    if (mobileMenu.classList.contains('header-menu__list--active'))  { 
      burger.classList.add('burger--active');
      bodyLock.classList.add('lock'); 
    }
    else { 
      burger.classList.remove('burger--active'); 
      bodyLock.classList.remove('lock');  
    }
  });
});