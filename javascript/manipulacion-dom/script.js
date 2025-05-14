// manipulacion del dom 
// nos permite interactuar con un documento, modificar estructura
// estilo y contenido
// modificar su estructura

//select
//por ID 

// let titulo = document.getElementById(recibe= 1=que id vamos a agarrar,)
// obteniendo por id la etiqueta titulo 
// nos permite acceder a todas sus propiedades


let titulo = document.getElementById("titulo")
console.log(titulo)
console.log(titulo.textContent, titulo.innerText);

titulo.textContent = "este es el nuevo titulo";


//Even(addEventListener, onClick, onChange)
let boton = document.getElementById('boton')
boton.addEventListener('click', function(){
     alert('este boton ha sido clickeado')
})