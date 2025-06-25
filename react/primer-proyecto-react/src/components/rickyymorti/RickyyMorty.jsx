import { useEffect, useState } from "react";


export function RicMorty(){

    const [character, setCharacters] = useState([])
//        variable    fun.actualiza            valor inicial

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
  
  </>);
}