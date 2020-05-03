//Declaración de variables en JS
var nombre = "Daniel";
console.log(nombre);
var nombre = "Gloria";
console.log(nombre);
//Usando let
let apellido = "Fuentes";
//Aquí da error ya que con let no puedo volver a declarar la variable
//let apellido = "Medina";
// Sin embargo en otro bloque de código, si puedo
if (apellido = "Fuentes"){
    let apellido = "Medina";
    console.log(apellido);
}
console.log(apellido);

//Otra forma de declarar las varibales es usando const, la cual nos sirve par declarar una constantante
const edad = 53;
//Aquí da error ya que al igual que el let no puedo volver a declarar la variable
//const edad = 54;
console.log(edad);
//Dentro de otro bloque si lo puedo declarar al igual como el let
if (edad >=18){
    const edad = 54;
    console.log(edad);
}
console.log(edad);
