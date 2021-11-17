var model = document.getElementById("divModel");

var dibMod = document.getElementById("mod1");

dibMod.onmouseover = function() {
  model.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == model) {
    model.style.display = "none";
  }
}