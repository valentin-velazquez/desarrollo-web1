const button = document.getElementById("boton")
let contador = 0;



// setTimeout


// funcion que recibe por parametros de valores
// recibe una funcion y recibe el tiempo que va a tardar en ejecutarse

// setTimeout(function(){
//     alert("hola fui clickeado hace 2 segundos")

// }, 2000)//milisegundos

// setInterval()
// ejecutar el codigo cada n cantidad de tiempo


button.addEventListener('click', ()=>{
    setTimeout(function(){
    alert("hola fui clickeado hace 2 segundos")

}, 2000)//milisegundos
 setInterval(()=>{
    contador++
    console.log(contador);
}, 1000);
})



// sincronia
// peticion de una api
// metodos: get, post, put, delete

//fetch
fetch('https://rickandmortyapi.com/api/character')
.then((data) => data.json())
.then((response) => console.log('response', response));//le pasa la url


// async await
// funcion flecha asincrona 
const asyncfunction = async () =>  {
    //try catch
    try{
        const response = await fetch('https://rickandmortyapi.com/api/character/2')
        const data = await response.json()
        console.log("data", data);
        
    }catch(error){
        console.log("error", error);

    }
    
};
asyncfunction();


//funcion flecha asincrona 
async function asyncfunc()  {
    
};