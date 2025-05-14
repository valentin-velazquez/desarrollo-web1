
let boton = document.getElementById("boton");
const recibe = document.getElementById("contenedor");
const li = document.createElement("li");


boton.addEventListener('click', function(){
    
    
    let datos = document.getElementById("in").value;

   
        const li = document.createElement("li");
        li.textContent = datos;
        recibe.appendChild(li);
        const check = document.createElement("input");
        check.type = "checkbox";
        li.textContent = datos;
        check.value = false;
        li.append(check)
        recibe.appendChild(li);

        console.log(check.value,check)
    check.addEventListener('change', function(){
        if(check.checked){
            li.remove();
        }
    })    

        document.getElementById("in").value = "";  // Limpia el input
})