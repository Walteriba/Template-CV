
function masymenos(n) {
  if (document.getElementById("subseccion" + n).style.display == "block") {
    ocultar(n);
  }
  else {
    ver(n);
  }
}

function ver(n) {

  document.getElementById("subseccion" + n).style.display = "block"
  document.getElementById("logros_container" + n).style.margin = "0px 0px 70px 0px";
  document.getElementById("Logros_btn" + n).innerHTML = "Logros (-)"

}

function ocultar(n) {
  document.getElementById("subseccion" + n).style.display = "none"
  document.getElementById("logros_container" + n).style.margin = "0px 0px 5px 0px";
  document.getElementById("Logros_btn" + n).innerHTML = "Logros (+)"
}


var elem = document.getElementsByClassName('boton_like');
for (var i = 0; i < elem.length; i++) {
  elem[i].addEventListener('click', adicionarLike);
}

var c = 0;
function adicionarLike() {
  c += 1;
  boton_likeid.innerHTML = `${c} Me gusta este CV!`;

  alert("Me alegro que te haya gustado mi CV!");

  document.getElementById("boton_likeid").classList.remove("hover_like");

  var elem = document.getElementsByClassName('boton_like');
  for (var i = 0; i < elem.length; i++) {
    elem[i].removeEventListener('click', adicionarLike);
  }
}


