var Calculadora = {
  adicionar: function (num1, num2) {
    if (!num1 || !num2) return 0;
    num1 = Number(num1);
    num2 = Number(num2);
    return num1 + num2;
  },
  subtrair: function (num1, num2) {
    return num1 - num2;
  },
  dividir: function (num1, num2) {
    return num1 / num2;
  },
  multiplicar: function (num1, num2) {
    return num1 * num2;
  },
};

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = Calculadora;
}
