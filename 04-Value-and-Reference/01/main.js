const product1 = { name: 'Coke', price: 18, size: '500mL' };

const product2 = product1;
product2.name = 'Pepsi';
product2.price = 19;

console.log(product1); // * { name: 'Pepsi', price: 19, size: '500mL' }
console.log(product2); // ** { name: 'Pepsi', price: 19, size: '500mL' }
console.log(product1 === product2); // *** true