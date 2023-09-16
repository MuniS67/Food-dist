const prev = document.querySelector(".offer__slider-prev");
const next = document.querySelector(".offer__slider-next");
const slides = document.querySelectorAll(".offer__slide");
const currentView = document.querySelector("#current");
const totalView = document.querySelector("#total");
let slideIndex = 0;
totalView.innerHTML = slides.length >= 10 ? slides.length : `0${slides.length}`;
function slideShow(n) {
  if (n > slides.length - 1) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  slides.forEach((slide) => slide.classList.add("fade", "hide"));
  slides[slideIndex].classList.remove("hide");
  currentView.innerHTML =
    slideIndex + 1 >= 10 ? slideIndex + 1 : `0${slideIndex + 1}`;
}
slideShow();
prev.onclick = () => {
  slideIndex--;
  slideShow(slideIndex);
};
next.onclick = () => {
  slideIndex++;
  slideShow(slideIndex);
};
const mw = document.querySelector(".modal");
const mw_close = document.querySelector("[data-close]");
const btns = document.querySelectorAll("[data-modal]");
const inps = document.querySelectorAll(".modal__input");
btns.forEach((btn) => {
  btn.onclick = () => {
    mw.classList.remove("hide", "fade");
    mw.classList.add("show", "fade");
  };
});
mw_close.onclick = () => {
  mw.classList.remove("show", "fade");
  mw.classList.add("hide", "fade");
  inps.forEach((inp) => (inp.value = ""));
};
document.body.onkeydown = (e) => {
  if (mw.classList.contains("show")) {
    if (e.keyCode === 27) {
      mw.classList.remove("show", "fade");
      mw.classList.add("hide", "fade");
      inps.forEach((inp) => (inp.value = ""));
    }
  }
};
let tabContents = document.querySelectorAll(".tabcontent");
let tabHeader_items = document.querySelectorAll(".tabheader__item");
let indexTabContent = 0;
function tabShow() {
  tabContents.forEach((tabContent) => tabContent.classList.add("hide", "fide"));
  tabContents[indexTabContent].classList.remove("hide");
}
tabShow();
tabHeader_items[0].onclick = () => {
  indexTabContent = 0;
  tabHeader_items.forEach((i) =>
    i.classList.remove("tabheader__item_active", "fide")
  );
  tabHeader_items[0].classList.add("tabheader__item_active", "fide");
  tabShow(indexTabContent);
};
tabHeader_items[1].onclick = () => {
  indexTabContent = 1;
  tabHeader_items.forEach((i) =>
    i.classList.remove("tabheader__item_active", "fide")
  );
  tabHeader_items[1].classList.add("tabheader__item_active", "fide");
  tabShow(indexTabContent);
};
tabHeader_items[2].onclick = () => {
  indexTabContent = 2;
  tabHeader_items.forEach((i) =>
    i.classList.remove("tabheader__item_active", "fide")
  );
  tabHeader_items[2].classList.add("tabheader__item_active", "fide");
  tabShow(indexTabContent);
};
tabHeader_items[3].onclick = () => {
  indexTabContent = 3;
  tabHeader_items.forEach((i) =>
    i.classList.remove("tabheader__item_active", "fide")
  );
  tabHeader_items[3].classList.add("tabheader__item_active", "fide");
  tabShow(indexTabContent);
};

const order__inputs = document.querySelectorAll(".order__input");
order__inputs[1].onkeyup = (event) => {
  if (/[0-9]/.test(event.key) === false) {
    order__inputs[1].classList.add("red");
    order__inputs[1].classList.remove("white");
  } else {
    order__inputs[1].classList.remove("red");
    order__inputs[1].classList.add("white");
  }
};
