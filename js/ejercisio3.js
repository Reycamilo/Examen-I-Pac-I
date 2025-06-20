console.log(`\n\n\n`);

// PARTE A ***************************************************************************
console.log('Calculadora basica');

// 1
const num1 = 15.7
const num2 = 4.3

//2
const suma = num1 + num2
console.log(`La suma de ${num1} y ${num2} es de = ${num1 + num2}`);
console.log(`La resta de ${num1} y ${num2} es de = ${num1 - num2}`);
console.log(`La multiplicacion de ${num1} y ${num2} es de = ${num1 * num2}`);
console.log(`La division de ${num1} y ${num2} es de = ${num1 / num2}`);
console.log(`El modulo de ${num1} y ${num2} es de = ${num1 % num2}`);

// PARTE B *******************************************************************************
console.log(`\n\n`);
console.log('Funciones Matemataicas');

// i 
console.log(Math.ceil(suma));

// ii 
console.log(Math.floor(suma));

// iii
console.log(Math.round(suma));

// iv
console.log(Math.sqrt(suma));

// PARTE C ****************************************************************************************
console.log(`\n\n`);
console.log('Conversiones y validaciones ');

//i 
let string1 = '25.89'
console.log(Number.parseFloat(string1));

// ii
let string2 = '42'
console.log(Number.parseInt(string2));

// iii
console.log(Number.isInteger(num1));

// iv
console.log(Number.parseFloat(num2).toFixed(1));







