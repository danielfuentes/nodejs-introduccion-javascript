//Callback, son una función que es pasada como parámetro de otra función
//Vamos a usar callbacks, para hacer una pequeña calculadora
let sumar = (valor1,valor2) =>{
    return valor1 + valor2;
}

let restar = (valor1,valor2) =>{
    return valor1 - valor2;
}

let multiplicar = (valor1,valor2) => {
    return valor1 * valor2;
}

let dividir = (valor1,valor2) => {
    return valor1 / valor2;
}

let calculadora = (valor1,valor2,operacion) =>{
    return operacion(valor2,valor2);
}

console.log(calculadora(2,2,sumar));
console.log(calculadora(2,2,restar));
console.log(calculadora(2,2,multiplicar));
console.log(calculadora(2,2,dividir));
