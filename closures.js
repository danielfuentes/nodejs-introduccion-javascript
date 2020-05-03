//Closures - Son funciones que viven dentro de otras funciones, el mismo será utilizado en el mismo momento en que la función contenedora sea ejecutada y luego de esto deja de existir
//La función hija puede usar todos los parámetros y variables que reciba la función padre.
let saludar = (persona) => {
    let mensaje = "Bienvenidos!!!";
    let nombre = () => {
        return mensaje + " "+persona;
    }
    return nombre();
}
//Para invocarla 
console.log(saludar("Victor y Luis Daniel Fuentes "));




