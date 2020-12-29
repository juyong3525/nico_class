const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date(),
    hr = date.getHours(),
    min = date.getMinutes();

  clockTitle.innerText = `${hr < 10 ? `0${hr}` : hr}:${min < 10 ? `0${min}` : min}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
