import { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState([1, 2, 3]); //contiene culaquier cosa el estado
  const [persona, setPersona] = useState({ nombre: "FEDE", edad: "19" });
  const numero = num[num.length - 1]; //toma el ultimo numero

  function myFunction() {
    setNum([...num, numero + 1]);
  }

  function person() {
    const cumple = {
      ...persona,
      cumple: "18/04",
    };
    console.log(cumple);
  }

  function cambiar() {
    const cambiar = {
      ...persona,
      nombre: "VAPALEPEN",
    };
    console.log(cambiar);
  }

  // ACTIVIDAD DEL B
  const productos = [
    { nombre: "Camiseta", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
  ];

  // usando map + spread
  const productosConDescuento = productos.map((producto) => ({
    ...producto,
    descuento: true,
  }));

  function mostrarProductos() {
    console.log(productosConDescuento);
  }

  return (
    <>
      <div>
        {num.map((item, index) => (
          <p key={index}>{item}</p>
        ))}

        <button onClick={myFunction}>Agregar numero</button>
        <button onClick={person}>Agregar cumple</button>
        <button onClick={cambiar}>Cambiar nombre</button>
        <button onClick={mostrarProductos}>
          Mostrar productos con descuento
        </button>
      </div>
    </>
  );
}

export default App;
