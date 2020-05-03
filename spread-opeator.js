//El operador spread  - Operador de Propagión - como combinar los valor de un array con  los valores de otro
//Para finalizar con esta clase nos vamos a meter con cómo podemos hacer para combinar los valores de un array con los valores de otro array. 
// Lo que usa antes de los array que se van a combinar, son llos tres puntos
//Tambien trabaja sobre Objetos Literales
let hijos = ['Victor','Luis','Indira'];
let esposa = ['Gloria'];

let familia = [...esposa, ...hijos];

console.log(esposa);
console.log(hijos);
console.log(familia);

//Ahora lo voy a ejemplificar sobre array asociativos
let madre = {
    nombreMadre : "Gloria Medina",
    sentimiento : 'Los amo fullll'
}

let hijo1 = {
    nombre: 'Victor',
    edad : 25,
    ...madre
}

let hijo2 = {
    nombre : 'Luis',
    edad : 24,
    ...madre
}

console.log(madre);

console.log(hijo1);
console.log(hijo2);



