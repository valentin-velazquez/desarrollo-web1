import { useState } from "react";

export function Operator() {
  const [num, setNum] = useState([1, 2, 3, 4, 5]);
  const [persona, setPersona] = useState({
    name: "Federico",
    alumno: "Thiago",
  });

  const ultimo = num[num.length - 1]; // siempre toma el último

  function agregarNumero() {
    setNum([...num, ultimo + 1]);
  }

  //arrow function
  const addNums = () => {
    setNums([0, ...nums, 6]);
  };

  const updateName = () => {
    setPersona({ ...persona, name: "Miguel", edad: 80 });
    console.log(persona);
  };

  return (
    <>
      {nums.map((num, index) => (
        <p key={index}>{num}</p>
      ))}
      <h3>Spread Operator</h3>
      <button onClick={agregarNumero}>agregar numeros</button>
      <button onClick={updateName}>modificar persona</button>
    </>
  );
}
