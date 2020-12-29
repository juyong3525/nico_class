const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  multipli: function (a, b) {
    return a * b;
  },
  div: function (a, b) {
    return a / b;
  },
  pow: function (a, b) {
    return a ** b;
  },
};

const plus = calculator.plus(3, 5);
const minus = calculator.minus(10, 7);
const multipli = calculator.multipli(5, 8);
const div = calculator.div(24, 4);
const pow = calculator.pow(2, 10);

console.log(plus);
console.log(minus);
console.log(multipli);
console.log(div);
console.log(pow);
