const numero = 20;

if (numero < 0) {
    console.log('negativo');
} else if (numero > 0) {
    console.log('positivo');
} else {
    console.log('cero');
}

//ACTIVIDAD 2
let sumaPares = 0;

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) { // Verifica si el número es par
        sumaPares += i; // Suma los números pares
    }
}

console.log("La suma de los números pares es:", sumaPares);

//ACTIVIDAD 3
let suma = 0;

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 !== 0) { // Verifica si es múltiplo de 3 pero no de 5
        suma += i; // Suma los multiplos de 3
    }
}
console.log("La suma de los numeros que son multiplo de 3 y no de 5 es:", suma);




//ACTIVIDAD 4 -7/05

const inventario = [];
inventario.push({producto: "hamburguesa", precio: 6000, categoria: "comida"},
               {producto: "pc", precio: 10000, categoria: "Electronica"},
               {producto: "celular", precio: 7000, categoria: "Electronica"},
               {producto: "ludo", precio: 2000, categoria: "juego"}
)
console.log("agrego", inventario);

//-----------------------------------------------------------------------------------------//
// forEach
// solo recorre, no guarda en ningun lado
inventario.forEach((item, index) => {
    console.log('elemento', item, 'index', index)
})



// ------------------------------------------------------------------------------------------------
const elemnelec = inventario.filter((item)=> item.categoria === "Electronica");
console.log(elemnelec);

// ----------------------------------------------------------------------------------------------------
const productos = inventario.map((item)=>{
    return item.producto
});

console.log(productos)