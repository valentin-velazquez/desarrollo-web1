import React, { useState, useEffect } from "react";

function SimuladorCarga() {
  const [mensaje, setMensaje] = useState("Cargando...");

  useEffect(() => {
    const timer = setTimeout(() => {
      setMensaje("Listo");
    }, 3000); // 3000 milisegundos = 3 segundos

    // Limpieza si el componente se desmonta antes de tiempo
    return () => clearTimeout(timer);
  }, []); // Se ejecuta solo una vez al montar

  return (
    <div>
      <h1>{mensaje}</h1>
    </div>
  );
}

export default SimuladorCarga;
