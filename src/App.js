import * as React from "react";
import { Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./views/home.js"

function App() {
  return (
    <div className="App">
      <h1>VeggieHappy</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Mesero" element={<Mesero/>} />
        <Route path="/Chef" element={<Chef/>} />
      </Routes>
    </div>
 )}

 function Mesero() {
  return (
    <div className="Mesero">
      <h2>Ingresa tu pedido</h2>
    </div>
 )}


  function Chef() {
    return (
      <div className="Chef">
        <h2>Pedidos</h2>
      </div>
   )}

  


export default App;
