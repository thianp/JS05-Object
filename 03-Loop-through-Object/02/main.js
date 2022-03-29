function multiplyNumeric(obj, num) {
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] = obj[key]*num
        }
    }
    return obj;
}

let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
  };

  console.log(multiplyNumeric(menu, 3));

  // IRL there is not many use cases that call for 
  // modiying the parameter object directly. Better 
  // clone or create a new object entirely.