import {
  numeroParaAcertar,
  NO_ES_UN_NUMERO,
  EL_NUMERO_ES_MAYOR,
  EL_NUMERO_ES_MENOR,
  ES_EL_NUMERO_SECRETO,
  GAME_OVER_MAXIMO_INTENTOS,
  MAXIMO_INTENTOS,
  numeroIntentos,
} from "./modelo";

export const generarNumeroAleatorio = () => Math.floor(Math.random() * 101);

const hasSuperadoNumeroMaximoIntentos = () => numeroIntentos >= MAXIMO_INTENTOS;

export const comprobarNumero = (texto) => {
  const numero = parseInt(texto);
  const esNumero = !isNaN(numero);

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
