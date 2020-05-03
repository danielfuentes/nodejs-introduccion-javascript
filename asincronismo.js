//Asincronismo
//Multiples procesos pueden estar corriendo al mismo tiempo, pero en función de como esten finalizando sus procesos en ese mismo orden van mostrando sus resultados.
//Aqui deben observar el orden como se ejecutan cada uno de las funciones
function alarma1(){
    return "Son las 7:10 AM, debes ir a trabajar";
}

function alarma2(){
    return "Son las 7:00 AM, te quedan 10 minutos";
}

setTimeout(() => {
    console.log(alarma1());    
}, 10000);

console.log(alarma2());

 