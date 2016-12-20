var staticMap = document.querySelector('#staticMap');
var sliderProjectLeft = document.querySelector('#sliderProjectLeft');
var sliderProjectRight = document.querySelector('#sliderProjectRight');
var projectImg = document.querySelector('#projectImg');
var variationImgInner = document.querySelector('.slider-variation__img-wrapper');
var modalPhoneInner = document.querySelector('.modal-phone');
var modalPhoneName = document.querySelector('#modalName');
var modalClose = document.querySelector('.modal-close');
var modalPhoneOpen = document.querySelector('.top-panel__phone-desktop')

// убираем картинку статичной карты
staticMap.style.display = 'none';

// модальное окно
function setModalToggle() {
  modalPhoneOpen.addEventListener('click', function() {
    modalPhoneInner.style.display = 'block';
  });
  modalClose.addEventListener('click', function() {
    modalPhoneInner.style.display = 'none';
  });
  window.addEventListener('keydown', function(event) {
    if (event.keyCode === 27) {
      if (modalPhoneInner.style.display === 'block') {
        modalPhoneInner.style.display = 'none';
      }
    }
  });
}
setModalToggle();

// слайдер для блока projects
function setProjectSlider() {
  var images = ['img/variation1.jpg', 'img/project.jpg', 'img/second-block.jpg'];
  var imagesTop = images.length - 1;
  var x = Math.floor(Math.random() * images.length);

  // функция переключение картинок в слайдере
  function toogleSlider() {
    projectImg.src = images[x];
  }
  // функция для установления пропорций слайдера
  function setSliderHeight() {
    var sliderWidth = projectImg.parentNode.offsetWidth;
    projectImg.parentNode.style.height = sliderWidth / 1.7 + 'px';
  }

  // сохраняем пропорции при изменении ширины
  window.addEventListener('resize', function() {
    setSliderHeight();
  });

  // устанавливаем пропорции слайдера
  setSliderHeight();

  // обработчики для кнопок
  sliderProjectLeft.addEventListener('click', function(event) {
    event.preventDefault();
    if (x !== 0) {
      x = --x;
      return toogleSlider();
    } else {
      x = imagesTop;
      return toogleSlider();
    }
  });

  sliderProjectRight.addEventListener('click', function(event) {
    event.preventDefault();
    if (x !== imagesTop) {
      x = ++x;
      return toogleSlider();
    } else {
      x = 0;
      return toogleSlider();
    }
  });
  return toogleSlider();
}
setProjectSlider();


// устанавливаем пропорции для слайдера блока variation
function setVariationSize() {

  function setSliderHeight() {
    var sliderWidth = variationImgInner.offsetWidth;
    variationImgInner.style.height = sliderWidth / 1.7 + 'px';
  }

  // сохраняем пропорции при изменении ширины
  window.addEventListener('resize', function() {
    setSliderHeight();
  });

  // устанавливаем пропорции слайдера
  setSliderHeight();
}
setVariationSize();
