import React from "react";
import { Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./views/home.js"
import Mesero from "./views/order.js"
import Chef from "./views/preparation.js"
//useState guarda los estados dentro de nuestras aplicacione.
import Hijo from "./components/Hijo.jsx"
import { UserProvider } from "./UserProvider";

//guardar un usuario y como hacer un login.
//se exporta para ocuparlo en cualquier otro sitio.

 
function App() {

//se guarda un usuario (user) y una funcion que permita modificar al usuario
//lo guardamos a través de una llamada al useState ( = useState () ), en este caso lo llama null
//porque está vacío, pero se pueden poner {} [] y numeros segun su uso.
//se pone userContext envolviendo todo el div para que fluyan y cojan los datos del componente.
//también se le agrega el .Provider porque userContext le dice a Provider que le va a pasar 
//datos para que estén disponibles para cualquier componente que se encuentre dentro de <userContext.Provider>
//a esto se le pasa un valor (value) en donde se inserta la info que se le desea enttregar 
//al userContext para que esté disponible para todo todo ej: chef, mesero,etc. 
//Para probar se creó una constante cambiaLogin la cual va a tener una condicion
//segun la existencia del usuario. 
  // const [user, setUser] = useState(null)

  // const cambiaLogin = () => {
  //   if(user){
  //     setUser(null);
  //   }
  //   else{
  //     setUser({
  //       name: "Noe y cielo",
  //       mail: "cielo@gmail.com"
  //     });
  //   }
  // }

  return (
    <div className="App">
      <img  className="logo" src={require("./img/logo.png")} alt="logo" />
      <UserProvider>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Mesero" element={<Mesero/>} />
        <Route path="/Chef" element={<Chef/>} />
        </Routes>
        <Hijo/>
      </UserProvider>

    </div>
 )}


export default App;
