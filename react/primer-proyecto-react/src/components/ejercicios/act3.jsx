// import React, { useState, useEffect } from "react";

import { useEffect } from "react";

// function Temporizador() {
//   const [segundos, setSegundos] = useState(0);

//   useEffect(() => {
//     // Crear un intervalo que incrementa los segundos
//     const intervalo = setInterval(() => {
//       setSegundos((prevSegundos) => prevSegundos + 1);
//     }, 1000); // Ejecutar cada 1 segundo

//     // Función de limpieza cuando el componente se desmonta
//     return () => clearInterval(intervalo);
//   }, []); // Solo ejecutar una vez al montar

//   return <h2>Segundos: {segundos}</h2>;
// }

// export default Temporizador;
function Montado() {
  useEffect(() => {
    console.log("componente montado");
  }, []);
}
export default Montado; //export no nombrado
