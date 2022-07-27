import * as React from "react";
import { Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./views/home.js"
import Mesero from "./views/order.js"
import Chef from "./views/preparation.js"

function App() {
  return (
    <div className="App">
      <img  className="logo" src={require("./img/logo.png")} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Mesero" element={<Mesero/>} />
        <Route path="/Chef" element={<Chef/>} />
      </Routes>
    </div>
 )}




  

  


export default App;
