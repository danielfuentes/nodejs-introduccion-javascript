//Funcion declarada 

function sumar(valor1,valor2){
    return valor1 + valor2;
}

console.log(sumar(2,2));

//Función expresada

let restar = function(valor1,valor2){
    return valor1 - valor2;
}

console.log(restar(30,14));

// Arrow Function ECMA -6
let multiplicar = (valor1,valor2) =>{
    return valor1 * valor2;
}

console.log(multiplicar(3,5));

//Scope de la variable
//En JavaScript, las variables pueden ser globales o locales

let mensaje = "Hola amigos";

function saludar(){
    //AHora si yo aquí vuelvo a declarar la variable mensaje su scope aquí es local
    let mensaje = "Reciban siempre mis mejores deseos..."
    return mensaje;
}
//Aquí la variable su scope es global
console.log(mensaje);
//Aquí la variable su scope es local 
console.log(saludar());


