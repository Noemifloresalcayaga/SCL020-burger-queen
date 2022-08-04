import { useState } from "react";
import {postres, entradas,hamburguesas, acompañamientos} from "./data.js"
//meter la data y crear funciones para llamarla
export function MenuPostres () {
  const [add, setAdd] = useState("");
    
    const handleClick = (id) => {
        }


   const listItems = postres.map((postre) => (

    
    <li key={postre.id} onClick={(id) => handleClick(postre.id)}>{postre.name}</li>
   
  ));
  
  return (  <ul >{listItems}</ul> );
}
export function MenuEntradas () {

  const listItems = entradas.map((entrada) => (
   
   <li key={entrada.id}>{entrada.name}</li>
 ));
 
 return (  <ul>{listItems}</ul> );
}
export function MenuHamburguesas () {

  const listItems = hamburguesas.map((hamburguesa) => (
   
   <li key={hamburguesa.id}>{hamburguesa.name}</li>
 ));
 
 return (  <ul>{listItems}</ul> );
}

export function Acompañamientos () {

  const listItems = acompañamientos.map((acompañamiento) => (
   
   <li key={acompañamiento.id}>{acompañamiento.name}</li>
 ));
 
 return (  <ul>{listItems}</ul> );
}
