// PARTE A ********************************************************
console.log(`\n\n\n`);

console.log('Manipulacion Basica');

// 1
const variable1 = ' Estoy aprendiendo JavaScript en el CUROC '
console.log(variable1);

//2 
console.log(variable1.length);

//3
console.log(variable1.trim());

//4
console.log(variable1.trim().toUpperCase());

//5
console.log(variable1.trim().toLowerCase());


// PARTE B *********************************************************************************************
console.log(`\n\n`);
console.log('Busqueda y Reemplazo');

// i 
console.log(variable1.indexOf("JavaScript"));

// ii
console.log(variable1.indexOf("CUROC"));

// iii
console.log(variable1.replace('CUROC','UNAH-COPAN'));

// PARTE C **************************************************************
console.log(`\n\n`);
console.log('Division y Extracion');

//i
console.log(variable1.split(' '));

// ii
console.log(variable1.slice(0,8));

// iii
console.log(variable1.substring(19,30));








