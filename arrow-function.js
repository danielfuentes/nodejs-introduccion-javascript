//Arrow function
let sumar = (valor1,valor2)=>{
    return valor1 + valor2;
}

let resultado = sumar(2,2);
console.log(resultado);

//Una forma mas sintetizada, si solo va a resolver una operación, le podemos quitar las llaves
let restar = (valor1,valor2) => valor1-valor2;
let resultadoRestar = restar(10,5);
console.log(resultadoRestar);
