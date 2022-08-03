import { useState } from "react";
import {postres, entradas,hamburguesas} from "./data.js"
//meter la data y crear funciones para llamarla
export function MenuPostres () {
  const [add, setAdd] = useState("");
    
    const handleClick = (e) => {e.preventDefault();
        setAdd(e.target.add.value);
        }


   const listItems = postres.map((postre) => (

    
    <li key={postre.id} onClick={(e) => handleClick(postre.name, e)}>{postre.name}</li>
   
  ));
  
  return (  <ul className = "menu.active" >{listItems}</ul> );
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
