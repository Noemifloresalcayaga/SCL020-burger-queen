import React from "react";
import { Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./components/home/home.js"
import Mesero from "./components/Mesero/mesero.js"
import Chef from "./components/Chef/chef.js"
// import { UserProvider } from "./userProvider";

//useState guarda los estados dentro de nuestras aplicacione.

//guardar un usuario y como hacer un login.
//se exporta para ocuparlo en cualquier otro sitio.

 
function App() {

  return (
    <div className="App">
      <img  className="logo" src={require("./img/logo.png")} alt="logo" />

       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Mesero" element={<Mesero/>} />
        <Route path="/Chef" element={<Chef/>} />
        </Routes>
        


    </div>
 )}


export default App;
