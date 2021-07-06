var CURRENT_LANGUAGE = undefined;

document.addEventListener("input", (event) => {
  event.target.checked ? darkTheme() : standardTheme();
});

function darkTheme() {
  // MUDA O BACKGROUND
  document.body.style.background = "#111";
  // MUDA A FONTE
  document.body.style.color = "white";
  // MUDA A COR DOS ÍCONES
  for (element of document.getElementsByClassName("svg")) {
    element.style.filter = "invert(100)";
  }
  // MUDA A COR DO ÍCONE DO MENU
  for (bar of document.getElementsByClassName("bar")) {
    bar.style.background = "darkorange";
  }
  // MUDA A COR DO FUNDO DO MENU
  document.getElementById("mySidenav").style.background = "#222";
  // MUDA A COR DA FONTE DO MENU
  for (menu of document.getElementsByClassName("menuNames")) {
    menu.style.color = "white";
  }
}

function standardTheme() {
  // MUDA O BACKGROUND
  document.body.style.background = "#eee";
  // MUDA A FONTE
  document.body.style.color = "black";
  // MUDA A COR DOS ÍCONES
  for (element of document.getElementsByClassName("svg")) {
    element.style.filter = "invert(0)";
  }
  // MUDA A COR DO ÍCONE DO MENU
  for (bar of document.getElementsByClassName("bar")) {
    bar.style.background = "black";
  }
  // MUDA A COR DO FUNDO DO MENU
  document.getElementById("mySidenav").style.background = "darkorange";
  // MUDA A COR DA FONTE DO MENU
  for (menu of document.getElementsByClassName("menuNames")) {
    menu.style.color = "black";
  }
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "150px";
  document.getElementById("main").style.marginRight = "150px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
}

function myFunction(x) {
  x.classList.toggle("change");
  if (x.classList.value.includes("change")) {
    openNav();
  } else {
    closeNav();
  }
}

function about() {
  document.getElementById("about").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("contact").style.display = "none";
}

function home() {
  document.getElementById("home").style.display = "block";
  document.getElementById("about").style.display = "none";
  document.getElementById("contact").style.display = "none";
}

function contact() {
  document.getElementById("contact").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("about").style.display = "none";
}

function translatePage(language, showMessage = true) {
  if (language == "en") {
    CURRENT_LANGUAGE = language;

    hideAll("pt");
    showAll("en");
    if (showMessage) {
      showSnackBar("Language changed");
    }
  }

  if (language == "pt") {
    CURRENT_LANGUAGE = language;

    hideAll("en");
    showAll("pt");
    if (showMessage) {
      showSnackBar("Idioma alterado");
    }
  }
}

function hideAll(className) {
  for (element of document.getElementsByClassName(className)) {
    element.style.display = "none";
  }
}

function showAll(className) {
  for (element of document.getElementsByClassName(className)) {
    element.style.display = "block";
  }
}

function showSnackBar(message) {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  x.innerText = `${message}`;

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}

translatePage("en", false);

document.addEventListener("click", (event) => {
  let target = event.target;

  target.scrollIntoView({ block: "center" });

  if (CURRENT_LANGUAGE == "en") {
    document.getElementById("currentLanguage").innerText = "ENG";
  }

  if (CURRENT_LANGUAGE == "pt") {
    document.getElementById("currentLanguage").innerText = "POR";
  }
});
