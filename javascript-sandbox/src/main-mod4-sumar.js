import "./style.css";
console.log("Hello from mod4");

function sumar() {
  const sum1 = document.getElementById("sumando1").value;
  const sum2 = document.getElementById("sumando2").value;

  const resultado = parseInt(sum1) + parseInt(sum2);
  console.log(resultado);
  document.getElementById("resultado").innerHTML = resultado;
}

const botonSumar = document.getElementById("btnSumar");
botonSumar.addEventListener("click", sumar);
