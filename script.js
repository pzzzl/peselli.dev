const ENVIRONMENT = "dev";

var CURRENT_LANGUAGE = undefined;
var ENABLE_LOGS = ENVIRONMENT == "dev" ? true : false;
const body = document.body;

translatePage("en", (showMessage = false));

document.addEventListener("input", (event) => {
  event.target.checked ? darkTheme() : standardTheme();
});

function darkTheme() {
  changeBackground(body, "#111");
  changeColor(body, "white");
  // MUDA A COR DO FUNDO DO MENU
  changeBackground($id("mySidenav"), "#222");
  // MUDA A COR DOS ÍCONES
  for (element of $class("svg")) {
    element.style.filter = "invert(100)";
  }
  // MUDA A COR DO ÍCONE DO MENU
  for (bar of $class("bar")) {
    changeBackground(bar, "darkorange");
  }
  // MUDA A COR DA FONTE DO MENU
  for (menu of $class("menuNames")) {
    changeColor(menu, "white");
  }

  print("Dark theme enabled");
}

function standardTheme() {
  changeBackground(body, "#eee");
  changeColor(body, "black");
  // MUDA A COR DO FUNDO DO MENU
  changeBackground($id("mySidenav"), "darkorange");
  // MUDA A COR DOS ÍCONES
  for (element of $class("svg")) {
    element.style.filter = "invert(0)";
  }
  // MUDA A COR DO ÍCONE DO MENU
  for (bar of $class("bar")) {
    changeBackground(bar, "black");
  }
  // MUDA A COR DA FONTE DO MENU
  for (menu of $class("menuNames")) {
    changeColor(menu, "black");
  }

  print("Dark theme disabled");
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  $id("mySidenav").style.width = "150px";
  $id("main").style.marginRight = "150px";
  print("Nav opened");
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  $id("mySidenav").style.width = "0";
  $id("main").style.marginRight = "0";
  print("Nav closed");
}

function toggleMenu(x) {
  x.classList.toggle("change");
  if (x.classList.value.includes("change")) {
    openNav();
  } else {
    closeNav();
  }
}

function about() {
  $id("about").style.display = "block";
  $id("home").style.display = "none";
  $id("contact").style.display = "none";
  center("about");
  print("PAGE: about");
}

function home() {
  $id("home").style.display = "block";
  $id("about").style.display = "none";
  $id("contact").style.display = "none";
  center("home");
  print("PAGE: home");
}

function contact() {
  $id("contact").style.display = "block";
  $id("home").style.display = "none";
  $id("about").style.display = "none";
  center("contact");
  print("PAGE: contact");
}

function translatePage(language, showMessage = true) {
  print(`translatePage()\nlanguage: ${language}\nshowMessage: ${showMessage}`);

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
  for (element of $class(className)) {
    element.style.display = "none";
  }
}

function showAll(className) {
  for (element of $class(className)) {
    element.style.display = "block";
  }
}

function showSnackBar(message) {
  // Get the snackbar DIV
  var x = $id("snackbar");

  x.innerText = `${message}`;

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}

document.addEventListener("click", () => {
  if (CURRENT_LANGUAGE == "en") {
    $id("currentLanguage").innerText = "ENG";
  }
  if (CURRENT_LANGUAGE == "pt") {
    $id("currentLanguage").innerText = "POR";
  }
});

function center(id) {
  $id(id).scrollIntoView({ block: "center" });
  print(`${id} centered succesfully`);
}

function $id(id) {
  return document.getElementById(id);
}

function $class(className) {
  return document.getElementsByClassName(className);
}

function print(message) {
  if (ENABLE_LOGS) {
    console.log(message);
  }
}

function changeBackground(element, color) {
  element.style.background = color;
}

function changeColor(element, color) {
  element.style.color = color;
}
