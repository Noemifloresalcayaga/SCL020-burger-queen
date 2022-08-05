import React, {useState, useRef} from "react";
import style from "./order.css"
import Nombre from "./Nombre"
import {MenuPostres, MenuEntradas}from"./Menu.js"
import {postres, entradas,hamburguesas, acompañamientos} from "./data.js"


function Mesero() {
  //Funcion menu desplegable
  //menuid i set menuid
  const [postresMesero, setPostresMesero]  = useState(postres);
  const [entradasMesero, setEntradasMesero]  = useState(entradas);

  const [menuId,setMenuId] = useState(0);
  const dropdownRef = useRef(null);
  const onClick = (id) => {
    if(menuId == id) {
      setMenuId(0)
    } else {
      setMenuId(id)
    }
  };

  function handleSelect (id) {
   
    const newPostres = [...postresMesero]
   
    const newPostre = newPostres.find((postre)=> id == postre.id)
    newPostre.selected = true
    setPostresMesero(newPostres)
  }

  function handleSelected (id){  
    const newEntradas = [...entradasMesero]
   
    const newEntrada = newEntradas.find((entrada)=> id == entrada.id)
    newEntrada.selected = true
    setEntradasMesero(newEntradas)
  }
  //map
    return (
    <>
      <div className="parent">
        <h2 className="div1 titulo">Nuestros pedidos hoy</h2>
        <Nombre/>
        <div className="div3 items grid">
      <div className="menu-postres">
        <button onClick={()=> onClick(1)} className="opciones">
          <span className="postres">Postres</span>
        </button>
        <nav
          ref={style.dropdownRef}
          className={`menu ${menuId == 1 ? "active" : "inactive"}`}>
          
          {postresMesero.map((postre) => (
            
            <MenuPostres postre = {postre} handleSelect = {handleSelect}/>
          ) )}
          
        </nav>
      </div>
      <div className="menu-entradas">
        <button onClick={()=> onClick(2)} className="opciones">
          <span className="postres">Entradas</span>
        </button>
        <nav
          ref={style.dropdownRef}
          className={`menu ${menuId == 2 ? "active" : "inactive"}`}>
                    
          {entradasMesero.map((entradas) => (
            
            <MenuEntradas entrada = {entradas} handleSelect = {handleSelected}/>
          ) )}
          
        </nav>
      </div>
      <div className="menu-hamburguesas">
        <button  onClick={()=> onClick(3)} className="opciones">
          <span className="postres">Hamburguesas</span>
        </button>
        <nav
          ref={style.dropdownRef}
          className={`menu ${menuId == 3 ?"active" : "inactive"}`}
        >
         
         
        </nav>
      </div>
      <div className="menu-acomp">
        <button onClick={()=> onClick(4)} className="opciones">
          <span className="postres">Acompañamientos</span>
        </button>
        <nav
          ref={style.dropdownRef}
          className={`menu ${menuId == 4 ? "active" : "inactive"}`}
        >
        </nav>
        
      </div>
    </div>
      <footer className="div4 footer">
      <ul className="lista">
      <p className="total">Items:</p>
      {postresMesero.map((postre) => (postre.selected === true ? 
      <>
      <div>{postre.name}</div>
      <div>{postre.price}</div> </> : null
      ))}
       {entradasMesero.map((entrada) => (entrada.selected === true ? 
        <>
        <div>{entrada.name}</div>
        <div>{entrada.price}</div> </> : null
      ))}
      </ul>
      <p className="despliegue">Total:$</p>
      <button  className="enviar" id="postres">Enviar</button>
      </footer>
      </div>


  
    </>
   )}

   export default Mesero