document.addEventListener("DOMContentLoaded", function () {
  function reduceOpacity() {
    document.getElementById("square").style.opacity = 0.5;
  }
  function resetOpacity() {
    document.getElementById("square").style.opacity = 1;
  }
  let rectangle = document.getElementById("square");
  rectangle.addEventListener("mouseover", reduceOpacity);
  rectangle.addEventListener("mouseout", resetOpacity);
});
