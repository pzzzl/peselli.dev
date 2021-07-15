const ENVIRONMENT = "prd";

var CURRENT_LANGUAGE = undefined;
var ENABLE_LOGS = ENVIRONMENT == "dev" ? true : false;
const body = document.body;

if (ENVIRONMENT == "dev") {
  let seconds = 120;
  let message = 'WARNING: running within "dev" environment';
  alert(message);
  setInterval(alert, seconds * 1000, message);
}

translatePage("en", (showMessage = false));

document.addEventListener("input", (event) => {
  event.target.checked ? darkTheme() : standardTheme();
});

function darkTheme() {
  changeBackground(body, "#111");
  changeColor(body, "white");
  changeBackground($id("mySidenav"), "#222");
  for (element of $class("svg")) {
    element.style.fill = "white";
  }
  for (bar of $class("bar")) {
    changeBackground(bar, "darkorange");
  }
  for (menu of $class("menuNames")) {
    changeColor(menu, "white");
  }
  print("Dark theme enabled");
}

function standardTheme() {
  changeBackground(body, "#eee");
  changeColor(body, "black");
  changeBackground($id("mySidenav"), "darkorange");
  for (element of $class("svg")) {
    element.style.fill = "black";
  }
  for (bar of $class("bar")) {
    changeBackground(bar, "black");
  }
  for (menu of $class("menuNames")) {
    changeColor(menu, "black");
  }
  print("Dark theme disabled");
}

function openNav() {
  $id("mySidenav").style.width = "150px";
  $id("main").style.marginRight = "150px";
  print("Nav opened");
}

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
  print("PAGE: about");
  $id("about").style.display = "block";
  $id("home").style.display = "none";
  $id("contact").style.display = "none";
  setTimeout(center, 100, "about");
}

function home() {
  print("PAGE: home");
  $id("home").style.display = "block";
  $id("about").style.display = "none";
  $id("contact").style.display = "none";
  setTimeout(center, 100, "home");
}

function contact() {
  print("PAGE: contact");
  $id("contact").style.display = "block";
  $id("home").style.display = "none";
  $id("about").style.display = "none";
  setTimeout(center, 100, "contact");
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
  var x = $id("snackbar");
  x.innerText = `${message}`;
  x.className = "show";
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
