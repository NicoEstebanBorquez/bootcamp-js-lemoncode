import {
  ES_EL_NUMERO_SECRETO,
  NO_ES_UN_NUMERO,
  EL_NUMERO_ES_MAYOR,
  EL_NUMERO_ES_MENOR,
  GAME_OVER_MAXIMO_INTENTOS,
} from "./modelo";
import { comprobarNumero, generarNumeroAleatorio } from "./motor";
import * as modelo from "./modelo";
import { beforeEach, expect } from "vitest";

describe("comprobarNumero", () => {
  beforeEach(() => {
    const numeroParaAcertar = 23;
    vi.spyOn(modelo, "numeroParaAcertar", "get").mockReturnValue(
      numeroParaAcertar
    );
  });

  it("Deberia devolver NO_ES_UN_NUMERO cuando el texto introducido no es un numero", () => {
    //Arrange: Se prepara el escenario, valores iniciales, etc.
    const texto = "esto no es un numero";
    //Act: Se ejecuta la función.
    const resultado = comprobarNumero(texto);
    //Assert: Se comprueba que el resultado es el esperado.
    expect(resultado).toBe(NO_ES_UN_NUMERO);
  });

  it("Deberia devolver ES_EL_NUMERO_SECRETO cuando el texto es el numero a acertar", () => {
    //Arrange
    const texto = "23";
    //Act
    const resultado = comprobarNumero(texto);
    //Assert
    expect(resultado).toBe(ES_EL_NUMERO_SECRETO);
  });

  it("Deberia devolver EL_NUMERO_ES_MAYOR cuando el texto es mayor que el numero a acertar", () => {
    //Arrange
    const texto = "24";
    //Act
    const resultado = comprobarNumero(texto);
    //Assert
    expect(resultado).toBe(EL_NUMERO_ES_MAYOR);
  });

  it("Deberia devolver EL_NUMERO_ES_MENOR cuando el texto es menor que el numero a acertar", () => {
    //Arrange
    const texto = "22";
    //Act
    const resultado = comprobarNumero(texto);
    //Assert
    expect(resultado).toBe(EL_NUMERO_ES_MENOR);
  });

  it("Deberia devolver GAME_OVER_MAXIMO_INTENTOS cuando se supere el numero maximo de intentos", () => {
    //Arrange
    const texto = "22";
    vi.spyOn(modelo, "numeroIntentos", "get").mockReturnValue(
      modelo.MAXIMO_INTENTOS
    );
    //Act
    const resultado = comprobarNumero(texto);
    //Assert
    expect(resultado).toBe(GAME_OVER_MAXIMO_INTENTOS);
  });
});

describe("generarNumeroAleatorio", () => {
  it("MathRandom lo forzamos para que devuelva 0.001 y debería dar el numero 0", () => {
    //Arrange
    const numeroEsperado = 0;
    vi.spyOn(global.Math, "random").mockReturnValue(0.001);
    //Act
    const resultado = generarNumeroAleatorio();
    //Assert
    expect(resultado).toBe(numeroEsperado);
  });

  it("MathRandom lo forzamos para que devuelva 0.499 y debería dar el numero 50", () => {
    //Arrange
    const numeroEsperado = 50;
    vi.spyOn(global.Math, "random").mockReturnValue(0.499);
    //Act
    const resultado = generarNumeroAleatorio();
    //Assert
    expect(resultado).toBe(numeroEsperado);
  });

  it("MathRandom lo forzamos para que devuelva 0.999 y debería dar el numero 100", () => {
    //Arrange
    const numeroEsperado = 100;
    vi.spyOn(global.Math, "random").mockReturnValue(0.999);
    //Act
    const resultado = generarNumeroAleatorio();
    //Assert
    expect(resultado).toBe(numeroEsperado);
  });
});
