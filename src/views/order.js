import {useState, useRef} from "react";
import style from "./order.css";
import { useDetectOutsideClick } from "./useDetectOutsideClick.js";



function Mesero() {
  //Funcion menu desplegable
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
    //Funcion para mostrar cliente
    const [save, setSave] = useState("");
    const handleSubmit = (ev) => {ev.preventDefault();
      setSave(ev.target.save.value);}
    return (
    <>
      <div className="Mesero">
        <h2>Nombre del cliente:</h2>
      </div>
        <form onSubmit={(ev)=> handleSubmit(ev)}
        >
        <input type="text" name="save" autoComplete="off"></input>
        <button className="postres" type="submit">Ingresar cliente</button>
        <p>Pedido de: {save}</p>
        </form>
        <button className="postres" id="postres">Entradas</button>
        <button className="postres" id="postres">Hamburguesas</button>
        <button className="postres" id="postres">Acompañamientos</button>
        <button className="postres" id="postres">Postres</button>
        <div>
         <p>Items:</p>   
         <button className="postres" id="postres">Enviar</button>
         <p>Total:$</p>  
    <div className="container">
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <span className="postres">Postres</span>
        </button>
        <nav
          ref={style.dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li>
              <a href="#">Pie de Limón</a>
            </li>
            <li>
              <a href="#">Brownie VeggieHappy</a>
            </li>
            <li>
              <a href="#">Flan de tofu</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
    </>
   )}

   export default Mesero