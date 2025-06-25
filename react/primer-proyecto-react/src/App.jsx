import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usuario from './components/usuario/Usuario';
import { Proveedor } from './components/proveedor/Provedor';
import { useEffect, useState } from 'react';
// con un punto se queda en la carpeta y con 2 se va una carpeta mas atras

function App() {
  const[nombre, setNombre] = useState("");
 
  const handleClick = () =>{
    console.log(nombre)
  };

  const handleInputChange = (event) => {
    setNombre(event.target.value)
  };



  return (
  <>
  <input type="text"
   placeholder='Escribi tu nombre'
   onChange={handleInputChange}
  value={nombre}
  />
  <button onClick={handleClick}>Mostrar</button>

{/* si existe el nombre te lo pone abajo */}
  {nombre  && <h2>{nombre}</h2>}

{/* ifelse, en este caso si esta vacio el input te tira hola y si no chau. */}
{nombre === "" ? <>hola</> : <>chau</>}

  </>);

}// cuando no ponemos el parentesis espera a nosotros hagamos el click en el onclick.





export default App//export no nombrado
