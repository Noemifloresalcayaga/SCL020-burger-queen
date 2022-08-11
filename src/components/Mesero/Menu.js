import React, {useState, useContext} from "react";
import { MenuContext } from "../../context/Context";
import data from "../../Data/data.json"

const Menu = () => {

  //se llama a la data
  const cartData = data.menu;
  const [product, setProduct] = useState([]);
  //option es un item.
  const filterMenu = (option) =>{
   
    setProduct(cartData.filter((e) => e.type === option))
    
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
      </div>   
      <div className="menu-postres">
        <button
            className="opciones"
            onClick={() => filterMenu('acompañamientos')}>Acompañamientos</button>
      </div>
      <div className="menu-postres">
        <button
            className="opciones"
            onClick={() => filterMenu('hamburguesas')}>Hamburguesas</button>
      </div>
      <div className="menu-postres">
        <button
            className="opciones"
            onClick={() => filterMenu('entrada')}>Entradas</button>
      </div>   
     </section>

      <section className="menu">
        {product.map((item) => (
          <div key={item.id}>
            <button
              className="menu.active"
              onClick={() => Context.add(item) }>
              <p className="namecarta" >{item.name} {item.price}</p>
            </button>
            {/* <li onClick={handleClick} >{postre.name}</li>  */}
          </div>
        ))}
    
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
