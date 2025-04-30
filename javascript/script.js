//lenguaje de programacion client-side
//actualmente orientado a funciones

//variables
var miVariable = "hola soy una variable con var" //no se usa
let miVariable2 = "pueden ser re-escritos sus valores, se pueden pisar los datos" //solo vive en el scope declarado
miVariable2 = 9 //reasigna del valor
const miVariable3 = "constante no cambian los valores";




//tipos de datos
const hola = "hola fede"
const numeros = 2 //number
const booleanos = true //boolean
console.log("hola mundo")
console.log(hola) //equivalente a print

//undefined --> valor no definido
//null --> vacio


//OPERADORES

//aritmeticos: son todos los de matematicas + - % * /
//comparacion:
// == doble igual compara el valor de dato PYTHON
//=== compara el valor y el tipo de dato JAVA SCRIPT
// != distnacia el valor !== distinto valor y tipo
// > < >= <= mayor menor, mayor o igual, menor o igual 


//incondicionales
//if 
const edad = 20 
if(edad > 18){
    console.log('sos mayor de edad')
}else{
    console.log('sos menor de edad')
}

//switch
const dia = 1
switch(dia){
    case 1: console.log('dia lunes'); break
    case 2: console.log('dia lunes'); break
    default: console.log('dia no registrado')
}


//funciones
function saludar(nombre){ //la funcion tiene una declaracion, en los parentesis van los parametros
    console.log(nombre)
    return `hola ${nombre}`;//en general las funciones van a retornar algo
}
console.log(saludar("vapalepen"));

//arrow funtion 
//return explicito

const saludarexplicito = (nombre) => {
    return `hola ${nombre}`};//return implicito



const saludo = (nombre) => `hola ${nombre}`;//return implicito
//si el return implicito tiene mas de una linea va a estar envuelto en parentesis


//arreglos o arrays
//listas de python
const miArreglo = [1, 2, "hola como va", true]

console.log(`la posicion 1 del arreglo es, ${miArreglo[1]}`);

//objetos
//diccionarios
const objeto = {
    clave: "valor",
    nombre: "valen"
};
console.log(objeto.nombre);


//iteramos una lista for
for(let i=0;  i < miArreglo.length; i++){
    console.log(miArreglo[i])//imprimi en la pantalla el arreglo con su posicion

}




