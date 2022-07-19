import * as React from "react";
import { Routes, Route, Link} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>VeggieHappy</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Mesero" element={<Mesero/>} />
        <Route path="/Chef" element={<Chef/>} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
 )}

 function Mesero() {
  return (
    <div className="Mesero">
      <h2>Ingresa tu pedido</h2>
    </div>
 )}

function Home() {
  return (
      <>
        <main>
          <h2>Ingresa</h2>
          <button id="postres"><Link to="/Chef">Chef</Link></button>
          <button id="postres"><Link to="/Mesero">Mesero</Link></button>
        </main>
        {/* <nav>
          <Link to="/about">About</Link>
        </nav> */}
      </>
    );
  }
  function Chef() {
    return (
      <div className="Chef">
        <h2>Pedidos</h2>
      </div>
   )}

  
  // function About() {
  //   return (
  //     <>
  //       <main>
  //         <h2>Who are we?</h2>
  //         <p>
  //           That feels like an existential question, don't you
  //           think?
  //         </p>
  //       </main>
  //       <nav>
  //         <Link to="/">Home</Link>
  //       </nav>
  //     </>
  //   );
  // }


export default App;
