//Métodos de los array
let colores = ['amarillo','azul','rojo'];
console.log(colores);

colores.push('blanco');
console.log(colores);
colores[1] = 'verde';
console.log(colores);
colores[1] = 'azul';
console.log(colores);
let ultimoElemento = colores.pop();
console.log(colores);
colores.unshift('violeta');
console.log(colores);
let primerElemento = colores.shift();
console.log(colores);
console.log(colores[2]);
let existe = colores.indexOf('azul');
console.log(existe);

