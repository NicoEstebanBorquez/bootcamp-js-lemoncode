import {
  NO_ES_UN_NUMERO,
  EL_NUMERO_ES_MAYOR,
  EL_NUMERO_ES_MENOR,
  ES_EL_NUMERO_SECRETO,
  GAME_OVER_MAXIMO_INTENTOS,
  MAXIMO_INTENTOS,
  numeroIntentos,
  setNumeroIntentos,
} from "./modelo";

import { comprobarNumero } from "./motor";

export const muestraNumeroIntentos = () => {
  document.getElementById("intentos").innerHTML =
    `${numeroIntentos} de ${MAXIMO_INTENTOS}`;
};

const muestraMensajeComprobacion = (texto, estado) => {
  let mensaje = "";

  switch (estado) {
    case NO_ES_UN_NUMERO:
      mensaje = `"${texto}" no es un número!`;
      break;
    case EL_NUMERO_ES_MAYOR:
      mensaje = `Ooops, no has acertado! ${texto} es mayor que el número secreto.`;
      break;
    case EL_NUMERO_ES_MENOR:
      mensaje = `Ooops, no has acertado! ${texto} es menor que el número secreto.`;
      break;
    case ES_EL_NUMERO_SECRETO:
      mensaje = `Has acertado!`;
      break;
    case GAME_OVER_MAXIMO_INTENTOS:
      mensaje = `GAME OVER! Has superado el número máximo de intentos.`;
      break;
    default:
      mensaje = "Error! No sé que ha pasado, pero no deberíamos estar aquí.";
      break;
  }

  document.getElementById("resultado").innerHTML = mensaje;
};

const gestionarGameOver = (estado) => {
  if (estado === GAME_OVER_MAXIMO_INTENTOS) {
    document.getElementById("comprobar").disabled = true;
  }
};

const handleCompruebaClick = () => {
  const texto = document.getElementById("numero").value;
  const estado = comprobarNumero(texto);
  muestraMensajeComprobacion(texto, estado);
  setNumeroIntentos(numeroIntentos + 1);
  muestraNumeroIntentos();
  gestionarGameOver(estado);
};

const botonComprobar = document.getElementById("comprobar");
botonComprobar.addEventListener("click", handleCompruebaClick);
