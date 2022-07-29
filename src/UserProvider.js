import React, {useState, useContext} from "react";

const userContext = React.createContext();
const userToggleContext = React.createContext();

export function useUserContext() {
    return useContext(userContext);
}

export function useUserToggleContext() {
    return useContext(userToggleContext); 
}

export function UserProvider(props){

    const [user, setUser] = useState(null);
    const cambiaLogin = () => {
        if(user){
          setUser(null);
        }
        else{
          setUser({
            name: "Noe y cielo",
            mail: "cielo@gmail.com"
          });
        }
      }
    
    return (
        <userContext.Provider value={user}>
            <userToggleContext.Provider value={cambiaLogin}>
             {props.children}
            </userToggleContext.Provider>

        </userContext.Provider>

    );
}


//NIVEL BASICO
//vamos a traer los contextos a esta funcion para que se queden aqui englobados
//y encapsulados
//userToggleContext para crear informacion para hacer la modificacion de si el usuario existe o no.