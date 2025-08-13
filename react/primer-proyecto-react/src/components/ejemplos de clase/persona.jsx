import { useContext } from "react";
import{ Persona2 } from "./persona2";
import { NombreContext } from "../../main";

export function Persona({nombre}) {
    const nombreContext = useContext(NombreContext)
    return(
        <>
        <h3>este es el componente persona</h3>
        <div> hola{nombre} {nombreContext}</div>
        
        
        <Persona2/>
        </>
    );
}