interface Partida {
  numeroIntentos: number;
  numeroParaAcertar: number;
}

export const partida: Partida = {
  numeroIntentos: 0,
  numeroParaAcertar: 0,
};

export type Estado =
  | "NO_ES_UN_NUMERO"
  | "NO_ES_UN_NUMERO"
  | "EL_NUMERO_ES_MAYOR"
  | "EL_NUMERO_ES_MENOR"
  | "ES_EL_NUMERO_SECRETO"
  | "GAME_OVER_MAXIMO_INTENTOS";

export const MAXIMO_INTENTOS: number = 5;
