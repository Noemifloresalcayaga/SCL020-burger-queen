import { useUserToggleContext, useUserContext} from "../UserProvider";

//Ahora tiene que recuperar información de este contexto, esto se hace dentro del Hijo llamando
//a una constante (const user = ...)
//a los <div> se le puso un condicionte (&&) para verificar si user existe. Si este existe 
//que aparezca un <p> con la info que se le pidió. 
//hace que se renderice lo que va despues. Es un if ternario modificado
const Hijo = () => {

    const user = useUserContext();
    const cambiaLogin = useUserToggleContext();

    return <div>
        <h2>Componente Hijo</h2>
        {user && <p>hola {user.name}</p>}
        <button onClick={cambiaLogin}>Cambia Login</button>

            </div>
}

export default Hijo;