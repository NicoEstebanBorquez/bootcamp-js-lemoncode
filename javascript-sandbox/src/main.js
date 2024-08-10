const generarNumeroAleatorio = () => Math.floor(Math.random() * 101);
const numeroParaAcertar = generarNumeroAleatorio();
const inputUsuario = document.getElementById("numero");

const comprobarNumero = () => {
  if (parseInt(inputUsuario.value) == numeroParaAcertar) {
    console.log("Has acertado");
  } else {
    console.log("No has acertado");
  }
};

const botonComprobar = document.getElementById("comprobar");
botonComprobar.addEventListener("click", comprobarNumero);
