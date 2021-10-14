const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__rating-counter'),
    lines = document.querySelectorAll('.skills__rating-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

const ID_MENU = "sidedpanel",
      promo = "promo",
      devider = document.querySelector('.sidepanel__devider'),
      text = document.querySelector('.sidepanel__text span'),
      link = document.querySelectorAll('.sidepanel__link svg path');

window.onload = function(){
window.addEventListener("scroll",function(){
    var element = document.getElementById(promo);
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;//текущая позиция скролла
    if(scrollTop < element.offsetHeight-530){
        devider.style.background="#fff"
        text.style.color="#fff"
        for(var i=0;i<link.length;i++){
            link[i].style.fill="#fff"
          }
    }
    else if(scrollTop > element.offsetHeight-530){
        devider.style.background="#000"
        text.style.color="#000"
        for(var i=0;i<link.length;i++){
            link[i].style.fill="#000"
          }
    }
});
}