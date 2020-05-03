//Trabajando con el objeto date, para ello debemos declrar una variable y sobre ella instanciamos el objeto date, haciendo uso de la palabra reservada new sobre el objeto date

let fecha = new Date();
console.log(fecha);

//El método getday() nos devuelve el día de la semana, partiendo desde el domingo el cual tendría la posicion cero del array de dias ['domingo','lunes','martes','miercoles','jueves','viernes']

console.log(fecha.getDay());

//El método getMonth() - Nos devuelve el número del mes - iniciando por el mes ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
console.log(fecha.getMonth());

//El método getDate() nos devuelve el día del mes en curso
console.log(fecha.getDate());

//El método getFullYerar() - nos devuelve el año en curso
console.log(fecha.getFullYear());


