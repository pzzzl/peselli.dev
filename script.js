document.addEventListener("input", (event) => {
  event.target.checked ? darkTheme() : standardTheme();
});

function darkTheme() {
  // MUDA O BACKGROUND
  document.body.style.background = "#111";
  // MUDA A FONTE
  document.body.style.color = "white";
  // MUDA A COR DOS ÍCONES
  document.getElementsByClassName("svg")[0].style.filter = "invert(100)";
  document.getElementsByClassName("svg")[1].style.filter = "invert(100)";
  // MUDA A COR DO ÍCONE DO MENU
  for (bar of document.getElementsByClassName("bar")) {
    bar.style.background = "darkorange";
  }
  // MUDA A COR DO FUNDO DO MENU
  document.getElementById("mySidenav").style.background = "#111";
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
  document.getElementsByClassName("svg")[0].style.filter = "invert(0)";
  document.getElementsByClassName("svg")[1].style.filter = "invert(0)";
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
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function myFunction(x) {
  x.classList.toggle("change");
  if (x.classList.value.includes("change")) {
    openNav();
  } else {
    closeNav();
  }
}
