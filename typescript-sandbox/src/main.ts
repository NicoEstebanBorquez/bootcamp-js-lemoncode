const generarNumeroAleatorio = (): number => Math.floor(Math.random() * 101);
const numeroParaAcertar: number = generarNumeroAleatorio();
console.log(numeroParaAcertar);

type Estado =
  | "NO_ES_UN_NUMERO"
  | "NO_ES_UN_NUMERO"
  | "EL_NUMERO_ES_MAYOR"
  | "EL_NUMERO_ES_MENOR"
  | "ES_EL_NUMERO_SECRETO"
  | "GAME_OVER_MAXIMO_INTENTOS";

const MAXIMO_INTENTOS: number = 5;
let numeroIntentos: number = 0;

const hasSuperadoNumeroMaximoIntentos = (): boolean =>
  numeroIntentos >= MAXIMO_INTENTOS;

const muestraNumeroIntentos = () => {
  const elementoIntentos = document.getElementById("intentos");
  if (elementoIntentos) {
    elementoIntentos.innerHTML = `${numeroIntentos} de ${MAXIMO_INTENTOS}`;
  }
};

// "DOMContentLoaded significa que llamará a la función 'muestraNumeroIntentos' una vez que el DOM se haya cargado"
document.addEventListener("DOMContentLoaded", muestraNumeroIntentos);

const gestionarGameOver = (estado: Estado) => {
  if (estado === "GAME_OVER_MAXIMO_INTENTOS") {
    const elementoComprobar = document.getElementById("comprobar");
    if (elementoComprobar && elementoComprobar instanceof HTMLButtonElement) {
      elementoComprobar.disabled = true;
    }
  }
};

const muestraMensajeComprobacion = (texto: string, estado: Estado) => {
  let mensaje: string = "";

  switch (estado) {
    case "NO_ES_UN_NUMERO":
      mensaje = `"${texto}" no es un número!`;
      break;
    case "EL_NUMERO_ES_MAYOR":
      mensaje = `Ooops, no has acertado! ${texto} es mayor que el número secreto.`;
      break;
    case "EL_NUMERO_ES_MENOR":
      mensaje = `Ooops, no has acertado! ${texto} es menor que el número secreto.`;
      break;
    case "ES_EL_NUMERO_SECRETO":
      mensaje = `Has acertado!`;
      break;
    case "GAME_OVER_MAXIMO_INTENTOS":
      mensaje = `GAME OVER! Has superado el número máximo de intentos.`;
      break;
    default:
      mensaje = "Error! No sé que ha pasado, pero no deberíamos estar aquí.";
      break;
  }
  const elementoResultado = document.getElementById("resultado");
  if (elementoResultado) {
    elementoResultado.innerHTML = mensaje;
  }
};

const comprobarNumero = (texto: string): Estado => {
  const numero: number = parseInt(texto);
  const esNumero: boolean = !isNaN(numero);

  if (!esNumero) {
    return "NO_ES_UN_NUMERO";
  }

  if (hasSuperadoNumeroMaximoIntentos()) {
    return "GAME_OVER_MAXIMO_INTENTOS";
  }

  if (numero === numeroParaAcertar) {
    return "ES_EL_NUMERO_SECRETO";
  }

  return numero > numeroParaAcertar
    ? "EL_NUMERO_ES_MAYOR"
    : "EL_NUMERO_ES_MENOR";
};

const handleCompruebaClick = () => {
  let texto: string = "";
  const inputElement = document.getElementById("numero");
  if (inputElement && inputElement instanceof HTMLInputElement) {
    texto = inputElement.value;
  }

  const estado: Estado = comprobarNumero(texto);
  muestraMensajeComprobacion(texto, estado);
  numeroIntentos++;
  muestraNumeroIntentos();
  gestionarGameOver(estado);
};

const botonComprobar = document.getElementById("comprobar");
botonComprobar?.addEventListener("click", handleCompruebaClick);

if (botonComprobar) {
  botonComprobar.addEventListener("click", handleCompruebaClick);
}
