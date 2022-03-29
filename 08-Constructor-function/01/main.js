// let calculator = {
//     num1: undefined,
//     num2: undefined,
//     read(x, y) {
//         this.num1 = x,
//         this.num2 = y
//     },
//     sum() {
//         return this.num1 + this.num2;
//     },
//     mul() {
//         return this.num1 * this.num2;
//     }
//   };

function Calculator(read, sum, mul) {
  (this.num1 = undefined),
    (this.num2 = undefined),
    (this.read = read),
    (this.sum = sum),
    (this.mul = mul);
}

let myCalculator = new Calculator(
  function (x, y) {
    (this.num1 = x), (this.num2 = y);
  },
  function () {
    return this.num1 + this.num2;
  },
  function () {
    return this.num1 * this.num2;
  }
);

console.log(myCalculator);
myCalculator.read(2, 5);
alert(myCalculator.sum());
alert(myCalculator.mul());