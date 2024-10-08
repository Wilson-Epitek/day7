document.addEventListener("DOMContentLoaded", function () {
  function robotClick() {
    let speechBubble = document.getElementById("speech-bubble");
    speechBubble.textContent = "Ooch, that hurts!";
    setTimeout(() => {
      speechBubble.textContent = "Hello !";
    }, 3000);
  }
  document.getElementById("robot").addEventListener("click", robotClick);

  function display(caca) {
    let displayScreen = document.getElementById("screen-text");
    let x = caca.clientX;
    let y = caca.clientY;
    displayScreen.textContent = "X:" + x + ", Y:" + y;
  }
  document.getElementById("robot").addEventListener("mousemove", display);

  function message() {
    let screenText = document.getElementById("screen-text");
    screenText.textContent = "Don’t worry, I’ll take care of it!";
    setTimeout(() => {
      screenText.textContent = "Bip bip bip !";
    }, 3000);
  }
  document.getElementById("robot-input").addEventListener("input", message);
});
