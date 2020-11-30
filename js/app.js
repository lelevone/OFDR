function email_test(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
var swiper = new Swiper('.education__swiper', {
  slidesPerView: 4,
  spaceBetween: 28,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay:{
    delay:3000,
     stopOnlastSlide: true,
     disableOnInteraction:false
  },
  breakpoints:{
    320: {
      slidesPerView: 1,
    },
    665: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1234: {
      slidesPerView: 4,
    },
  }
});

var swiper = new Swiper('.examples__swiper', {
  slidesPerView: 4,
  spaceBetween: 38,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints:{
    320: {
      slidesPerView: 1,
    },
    666: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1152: {
      slidesPerView: 4,
    },
  },
});
let footerColumns =   document.querySelectorAll('.footer__title');
let footerNavs = document.querySelectorAll('.footer__nav');
if(document.documentElement.clientWidth){
  for(let i = 0; i < footerColumns.length; i++){
    footerColumns[i].onclick = () =>{
      console.log(footerColumns[i]);
      footerColumns[i].classList.toggle('active');
      console.log(footerNavs[i]);
      footerNavs[i].classList.toggle('active');
    }
  }
}

const burger = document.querySelector('.header__burger');

burger.addEventListener('click',openMenu);

function openMenu(){
  burger.classList.toggle('active');
  document.querySelector('.burger__body').classList.toggle('active');
  document.querySelector('body').classList.toggle('lock');
}


//============================================================

window.addEventListener("DOMContentLoaded", function() {
  function setCursorPosition(pos, elem) {
      elem.focus();
      if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
      else if (elem.createTextRange) {
          let range = elem.createTextRange();
          range.collapse(true);
          range.moveEnd("character", pos);
          range.moveStart("character", pos);
          range.select()
      }
  }
  
  function mask(event) {
      let matrix = this.defaultValue,
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, "");
          def.length >= val.length && (val = def);
      matrix = matrix.replace(/[_\d]/g, function(a) {
          return val.charAt(i++) || "_"
      });
      this.value = matrix;
      i = matrix.lastIndexOf(val.substr(-1));
      i < matrix.length && matrix != this.defaultValue ? i++ : i = matrix.indexOf("_");
      setCursorPosition(i, this)
  }
  
      let input = document.querySelectorAll(".input-number");
      for(let i = 0; i < input.length; i++){
      input[i].addEventListener("input", mask, false)}
  });
//Burger
