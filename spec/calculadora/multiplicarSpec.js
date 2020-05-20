describe("Suite de testes de multiplicar", function () {
  var Calculadora = require("../../src/js/calculadora.js");

  it("deve retornar 48 para os valores 12 e 4", function () {
    expect(Calculadora.multiplicar(12, 4)).toEqual(48);
  });
  it("deve retornar 7.5 para os valores 2.5 e 3", function () {
    expect(Calculadora.multiplicar(2.5, 3)).toEqual(7.5);
  });
  it("deve retornar -15 para os valores 5 e -3 em formato texto", function () {
    expect(Calculadora.multiplicar("5", "-3")).toEqual(-15);
  });
  it("deve retornar 27 para os valores -9 e -3 em formato texto", function () {
    expect(Calculadora.multiplicar("-9", "-3")).toEqual(27);
  });
  it("deve retornar 0 para os valores 0 e 5", function () {
    expect(Calculadora.multiplicar(0, 5)).toEqual(0);
  });
  it("deve retornar 0 quando número 1 for inválido", function () {
    expect(Calculadora.multiplicar(undefined, 10)).toEqual(0);
  });
  it("deve retornar 0 quando número 2 for inválido", function () {
    expect(Calculadora.multiplicar(10, undefined)).toEqual(0);
  });
});
