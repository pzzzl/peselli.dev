document.addEventListener("input", (event) => {
  event.target.checked ? darkTheme() : standardTheme();
});

function darkTheme() {
  document.body.style.background = "#111";
  document.body.style.color = "white";
  document.getElementsByClassName("svg")[0].style.filter = "invert(100)";
  document.getElementsByClassName("svg")[1].style.filter = "invert(100)";
}

function standardTheme() {
  document.body.style.background = "#eee";
  document.body.style.color = "black";
  document.getElementsByClassName("svg")[0].style.filter = "invert(0)";
  document.getElementsByClassName("svg")[1].style.filter = "invert(0)";
}
