document.addEventListener("DOMContentLoaded", function () {
  let plusButtons = document.querySelectorAll(".plus-btn");
  for (let i = 0; i < plusButtons.length; i++) {
    plusButtons[i].onclick = function () {
      let input = this.parentNode.querySelector("input");
      input.value++;
    };
  }

  let minusButtons = document.querySelectorAll(".minus-btn");
  for (let i = 0; i < minusButtons.length; i++) {
    minusButtons[i].onclick = function () {
      let input = this.parentNode.querySelector("input");
      if (input.value > 1) {
        input.value--;
      }
    };
  }

  let deleteButtons = document.querySelectorAll(".delete-btn");
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = function () {
      this.closest(".item").remove();
    };
  }

  let likeButtons = document.querySelectorAll(".like-btn");
  for (let i = 0; i < likeButtons.length; i++) {
    likeButtons[i].onclick = function () {
      this.classList.toggle("is-active");
    };
  }
});
