import React, {useContext} from "react";
import { MenuContext } from "../../context/Context";



// const Nav = (props) => {
//     return (
//         <h1>hello, {props.save}</h1>
//     )
// }
// export default Nav;



const Nav = ({product}) => {

    
    const Context = useContext(MenuContext);


    return (
    <section className="menu">
         {product.map((item) => (
           <div key={item.id}>
             <button
               className="menu.active"
               onClick={() => Context.add(item) }>
               <p className="namecarta" >{item.name} {item.price}</p>
             </button>
             </div>
            ))}
    </section>
         
    )
    
    }
    
    export default Nav
