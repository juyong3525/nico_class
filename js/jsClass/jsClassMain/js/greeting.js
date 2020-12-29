const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings"),
  delBtn = document.querySelector(".js-greetings_btn"),
  greetingBlur = document.querySelector(".js-blur"),
  BLURON = "blurOn",
  BLUROFF = "blurOff";

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function handleImgBlurOn() {
  greetingBlur.classList.add(BLURON);
  greetingBlur.classList.remove(BLUROFF);
}
function handleImgBlurOff() {
  greetingBlur.classList.remove(BLURON);
  greetingBlur.classList.add(BLUROFF);
}

function imgBlur() {
  form.addEventListener("focusin", handleImgBlurOn);
  form.addEventListener("focusout", handleImgBlurOff);
}

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function handleDelSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function handleClick() {
  localStorage.removeItem(USER_LS);
  greeting.classList.remove(SHOWING_CN);
  form.classList.add(SHOWING_CN);
  delBtn.classList.remove(SHOWING_CN);
  delBtn.innerText = null;
  input.value = null;
  form.addEventListener("submit", handleDelSubmit);
}

function paintGreeting(text) {
  greeting.classList.add(SHOWING_CN);
  form.classList.remove(SHOWING_CN);
  delBtn.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
  delBtn.innerText = "❌";

  delBtn.addEventListener("click", handleClick);
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
  imgBlur();
}
init();
