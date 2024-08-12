import { Estado, partida, MAXIMO_INTENTOS } from "./modelo";
import { comprobarNumero } from "./motor";
import * as modelo from "./modelo";
import { vi, beforeEach, expect } from "vitest";

describe("comprobarNumero", () => {
  beforeEach(() => {
    const numeroParaAcertar = 23;
    vi.spyOn(partida, "numeroParaAcertar", "get").mockReturnValue(
      numeroParaAcertar
    );
  });

  it("Deberia devolver NO_ES_UN_NUMERO cuando el texto introducido no es un numero", () => {
    //Arrange: Se prepara el escenario, valores iniciales, etc.
    const texto: string = "esto no es un numero";
    const resultadoEsperado: Estado = "NO_ES_UN_NUMERO";
    //Act: Se ejecuta la función.
    const resultado: Estado = comprobarNumero(texto);
    //Assert: Se comprueba que el resultado es el esperado.
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Deberia devolver ES_EL_NUMERO_SECRETO cuando el texto es el numero a acertar", () => {
    //Arrange
    const texto: string = "23";
    const resultadoEsperado: Estado = "ES_EL_NUMERO_SECRETO";
    //Act
    const resultado: Estado = comprobarNumero(texto);
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Deberia devolver EL_NUMERO_ES_MAYOR cuando el texto es mayor que el numero a acertar", () => {
    //Arrange
    const texto: string = "24";
    const resultadoEsperado: Estado = "EL_NUMERO_ES_MAYOR";
    //Act
    const resultado: Estado = comprobarNumero(texto);
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Deberia devolver EL_NUMERO_ES_MENOR cuando el texto es menor que el numero a acertar", () => {
    //Arrange
    const texto: string = "22";
    const resultadoEsperado: Estado = "EL_NUMERO_ES_MENOR";
    //Act
    const resultado: Estado = comprobarNumero(texto);
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Deberia devolver GAME_OVER_MAXIMO_INTENTOS cuando se supere el numero maximo de intentos", () => {
    //Arrange
    const texto: string = "22";
    vi.spyOn(partida, "numeroIntentos", "get").mockReturnValue(MAXIMO_INTENTOS);
    const resultadoEsperado: Estado = "GAME_OVER_MAXIMO_INTENTOS";
    //Act
    const resultado: Estado = comprobarNumero(texto);
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});
