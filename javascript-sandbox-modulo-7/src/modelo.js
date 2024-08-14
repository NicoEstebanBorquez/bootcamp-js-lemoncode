export let numeroParaAcertar = 0;
export const setNumeroParaAcertar = (nuevoNumero) => {
  numeroParaAcertar = nuevoNumero;
  console.log(numeroParaAcertar);
};

export const NO_ES_UN_NUMERO = 0;
export const EL_NUMERO_ES_MAYOR = 1;
export const EL_NUMERO_ES_MENOR = 2;
export const ES_EL_NUMERO_SECRETO = 3;
export const GAME_OVER_MAXIMO_INTENTOS = 4;
export const MAXIMO_INTENTOS = 5;

export let numeroIntentos = 0;
export const setNumeroIntentos = (nuevoNumero) => {
  numeroIntentos = nuevoNumero;
};
