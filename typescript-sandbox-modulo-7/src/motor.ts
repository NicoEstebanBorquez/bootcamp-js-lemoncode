import { partida, Estado, MAXIMO_INTENTOS } from "./modelo";

export const generarNumeroAleatorio = (): number =>
  Math.floor(Math.random() * 101);

const hasSuperadoNumeroMaximoIntentos = (): boolean =>
  partida.numeroIntentos >= MAXIMO_INTENTOS;

export const comprobarNumero = (texto: string): Estado => {
  const numero: number = parseInt(texto);
  const esNumero: boolean = !isNaN(numero);

  if (!esNumero) {
    return "NO_ES_UN_NUMERO";
  }

  if (hasSuperadoNumeroMaximoIntentos()) {
    return "GAME_OVER_MAXIMO_INTENTOS";
  }

  if (numero === partida.numeroParaAcertar) {
    return "ES_EL_NUMERO_SECRETO";
  }

  return numero > partida.numeroParaAcertar
    ? "EL_NUMERO_ES_MAYOR"
    : "EL_NUMERO_ES_MENOR";
};
