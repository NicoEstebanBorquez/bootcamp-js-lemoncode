import { partida, Estado, MAXIMO_INTENTOS } from "./modelo";
import { comprobarNumero, generarNumeroAleatorio } from "./motor";

export const muestraNumeroIntentos = () => {
  const elementoIntentos = document.getElementById("intentos");
  if (elementoIntentos) {
    elementoIntentos.innerHTML = `${partida.numeroIntentos} de ${MAXIMO_INTENTOS}`;
  }
};

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

export const handleCompruebaClick = () => {
  let texto: string = "";
  const inputElement = document.getElementById("numero");
  if (inputElement && inputElement instanceof HTMLInputElement) {
    texto = inputElement.value;
  }

  const estado: Estado = comprobarNumero(texto);
  muestraMensajeComprobacion(texto, estado);
  partida.numeroIntentos++;
  muestraNumeroIntentos();
  gestionarGameOver(estado);
};

export const iniciaPartida = () => {
  partida.numeroParaAcertar = generarNumeroAleatorio();
  console.log(partida.numeroParaAcertar);
  partida.numeroIntentos = 0;
  muestraNumeroIntentos();
};
