import React, {useState, useRef} from "react";
import style from "./order.css"
import Nombre from "./Nombre"
import Menu from "./Menu"




function Mesero() {
  //Funcion menu desplegable
  //menuid i set menuid
  const [menuId,setMenuId] = useState(0);
  const dropdownRef = useRef(null);
  const onClick = (id) => {
    if(menuId == id) {
      setMenuId(0)
    } else {
      setMenuId(id)
    }
  };

  //map
    return (
    <>
      <div className="parent">
        <h2 className="div1 titulo">Nuestros pedidos hoy</h2>
        <Nombre/>
        <Menu/>
      </div>
  
    </>
   )}

   export default Mesero