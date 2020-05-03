//Métodos array segunda parte
// map - Recorre cada uno de los elementos de un array, tomando como parámetro cada uno de estos elementos y se e3ncarga de retornar un array nuevo con la misma cantidad de elementos que el array original
let numeros = [2,4,6];
let nuevoArray = numeros.map(function(valor){
    return valor * 2;
});

console.log(numeros);

console.log(nuevoArray);

//filter - Reccore un array dado y retorna un array pero sólo con aquellos que cumplan con la condición dada en el filtro
let filtrado = numeros.filter(function(valor){
    return valor >=4;
});

console.log(filtrado);

//reduce - Es parecido a los anteriores métodos, es decir recibe un array lo recorre uno a uno sus elementos y la diferencia es que retorna no un array sino que retorna un valor, además recibe dos parámetros primero el acumulador y de segundo los valores del array

let sumaValores = numeros.reduce(function(acumulador, numero){
    return acumulador + numero;
});

console.log(sumaValores);

//Método para iterar sobre un array - el foreach() - Recibe un callback, pero no devuelve nada, su función es sólo iterar sobre el array

numeros.forEach(function(elemento){
    console.log(elemento);
});

//Otro método para iterar sobre los array
for (const indice of numeros) {
    console.log(indice);
}

//Otro método el for in
for (const indice in numeros) {
    console.log(numeros[indice]);
}