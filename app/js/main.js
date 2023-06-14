$(function(){
 $('.reviews__inner').slick({
  dots: true,
  infinite: false,
  prevArrow: '<button type="button" class="slick-next"><svg><use xlink:href="images/sprite.svg#prev-arrow"></use></svg></button>',
  nextArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="images/sprite.svg#next-arrow"></use></svg></button>'
 });
});


var mixitup = mixitup('.features-list__items')

document.addEventListener('DOMContentLoaded', () => {

  const burger = document.querySelector('.burger'); 
  burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active'); 
  });
});

document.addEventListener('DOMContentLoaded', () => {

  //Mobile Menu
  const burger = document.querySelector('.burger'); //наша кнопка
  const mobileMenu = document.querySelector('.header-menu__list'); //мобильное меню
  const bodyLock = document.querySelector('body'); //ищем как селектор ТЕГА

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('header-menu__list--active'); //когда меню открыто
    if (mobileMenu.classList.contains('header-menu__list--active'))  { //Проверяем, есть ли у меню активный класс
      burger.classList.add('burger--active'); //Когда открыто, иконка становится крестиком
      bodyLock.classList.add('lock'); //Блокируем скролл при открытом меню
    }
    else { //Когда нету активного класса у меню
      burger.classList.remove('burger--active'); //Возвращает в исходное состояние
      bodyLock.classList.remove('lock'); //Разрешаем скроллить
    }
  });
});