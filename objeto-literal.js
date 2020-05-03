//Trabajando con objetos literales
let persona = {
    nombre : "Daniel",
    apellido : "Fuentes",
    edad : 53
}

console.log('Hola mi nombre es ' +persona.nombre+ ' y mi apellido es '+persona.apellido);

//Haciendo uso de string literales  `` evito usar el operador de concatenación +
console.log(`Hola mi nombre es ${persona.nombre} y mi apellido es ${persona.apellido} y mi edad es de ${persona.edad} años`);

//Ahora voy a declarar una función constructora para de esa forma trabajar con objetos y poder crear todos los objetos que desee partiendo de un molde

//De esta forma creo mi función constructora
function Persona(nombre,apellido,edad){
    this.nombre = nombre,
    this.apellido = apellido,
    this.edad = edad
}

//Ahora para crear el objeto lo único que debo haer es crear una variable y utilizar la palabra reservada new

let hijo1 = new Persona("Victor","Fuentes",25);
let hijo2 = new Persona("Luis","Fuentes",24);
let hijo3 = new Persona("Indira","Rojas",24);
console.log(hijo1.nombre);
console.log(hijo2.nombre);
console.log(hijo3.nombre);

