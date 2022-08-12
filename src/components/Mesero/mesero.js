import React, {useState, useRef,useContext} from "react";
import style from "./order.css"
import Menu from "./Menu";
import Comanda from "./Comanda";
import Total from "./Total";
import { MenuContext } from "../../context/Context";
 


function Mesero() {
  
  const Context = useContext(MenuContext)

  return (
  <>
  <div className="parent"> 
   <form className="div2 nombre" onSubmit={(ev)=> Context.handleSubmit(ev)}>
        <input className="save" type="text" name="save" autoComplete="off" placeholder="Ingresa nombre"></input>
        <button className="cliente" type="submit">Ingresar cliente</button>
        <p>Pedido de: {Context.save}</p>
  </form>
    <section>
    <Menu />
  </section>
  <section>  
    <Comanda />
  </section>
  <section className="comanda">
    <Total />  
  </section>
  </div>  
  </>
      )
}
  //Funcion menu desplegable
  //menuid i set menuid
  // const [postresMesero, setPostresMesero]  = useState(postres);
  // const [entradasMesero, setEntradasMesero]  = useState(entradas);
  // const [hamburguesasMesero, setHamburguesasMesero]  = useState(hamburguesas);
  // const [acompañamientosMesero, setAcompañamientosMesero]  = useState(acompañamientos);


  // const [menuId,setMenuId] = useState(0);
  // const dropdownRef = useRef(null);
  // const onClick = (id) => {
  //   if(menuId == id) {
  //     setMenuId(0)
  //   } else {
  //     setMenuId(id)
  //   }
  // };

  // function handleSelect (id) {
   
  //   const newPostres = [...postresMesero]
   
  //   const newPostre = newPostres.find((postre)=> id == postre.id)
  //   newPostre.selected = true
  //   //que sume
  //   setPostresMesero(newPostres)
  // }

  // function handleSelected (id){  
  //   const newEntradas = [...entradasMesero]
   
  //   const newEntrada = newEntradas.find((entrada)=> id == entrada.id)
  //   newEntrada.selected = true
  //   setEntradasMesero(newEntradas)
  // }

  // function handleSelecte (id){  
  //   const newHamburguesas = [...hamburguesasMesero]
   
  //   const newHamburguesa = newHamburguesas.find((hamburguesa)=> id == hamburguesa.id)
  //   newHamburguesa.selected = true
  //   setHamburguesasMesero(newHamburguesas)
  // }

  // function handleSel (id){  
  //   const newAcompañamientos = [...acompañamientosMesero]
   
  //   const newAcompañamiento = newAcompañamientos.find((acompañamiento)=> id == acompañamiento.id)
  //   newAcompañamiento.selected = true
  //   setAcompañamientosMesero(newAcompañamientos)
  // }
  //map
  //   return (
  //   <>
  //     <div className="parent">
  //       <h2 className="div1 titulo">Nuestros pedidos hoy</h2>
  //       <Nombre/>
  //       <div className="div3 items grid">
  //     <div className="menu-postres">
  //       <button onClick={()=> onClick(1)} className="opciones">
  //         <span className="postres">Postres</span>
  //       </button>
  //       <nav
  //         ref={style.dropdownRef}
  //         className={`menu ${menuId == 1 ? "active" : "inactive"}`}>
          
  //         {postresMesero.map((postre) => (
            
  //           <MenuPostres postre = {postre} handleSelect = {handleSelect}/>
  //         ) )}
          
  //       </nav>
  //     </div>
  //     <div className="menu-entradas">
  //       <button onClick={()=> onClick(2)} className="opciones">
  //         <span className="postres">Entradas</span>
  //       </button>
  //       <nav
  //         ref={style.dropdownRef}
  //         className={`menu ${menuId == 2 ? "active" : "inactive"}`}>
                    
  //         {entradasMesero.map((entradas) => (
            
  //           <MenuEntradas entrada = {entradas} handleSelect = {handleSelected}/>
  //         ) )}
          
  //       </nav>
  //     </div>
  //     <div className="menu-hamburguesas">
  //       <button  onClick={()=> onClick(3)} className="opciones">
  //         <span className="postres">Hamburguesas</span>
  //       </button>
  //       <nav
  //         ref={style.dropdownRef}
  //         className={`menu ${menuId == 3 ?"active" : "inactive"}`}
  //       >
                  
  //       {hamburguesasMesero.map((hamburguesas) => (
            
  //           <MenuHamburguesas hamburguesa = {hamburguesas} handleSelect = {handleSelecte}/>
  //         ) )}
         
  //       </nav>
  //     </div>
  //     <div className="menu-acomp">
  //       <button onClick={()=> onClick(4)} className="opciones">
  //         <span className="postres">Acompañamientos</span>
  //       </button>
  //       <nav
  //         ref={style.dropdownRef}
  //         className={`menu ${menuId == 4 ? "active" : "inactive"}`}
  //       >
  //       {acompañamientosMesero.map((acompañamientos) => (
            
  //           <MenuAcompañamientos acompañamiento = {acompañamientos} handleSelect = {handleSel}/>
  //         ) )}  
  //       </nav>
        
  //     </div>
  //   </div>
  //     <footer className="div4 footer">
  //     <ul className="lista">
  //     <p className="total">Items:</p>
  //     {postresMesero.map((postre) => (postre.selected === true ? 
  //     <>
  //     <div>{postre.name}</div>
  //     <div>{         postre.price}</div> </> : null
  //     ))}
  //      {entradasMesero.map((entrada) => (entrada.selected === true ? 
  //       <>
  //       <div>{entrada.name}</div>
  //       <div>{entrada.price}</div> 
  //       <button>+</button></> : null
  //     ))}
  //       {hamburguesasMesero.map((hamburguesa) => (hamburguesa.selected === true ? 
  //       <>
  //       <div>{hamburguesa.name}</div>
  //       <div>{hamburguesa.price}</div> </> : null
  //     ))}
  //       {acompañamientosMesero.map((acompañamiento) => (acompañamiento.selected === true ? 
  //       <>
  //       <div>{acompañamiento.name}</div>
  //       <div>{acompañamiento.price}</div> </> : null
  //     ))}
  //     </ul>
  //     <p className="despliegue">Total: </p>
  //     <button  className="enviar" id="postres">Enviar</button>
  //     </footer>
  //     </div>


  
  //   </>
  //  )}

   export default Mesero