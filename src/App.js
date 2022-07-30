import React from "react";
import { Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./views/home.js"
import Mesero from "./views/order.js"
import Chef from "./views/preparation.js"
import { UserProvider } from "./userProvider";

//useState guarda los estados dentro de nuestras aplicacione.

//guardar un usuario y como hacer un login.
//se exporta para ocuparlo en cualquier otro sitio.

 
function App() {

  return (
    <div className="App">
      <img  className="logo" src={require("./img/logo.png")} alt="logo" />
      <UserProvider>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Mesero" element={<Mesero/>} />
        <Route path="/Chef" element={<Chef/>} />
        </Routes>
      </UserProvider>
        


    </div>
 )}


export default App;
