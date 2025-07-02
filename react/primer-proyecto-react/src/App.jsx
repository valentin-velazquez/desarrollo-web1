import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Usuario from "./components/usuario/Usuario";
import { Proveedor } from "./components/proveedor/Provedor";
import { useEffect, useState } from "react";
import Contador from "./components/ejercicios/act1";
import Capturar from "./components/ejercicios/act2";
import Temporizador from "./components/ejercicios/act3";
import Montado from "./components/ejercicios/act3";
import SimuladorCarga from "./components/ejercicios/act4";
// con un punto se queda en la carpeta y con 2 se va una carpeta mas atras

function App() {
  const [nombre, setNombre] = useState("");

  // Usa useState para declarar una variable nombre y su función actualizadora setNombre.
  // Inicialmente, nombre está vacío ("").

  const handleClick = () => {
    console.log(nombre);
  };
  // Cuando hacés clic en el botón, imprime el valor actual de nombre en la consola.

  const handleInputChange = (event) => {
    setNombre(event.target.value);
  };
  // Se ejecuta cada vez que el usuario escribe en el input.
  // Toma el valor escrito (event.target.value) y lo guarda en el estado nombre.

  return (
    <>
      <input
        type="text"
        placeholder="Escribi tu nombre"
        onChange={handleInputChange}
        // hace que cada vez que el usuario escriba algo en el input, se ejecute la función handleInputChange.
        value={nombre}
      />
      <button onClick={handleClick}>Mostrar</button>
      {/* Muestra un input controlado (su valor viene del estado).
 Muestra un botón que, al hacer clic, llama a handleClick. */}

      {/* si existe el nombre te lo pone abajo */}
      {nombre && <h2>{nombre}</h2>}

      {/* ifelse, en este caso si esta vacio el input te tira hola y si no chau. */}
      {nombre === "" ? <>hola</> : <>chau</>}
      <Contador></Contador>
      <Capturar></Capturar>
      <Montado></Montado>
      <SimuladorCarga></SimuladorCarga>
    </>
  );
} // cuando no ponemos el parentesis espera a nosotros hagamos el click en el onclick.

export default App; //export no nombrado
