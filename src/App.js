import * as React from "react";
import { Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./views/home.js"
import Mesero from "./views/order.js"
import Chef from "./views/preparation.js"

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




  

  


export default App;
