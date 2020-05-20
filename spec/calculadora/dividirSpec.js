describe("Suite de testes de dividir", function () {
  var Calculadora = require("../../src/js/calculadora.js");

  it("deve retornar 3 para os valores 12 e 4", function () {
    expect(Calculadora.dividir(12, 4)).toEqual(3);
  });
  it("deve retornar 0.5 para os valores 2 e 4", function () {
    expect(Calculadora.dividir(2, 4)).toEqual(0.5);
  });
  it("deve retornar 0.5 para os valores 3 e 2", function () {
    expect(Calculadora.dividir(3, 2)).toEqual(1.5);
  });
  it("deve retornar -5 para os valores 15 e -3 em formato texto", function () {
    expect(Calculadora.dividir("15", "-3")).toEqual(-5);
  });
  it("deve retornar 3 para os valores -9 e -3 em formato texto", function () {
    expect(Calculadora.dividir("-9", "-3")).toEqual(3);
  });
  it("deve retornar undefined para os valores 5 e 0", function () {
    expect(Calculadora.dividir(5, 0)).toEqual(0);
  });
  it("deve retornar undefined para os valores 0 e 5", function () {
    expect(Calculadora.dividir(0, 5)).toEqual(0);
  });
  it("deve retornar 0 quando número 1 for inválido", function () {
    expect(Calculadora.dividir(undefined, 10)).toEqual(0);
  });
  it("deve retornar 0 quando número 2 for inválido", function () {
    expect(Calculadora.dividir(10, undefined)).toEqual(0);
  });
});
