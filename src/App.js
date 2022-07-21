import * as React from "react";
import { Routes, Route, Link} from "react-router-dom";
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
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
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
