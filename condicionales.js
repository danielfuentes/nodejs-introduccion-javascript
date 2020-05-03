//Las condiciones nos ofrecen la posibilidad de generar diversas rutas o caminos por donde el programa podrá acudir en función si la condición expuesta, se cumple o no.
let edad = 15;
if (edad>=18){
    console.log('Bienvenido!!!');
}else{
    console.log('Requiere ingresar con un adulto...');
}

edad = 25;
//If ternario   (condicion) ? primera salida : segunda salida)
(edad>=18)?console.log('Bienvenido!!!') : console.log('Requiere ingresar con un adulto...');

