const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList"),
  toDoBlur = document.querySelector(".js-blur"),
  TODOBLURON = "blurOn",
  TODOBLUROFF = "blurOff";

function toDoHandleImgBlurOn() {
  toDoBlur.classList.add(TODOBLURON);
  toDoBlur.classList.remove(TODOBLUROFF);
}
function toDoHandleImgBlurOff() {
  toDoBlur.classList.remove(TODOBLURON);
  toDoBlur.classList.add(TODOBLUROFF);
}

function toDoImgBlur() {
  toDoForm.addEventListener("focusin", toDoHandleImgBlurOn);
  toDoForm.addEventListener("focusout", toDoHandleImgBlurOff);
}

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
  const btn = event.target,
    li = btn.parentElement;

  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (element) {
    return element.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li"),
    delBtn = document.createElement("button"),
    span = document.createElement("span"),
    newId = toDos.length + 1;

  span.innerText = text;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);

  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);

  const toDosObj = {
    text: text,
    id: newId,
  };

  toDos.push(toDosObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedtoDos = localStorage.getItem(TODOS_LS);
  if (loadedtoDos !== null) {
    const parsedToDos = JSON.parse(loadedtoDos);
    parsedToDos.forEach((element) => paintToDo(element.text));
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
  toDoImgBlur();
}
init();
