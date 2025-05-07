const miArreglo = [1, 2, "hola como va", true]





// push ()valor --> agrega un elemento al final 
//equivalente al appendde py
miArreglo.push("nicolas");
console.log("cadena", miArreglo);



// pop() elimina el ultimo elemento de un arreglo
// si queremos lo podemos guardar en una variable
const ultimo = miArreglo.pop(); 
console.log("ultimo", ultimo)

// shift() elimina el primer valor de un arreglo,
// tambien lo guarda
const primero = miArreglo.shift();
console.log(primero);

// unshift(valor) agrega un elemento al principio del arreglo
miArreglo.unshift("fede");
console.log(miArreglo);



// forEach
// solo recorre, no guarda en ningun lado
miArreglo.forEach((item, index, miArregloentero) => {
    console.log('elemento', item, 'index', index, 'miArregloentero', miArregloentero)

})



// map recorre el miArreglo, lo modifica con una funcion 
// y nos devulve uno nuevo
const nuevoArreglo = miArreglo.map((item, index)=>{
    const num = 2
    console.log(index, "item", item);
    return (item += num);
});

console.log("nuevo arreglo", nuevoArreglo)



//filter crea un nuevo array a partirde los elementos que 
// cumplan la funcion

const arregloNum = [2, 4, 5, 6];
const pares = arregloNum.filter((item)=> item % 2 === 0);
console.log(pares);