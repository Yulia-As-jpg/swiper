let init = false;
let swiper;

function swiperCard() {
  if (window.innerWidth <= 767) {
    if (!init) {
      init = true;
      swiper = new Swiper(".swiper", {
        direction: "horizontal",
        freeMode: true,
        viewingSlides: "авто",
        centeredSlides: true,
        spaceBetween: 16,
        width: 240,
        pagination: { el: ".swiper-pagination",
        clickable: true, 
      },
      });
    } else if (init) {
      swiper.destroy();
      init = false;
    }
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);


const hideButton = document.querySelector('.opening-button__open');

const hiddenSlides = document.querySelector('.swiper-wrapper');


let isHidden = true;

let showList = () => {
  console.log(hiddenSlides);
  hiddenSlides.classList.add('visible');
  isHidden = false;
  hideButton.innerHTML = 'Скрыть';
  hideButton.classList.toggle('rotate');
}

let hideList = () => {
  hiddenSlides.classList.remove('visible');
  isHidden = true;
  hideButton.innerHTML = 'Показать все';
  hideButton.classList.toggle('rotate');
}

hideButton.addEventListener('click', () => {
  if (isHidden) {
      showList();
  } else {
      hideList();
  }
});
