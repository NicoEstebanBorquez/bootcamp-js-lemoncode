const generarNumeroAleatorio = (): number => Math.floor(Math.random() * 101);
const numeroParaAcertar: number = generarNumeroAleatorio();
console.log(numeroParaAcertar);

type Estado =
  | "NO_ES_UN_NUMERO"
  | "NO_ES_UN_NUMERO"
  | "EL_NUMERO_ES_MAYOR"
  | "EL_NUMERO_ES_MENOR"
  | "ES_EL_NUMERO_SECRETO"
  | "const GAME_OVER_MAXIMO_INTENTOS";

const MAXIMO_INTENTOS: number = 5;
let numeroIntentos: number = 0;
let a: Estado = "EL_NUMERO_ES_MAYOR";

const hasSuperadoNumeroMaximoIntentos = () => numeroIntentos >= MAXIMO_INTENTOS;

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

  document.getElementById("resultado").innerHTML = mensaje;
};

const muestraNumeroIntentos = () => {
  document.getElementById("intentos").innerHTML =
    `${numeroIntentos} de ${MAXIMO_INTENTOS}`;
};

// "DOMContentLoaded significa que llamará a la función 'muestraNumeroIntentos' una vez que el DOM se haya cargado"
document.addEventListener("DOMContentLoaded", muestraNumeroIntentos);

const gestionarGameOver = (estado) => {
  if (estado === GAME_OVER_MAXIMO_INTENTOS) {
    document.getElementById("comprobar").disabled = true;
  }
};

const comprobarNumero = (texto: string) => {
  const numero: number = parseInt(texto);
  const esNumero: boolean = !isNaN(numero);

  if (!esNumero) {
    return NO_ES_UN_NUMERO;
  }

  if (hasSuperadoNumeroMaximoIntentos()) {
    return GAME_OVER_MAXIMO_INTENTOS;
  }

  if (numero === numeroParaAcertar) {
    return ES_EL_NUMERO_SECRETO;
  }

  return numero > numeroParaAcertar ? EL_NUMERO_ES_MAYOR : EL_NUMERO_ES_MENOR;
};

const handleCompruebaClick = () => {
  const texto = document.getElementById("numero").value;
  const estado = comprobarNumero(texto);
  muestraMensajeComprobacion(texto, estado);
  numeroIntentos++;
  muestraNumeroIntentos();
  gestionarGameOver(estado);
};

const botonComprobar = document.getElementById("comprobar");
botonComprobar.addEventListener("click", handleCompruebaClick);
