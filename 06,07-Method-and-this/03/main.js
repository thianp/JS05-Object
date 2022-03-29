let calculator = {
    num1: undefined,
    num2: undefined,
    read(x, y) {
        this.num1 = x,
        this.num2 = y
    },
    sum() {
        return this.num1 + this.num2;
    },
    mul() {
        return this.num1 * this.num2;
    }
  };
  
  calculator.read(2, 5);
  alert(calculator.sum());
  alert(calculator.mul());