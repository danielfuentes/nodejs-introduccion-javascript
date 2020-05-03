//lengh
let nombre = "Famlia los amo fulll";
console.log(nombre.length);
console.log(nombre.trim());
console.log(nombre.length);



//indexOf
console.log(nombre.indexOf('amo'));


//Slice    
let unaParte = nombre.slice(11,15);
console.log(unaParte);

//split  - Nos permite pasar un string a un array
let nombreArray = (nombre.trim()).split(' ');
console.log(nombreArray);

//Replace    - replace(lo que busco , lo que quiero reemplazar)
let nombreReplace = nombre.replace('amo','reamo');
console.log(nombreReplace);
