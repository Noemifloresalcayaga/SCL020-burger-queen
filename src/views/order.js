import {Link} from "react-router-dom";

function Mesero() {
    return (
    <>
      <div className="Mesero">
        <h2>Nombre del cliente:</h2>
        <button id="postres">Entradas</button>
        <button id="postres">Hamburguesas</button>
        <button id="postres">Acompañamientos</button>
        <button id="postres">Postres</button>
        <div>
         <p>Items:</p>   
         <button id="postres">Enviar</button>
         <p>Total:$</p>  
        </div>
      </div>
    </>
   )}
   export default Mesero