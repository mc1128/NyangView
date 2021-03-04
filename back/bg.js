const body = document.querySelector("body");

const IMG_NUMBER = 14;

function handleImgLoad() {}

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `image/${imgNumber + 1}.jpg`;
  body.prepend(image);
  image.classList.add("bgImage");
  image.addEventListener("loadend", handleImgLoad);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
