console.log(`\n\n\n`);

//i
const estudiante = {
    nombre : 'Jose Camilo Alvarado Leiva',
    numeroCuenta : 20232130024,
    materias : ['ingles 3', 'Ecuaciones', 'Discreta'],
    notas : {
            ingles3 : 90,
            ecuaciones : 100,
            discreta : 100,
    },
    activo : true,

}
console.log(estudiante);


//ii
estudiante.email = 'josecamilo2404@gmail.com'

estudiante.activo = false

delete estudiante.materias.splice(0,1)

// iii
console.log(estudiante.nombre);
console.log(estudiante.numeroCuenta);

console.log(estudiante.notas.ingles3);
console.log(estudiante.notas.discreta);
console.log(estudiante.notas.ecuaciones);

console.log(estudiante.activo);

