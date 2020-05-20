describe("Suite de testes de subtrair", function () {
  var Calculadora = require("../../src/js/calculadora.js");

  it("deve retornar 5 para os valores 10 e 5", function () {
    expect(Calculadora.subtrair(10, 5)).toEqual(5);
  });
  it("deve retornar 5 para os valores 5 e 10", function () {
    expect(Calculadora.subtrair(5, 10)).toEqual(-5);
  });
  it("deve retornar 12 para os valores 9 e -3 em formato texto", function () {
    expect(Calculadora.subtrair("9", "-3")).toEqual(12);
  });
  it("deve retornar -12 para os valores -9 e -3 em formato texto", function () {
    expect(Calculadora.subtrair("-9", "3")).toEqual(-12);
  });
  it("deve retornar 3.5 para os valores 5 e 1.5", function () {
    expect(Calculadora.subtrair(5, 1.5)).toEqual(3.5);
  });
  it("deve retornar 0 quando número 1 for inválido", function () {
    expect(Calculadora.subtrair(undefined, 10)).toEqual(0);
  });
  it("deve retornar 0 quando número 2 for inválido", function () {
    expect(Calculadora.subtrair(10, undefined)).toEqual(0);
  });
});
