import "./style.css";

function sumar() {
  const sum1 = (document.getElementById("sumando1") as HTMLInputElement).value;
  const sum2 = (document.getElementById("sumando2") as HTMLInputElement).value;

  const resultado = parseInt(sum1) + parseInt(sum2);

  //document.getElementById("resultado").innerHTML = resultado.toString();
  const resultadoElement = document.getElementById("resultado");
  if (resultadoElement !== null && resultadoElement !== undefined) {
    resultadoElement.innerHTML = resultado.toString();
  }
}

const botonSumar = document.getElementById("btnSumar");
if (botonSumar !== null && botonSumar !== undefined) {
  botonSumar.addEventListener("click", sumar);
}
