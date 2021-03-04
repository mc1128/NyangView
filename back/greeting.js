const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  USER_DEL = "deleteUser";
SHOWING_CN = "showing";

const currentUser = localStorage.getItem(USER_LS);
const deleteUser = localStorage.getItem(USER_DEL);

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function namehandleSumit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", namehandleSumit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `환영합니다! ${text}님`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null && deleteUser === null) {
    askForName();
  } else if (deleteUser === null) {
    paintGreeting(currentUser);
  }
}

document.getElementById("namechange").ondblclick = function namechange() {
  greeting.classList.remove(SHOWING_CN);
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", namehandleSumit);
};

document.getElementById("namedelete").ondblclick = function namedelete() {
  greeting.classList.remove(SHOWING_CN);
  form.classList.remove(SHOWING_CN);
  localStorage.setItem(USER_DEL, true);
};

function init() {
  loadName();
}

init();
