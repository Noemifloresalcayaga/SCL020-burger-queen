import {Link} from "react-router-dom";


function Home() {
    return (
        <>
          <main>
            <h2>¿Quien eres?</h2>
            <button className="cliente" ><Link to="/Chef">Chef</Link></button>
            <button className="cliente" ><Link to="/Mesero">Mesero</Link></button>
          </main>
          {/* <nav>
            <Link to="/about">About</Link>
          </nav> */}
        </>
      );
      
    }
    export default Home



// import { createContext, useState } from "react";
// import React from 'react';

// export const  UserContent = createContext();

// export const UseStates = ({children}) =>{
//     const [cart, setCart] = useState([]);

//     return (
//         <UserContent.Provider value = {{cart,setCart}}>{children}</UserContent.Provider>
//         )
// };
// function Breakfast() {

//     const {cart,setCart} = useContext(UserContent);
//     const addcart = (element) =>{
//         if(cart.some(item=> item.id===element.id)){
//          const arrCard = cart.map((item) =>
//          item.id === element.id ? { ...item, cant: item.cant + 1 } : item
//        );
//        setCart(arrCard);
       
     
//         }else{
//          setCart([...cart,{ id: element.id, name: element.name, price: element.price, cant:1 }]
//              );
//         }
            
//              }
