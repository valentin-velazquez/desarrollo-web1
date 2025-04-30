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
