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

let tabContents = document.querySelectorAll(".tabcontent");
let tabHeader_items = document.querySelectorAll(".tabheader__item");

let clickedItem = 0;

tabContents.forEach((i) => i.classList.add("fade", "hide"));
tabContents[0].classList.remove("hide");

tabHeader_items.forEach((tab, idx) => {
  tab.onclick = () => {
    tabHeader_items[clickedItem].classList.remove("tabheader__item_active");
    tabHeader_items[idx].classList.add("tabheader__item_active");
    tabContents[clickedItem].classList.add("hide");
    tabContents[idx].classList.remove("hide");

    clickedItem = idx;
  };
});

let userData = {
  gender: "woman",
};

let genders = document.querySelectorAll("[data-gender]");
let constitution = document.querySelectorAll(
  ".calculating__choose_medium input"
);
let activity = document.querySelectorAll(".calculating__choose_big div");
let overResult = document.querySelector("#result");

let choseGender = 0;

genders.forEach((gender, idx) => {
  gender.onclick = () => {
    genders[choseGender].classList.remove("calculating__choose-item_active");
    gender.classList.add("fade", "calculating__choose-item_active");
    userData.gender = gender.getAttribute("data-gender");
    choseGender = idx;
  };
});

constitution.forEach((inp) => {
  inp.onkeyup = () => {
    userData[inp.id] = inp.value;
  };
});

activity.forEach((act) => {
  act.onclick = () => {
    let kaf = +act.getAttribute("data-act");
    activity.forEach((a) =>
      a.classList.remove("calculating__choose-item_active")
    );
    act.classList.add("calculating__choose-item_active");
    if (userData.gender === "woman") {
      let result =
        655.1 +
        9.563 * userData.weight +
        1.85 * userData.height -
        4.676 * userData.age;
      result *= kaf;
      overResult.innerHTML = Math.round(result);
    }
    if (userData.gender === "man") {
      let result =
        66.5 +
        13.75 * userData.weight +
        5.003 * userData.height -
        6.775 * userData.age;
      result *= kaf;
      overResult.innerHTML = Math.round(result);
    }
  };
});

let days = document.querySelector("#days");
let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");

let time = setInterval(() => {
  seconds.innerHTML--;
  if (seconds.innerHTML < 0) {
    seconds.innerHTML = 59;
    minutes.innerHTML--;
  }
  if (minutes.innerHTML < 0) {
    minutes.innerHTML = 59;
    hours.innerHTML--;
  }
  if (hours.innerHTML < 0) {
    hours.innerHTML = 59;
    days.innerHTML--;
  }
  if (days.innerHTML < 0) {
    clearInterval(time);
    days.innerHTML = 0;
    hours.innerHTML = 0;
    minutes.innerHTML = 0;
    seconds.innerHTML = 0;
    let duration = 15 * 1000;
    let animationEnd = Date.now() + duration;
    let defaults = { startVelocity: 30, spread: 360, ticks: 200, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    let interval = setInterval(function () {
      let timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      let particleCount = 50 * (timeLeft / duration);
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
      );
    }, 250);
  }
}, 1000);