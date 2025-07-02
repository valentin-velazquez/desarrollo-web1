import { useEffect, useState } from "react";

function Capturar() {
  const [capturar, setCapturar] = useState("");
  const handleClick = () => {
    console.log(capturar);
  };
  const handleInputChange = (event) => {
    setCapturar(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Escribi"
        onChange={handleInputChange}
        // hace que cada vez que el usuario escriba algo en el input, se ejecute la función handleInputChange.
        value={capturar}
      />
      <button onClick={handleClick}>Mostrar</button>
      {/* Muestra un input controlado (su valor viene del estado).
        Muestra un botón que, al hacer clic, llama a handleClick. */}

      {/* si escribe te lo pone abajo */}
      {capturar && <h2>{capturar}</h2>}
    </>
  );
}
export default Capturar; //export no nombrado
