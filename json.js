//Trabajando con JSON (Notación de Objetos JavaScript) 
let familia = ['Gloria','Victor','Luis','Indira','Zulay','Yelena','Henry','Yuraima'];
console.log(familia);
//Como pasar de un array a json 
let familiaJson = JSON.stringify(familia);
console.log(familiaJson);
//Para pasar este archivo en formato JSON a nuevame un array, debo ejecutar el comando JSON.parse

let familiaArray = JSON.parse(familiaJson);
console.log(familiaArray);

//Ahora trabajando lo mismo pero ahora usando: Objeto Literal
let hijo = {
    nombre : "Victor",
    apellido : "Fuentes",
    edad :25
}

console.log(hijo);
//Lo paso a un archivo en formato JSON.
let hijoJson = JSON.stringify(hijo);
console.log(hijoJson);
//Ahora lo paso a objeto literal
let hijoLiteral = JSON.parse(hijoJson);
console.log(hijoLiteral);
 

