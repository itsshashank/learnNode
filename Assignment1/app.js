var cal = require('./calculator');

var myArgs = process.argv;
cal.calculator.num1 = parseInt(myArgs[2]);
cal.calculator.num2 = parseInt(myArgs[3]);

console.log('Addition',cal.calculator.add());
console.log('Subtraction',cal.calculator.subtract());
console.log('Multiply',cal.calculator.multiply());