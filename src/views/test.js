import React from "react";
import Nombre from "../components/Nombre"
import { UserProvider } from "../components/userProvider";


function Test() {
    return (
      <UserProvider>
      <div className="Test">
        <Nombre/>
      </div>
      </UserProvider>
   )}
   export default Test

//    <form className="div2 nombre"  onSubmit={(ev)=> handleSubmit(ev)} >
//         <input className="save" type="text" name="save" autoComplete="off" placeholder="Ingresa nombre"></input>
//         <button className="cliente" type="submit">Ingresar cliente</button>
//         <p>Pedido de: {save}</p>
//         </form>