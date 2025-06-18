import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usuario from './components/usuario/Usuario';
import { Proveedor } from './components/proveedor/Provedor';
import { useEffect, useState } from 'react';
// con un punto se queda en la carpeta y con 2 se va una carpeta mas atras

function App() {
  const [character, setCharacters] = useState([])
//       variable    fun.actualiza            valor inicial


  // useEffect va a ejecutar el codigo que se encuentra dentro,
//tantas veces como se actualizen sus dependencias si no hay
//dependencias se ejecuta solo antes del primer renderizado
  useEffect(()=>{
    fetch('https://rickandmortyapi.com/api/character')
    .then((data) => data.json())
    .then((response) => setCharacters(response.results));
  }, []);
  



  return (
  <>
  {character ? (
   character.map((item, index) => <p>{item.name}</p>) 
  ):(<>cargando...</>)
  
  }
  hola mundo
  <button>aguante boca</button>
  <Usuario />
  <Proveedor name={'Vapalepen'}/>
  </>);
}

export default App//export no nombrado
