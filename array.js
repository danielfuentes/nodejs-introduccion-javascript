//Array - Permite agrupar mucha información en una sóla variable
let miFamilia = ['Gloria'];
console.log(miFamilia);
//Agregar elementos
miFamilia.push('Victor','Luis');
miFamilia.push('Indira');
console.log(miFamilia);
//Sacar el último elemento del array
miFamilia.pop();
console.log(miFamilia);
//Meter un elemento al principio del archivo
miFamilia.unshift('Yuraima');
console.log(miFamilia);
//Sacar un elemento al principio del array
miFamilia.shift();
console.log(miFamilia);
//Para recorrer el array pero con el for of
for (const indice of miFamilia) {
    console.log(indice);
}

