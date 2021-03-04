const titletext = document.querySelector(".js-title"),
  titleinput = titletext.querySelector("input"),
  titleview = document.querySelector(".js-titleview"),
  titlePlacehoder = titleinput.placeholder;

const TITLE_LS = "titleSave",
  TITLE_SHOW = "titleChange";

const titleSave = localStorage.getItem(TITLE_LS);

function saveTitle(title_text) {
  localStorage.setItem(TITLE_LS, title_text);
}

function titlehandleSumit(event) {
  event.preventDefault();
  const titleSave = titleinput.value;
  paintTitle(titleSave);
  saveTitle(titleSave);
}

function paintTitle(title_text) {
  titletext.classList.remove(TITLE_SHOW);
  titleview.classList.add(TITLE_SHOW);
  titleview.innerText = `${title_text}`;
}

function askForTitle() {
  /*titletext.classList.add(TITLE_SHOW);
  titletext.addEventListener("submit", titlehandleSumit);*/
  titletext.classList.remove(TITLE_SHOW);
  titleview.classList.add(TITLE_SHOW);
  titleview.innerText = "냥 뷰";
}

function loadTitle() {
  const titleSave = localStorage.getItem(TITLE_LS);
  if (titleSave === null) {
    askForTitle();
  } else {
    paintTitle(titleSave);
  }
}

document.getElementById("titlechange").ondblclick = function titlechange() {
  titleview.classList.remove(TITLE_SHOW);
  titletext.classList.add(TITLE_SHOW);
  if (titleSave === null) {
    titleinput.placeholder = `냥 뷰`;
  } else {
    titleinput.placeholder = `${titleSave}`;
  }
  titletext.addEventListener("submit", titlehandleSumit);
};

function init() {
  loadTitle();
}

init();
