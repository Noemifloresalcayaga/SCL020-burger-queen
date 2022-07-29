import { useUserContext, useUserToggleContext } from "./userProvider";


const Nombre = () => {

    const save = useUserContext();
    const handleSubmit = useUserToggleContext();
    return <div>
        <h2>Nombre Cliente</h2>
        <form className="div2 nombre" onSubmit={(ev)=> handleSubmit(ev)}>
        <input className="save" type="text" name="save" autoComplete="off" placeholder="Ingresa nombre"></input>
        <button className="cliente" type="submit">Ingresar cliente</button>
        <p>Pedido de: {save}</p>
        </form>
    </div>
}

export default Nombre;


