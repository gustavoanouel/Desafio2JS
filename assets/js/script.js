//EJERCICIO 1
function Linea() {
  var image = document.querySelector("img");
  if (image.style.border === "2px solid red") {
    image.style.border = "none";
  } else {
    image.style.border = "2px solid red";
  }
}

//--------------------------------------------

//EJERCICIO 2
function calcular() {
  var cantHarley = document.querySelector("#cantHarley").value;
  var cantHonda = document.querySelector("#cantHonda").value;
  var cantYamaha = document.querySelector("#cantYamaha").value;

  var resultado = Number(cantHarley) + Number(cantHonda) + Number(cantYamaha);

  if (cantHarley === "" || cantHonda === "" || cantYamaha === "") {
    document.querySelector("#textoResultado").innerHTML =
      "Debe rellenar todos los campos";
    document.querySelector("#textoResultado").style.color = "red";
  } else if (isNaN(cantHarley) || isNaN(cantHonda) || isNaN(cantYamaha)) {
    document.querySelector("#textoResultado").innerHTML =
      "Debe ingresar numeros validos";
    document.querySelector("#textoResultado").style.color = "red";
  } else if (cantHarley < 0 || cantHonda < 0 || cantYamaha < 0) {
    document.querySelector("#textoResultado").innerHTML =
      "Debe ingresar numeros validos ";
    document.querySelector("#textoResultado").style.color = "red";
  } else if (resultado <= 10) {
    document.querySelector("#textoResultado").innerHTML =
      "Llevas " + resultado + " stickers seleccionados";
    document.querySelector("#textoResultado").style.color = "black";
  } else {
    document.querySelector("#textoResultado").innerHTML =
      "Sobrepasaste el limite de 10 stickers (" + resultado + ")";
    document.querySelector("#textoResultado").style.color = "red";
  }
}

//----------------------------------------------

//EJERCICIO 3
function validarPassword() {
  var num1 = document.querySelector("#num1").value;
  var num2 = document.querySelector("#num2").value;
  var num3 = document.querySelector("#num3").value;

  if (num1 === "0" || num2 === "0" || num3 === "0") {
    document.querySelector("#textValidacion").innerHTML =
      "Debe ingresar digitos validos";
    document.querySelector("#textValidacion").style.color = "red";
  } else if (num1 === "9" && num2 === "1" && num3 === "1") {
    document.querySelector("#textValidacion").innerHTML = "PASSWORD 1 VALIDADO";
    document.querySelector("#textValidacion").style.color = "green";
  } else if (num1 === "7" && num2 === "1" && num3 === "4") {
    document.querySelector("#textValidacion").innerHTML = "PASSWORD 2 VALIDADO";
    document.querySelector("#textValidacion").style.color = "green";
  } else {
    document.querySelector("#textValidacion").innerHTML =
      "Ninguna contraseña ha sido validada";
    document.querySelector("#textValidacion").style.color = "red";
  }
}

//----------------------------------------------------------
