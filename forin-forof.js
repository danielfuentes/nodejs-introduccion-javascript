//Métodos for in y for of para iterar array

let numeros = [2,4,6,7,10,2,20];


//Otro método para iterar sobre los array
for (const indice of numeros) {
    console.log(indice);
}

//Otro método el for in
//Sirve para recorrer objetos literales y también array
for (const indice in numeros) {
    console.log(numeros[indice]);
}

//Objeto literal
let hijoMenor = {
    nombre : "Luis",
    apellido : "Fuentes",
    edad : 24
};
for (const indice in hijoMenor) {
    console.log(hijoMenor[indice]);
    
}