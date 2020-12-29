const body = document.querySelector("body");
const IMG_NUM = 6;
const backgroundBlur = document.querySelector(".js-blur");

function paintImage(num) {
  const image = new Image();
  image.src = `images/${num}.jpg`;
  image.classList.add("bgImage");
  backgroundBlur.appendChild(image);
}

function getRandomNumber() {
  const randomNumber = Math.ceil(Math.random() * IMG_NUM);
  return randomNumber;
}

function init() {
  const number = getRandomNumber();
  paintImage(number);
}

init();
