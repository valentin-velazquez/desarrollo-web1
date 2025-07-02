import { useEffect, useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0); // Estado inicial en 0

  //creo una variablellamada contador, y una función para cambiar ese valor: setContador.
  //El número entre paréntesis (0) es el valor inicial y el setContador sirve para modificarlo.

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    setContador(contador - 1);
  };
  //lo que hago aca es que de la llamo a la funcion setContador para restarle 1

  return (
    <div>
      <h1>{contador}</h1>
      <button onClick={sumar}>sumar</button>
      <button onClick={restar}>restar</button>
    </div>
  );
  //en el return hago que aparezca en la pantalla "sumar" y "restar" con un boton.
}

export default Contador;
