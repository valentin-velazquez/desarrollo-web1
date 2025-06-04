//¿Qué diferencia hay entre for y forEach a nivel funcionamiento?
//la diferencia que existe entre estos dos a nivel de funcionamiento es que el for lo podes modificar a tu manera
//y el forEach esta predefinido y no se puede cambiar.
//for each solo recorre y no guarda nada.

//¿Qué es una función de flecha (arrow function)? ¿En qué se diferencia de una función tradicional?
//una funcion 
//en lo que se diferencian es que arrow es mas abreviada y moderna. La otra es mas largar y vieja.


//¿Qué hace el método .forEach() en un array y qué devuelve?
//lo que hace el forEach es que recorre el array y no retorna nada.



//¿Qué método de arrays se usa para eliminar el último elemento de un array?
//se puede utilizar el .pop() para poder borrar el ultimo elemento de un array. 





const productos1 = [
  { nombre: "Notebook", precio: 800 },
  { nombre: "Celular", precio: 500 },
  { nombre: "Teclado", precio: 50 },
];


productos1.forEach(productos1 => {
      
  if(productos1.precio >= 300 ){
    console.log(productos1.valor, "caro")
}

else{
    console.log(productos1.valor, "barato")
}

});

// 🔹 Función para obtener el precio promedio:
function obtenerPrecioPromedio(Productos1) {
  let suma = 0;
  Productos1.forEach((producto) => {
    suma += producto.precio;
  });
  return suma / 3;
}

const promedio = obtenerPrecioPromedio(productos1);
console.log("Precio promedio:", promedio);










// 🧪 Ejercicio 2: map, filter, DOM
// Usando el mismo arreglo productos:
// 🔹 En base al arreglo productos crear un nuevo arreglo con productos que cuesten más de $100 (con el método correspondiente). 
// 🔹 Al igual que en el punto anterior crear un arreglo con los nombres de los productos en minúsculas. (consultar al momento de llegar a este punto)
// 🔹 En el HTML hay un contenedor con id "productos".
// Usando JavaScript:
// <div id="productos"></div>

const productos = [
    {nombre: "auto", precio: 1100},
    {nombre: "television", precio: 400},
    {nombre: "helicoptero", precio: 2000},
]

const pepe = "hopolapa"

pepe.toLowerCase()

    const productosCaros = productos.filter(producto => producto.caro > 100);
    const nombresMinuscula = productos.map(producto => producto.nombre.toLowerCase());

   
   
   
   
   
   
   
   
   
   
   
   
   
   








