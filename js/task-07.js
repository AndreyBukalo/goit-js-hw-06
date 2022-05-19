const fontSize = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSize.addEventListener("input", changeFont);

function changeFont() {
  text.style.fontSize = fontSize.value + 'px';
};

