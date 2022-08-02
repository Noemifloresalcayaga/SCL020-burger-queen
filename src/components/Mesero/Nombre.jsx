import { useState } from "react";


const Nombre = () => {
    const [save, setSave] = useState("");
    
    const handleSubmit = (ev) => {ev.preventDefault();
        setSave(ev.target.save.value);
        }

    return <div>
        <form className="div2 nombre" onSubmit={(ev)=> handleSubmit(ev)}>
        <input className="save" type="text" name="save" autoComplete="off" placeholder="Ingresa nombre"></input>
        <button className="cliente" type="submit">Ingresar cliente</button>
        <p>Pedido de: {save}</p>
        </form>
    </div>
}

export default Nombre;





