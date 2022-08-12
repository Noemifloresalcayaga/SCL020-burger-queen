import React, {useState, useContext} from "react";
import { MenuContext } from "../../context/Context";
import data from "../../Data/data.json"
import Nav from "./Nav";

const Menu = () => {

  //se llama a la data
  const cartData = data.menu;
  const [product, setProduct] = useState([]);
  const [optionMenu, setOptionMenu] = useState("")
  //option es un item.
  const filterMenu = (option) =>{
   
    setProduct(cartData.filter((e) => e.type === option))
    if (optionMenu == option){
      setOptionMenu('')
    }else {
      setOptionMenu(option)
    }

    
  }

  
  const Context = useContext(MenuContext);


  return(
    <>

    <section  className="div3 items grid">
        {/* <button onClick={()=> onClick(1)} className="opciones"> */}
      <div className="menu-postres">
        <button
            className="opciones"
            onClick={() => filterMenu('postre')}>Postres</button>
           
        { optionMenu == 'postre' && <Nav product = {product} />}
      </div>   
      <div className="menu-postres">
        <button
            className="opciones"
            onClick={() => filterMenu('acompañamientos')}>Acompañamientos</button>
        
        { optionMenu == 'acompañamientos' && <Nav product = {product} />}   
      </div>
      <div className="menu-postres">
        <button
            className="opciones"
            onClick={() => filterMenu('hamburguesas')}>Hamburguesas</button>
        
        { optionMenu == 'hamburguesas' && <Nav product = {product} />}
      </div>
      <div className="menu-postres">
        <button
            className="opciones"
            onClick={() => filterMenu('entrada')}>Entradas</button>
            
        { optionMenu == 'entrada' && <Nav product = {product} />}
            
      </div>   
     </section>

     
      </>
  )
}

export default Menu






































// export function MenuPostres ({postre, handleSelect}) {
//   const handleClick = () => {
   
//       handleSelect(postre.id)
      
//   }
  
//   return (  <li onClick={handleClick} >{postre.name}</li> );
// }

// export function MenuEntradas ({entrada, handleSelect}) {
//   const handleClick = () => {
   
//       handleSelect(entrada.id)
      
//   }
  
//   return (  <li onClick={handleClick} >{entrada.name}</li> );
// }



// export function MenuHamburguesas ({hamburguesa, handleSelect}) {
//   const handleClick = () => {
   
//       handleSelect(hamburguesa.id)
      
//   }
  
//   return (  <li onClick={handleClick} >{hamburguesa.name}</li> );
// }

// export function MenuAcompañamientos ({acompañamiento, handleSelect}) {
//   const handleClick = () => {
   
//       handleSelect(acompañamiento.id)
      
//   }
  
//   return (  <li onClick={handleClick} >{acompañamiento.name}</li> );
// }
