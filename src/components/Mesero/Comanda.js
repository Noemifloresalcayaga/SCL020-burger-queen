import React, {useContext} from "react";
import { MenuContext } from "../../context/Context";

const Comanda = () => { 
    const Context = useContext(MenuContext);

    return (
    <>
        
      <section className="div4 comanda">
        {Context.product.map((item) => (
          <div key={item.id} >
            <div className="poto">
              <p>{item.name}
              {' '}
              ${item.price}</p>

              
                <button
                  className="btnes"
                  onClick={() => Context.rest(item)}
                >
                  {' '}
                  -
                </button>
                <p> { item.quant } </p>
                <button
                  className="btnes"
                  onClick={() => Context.add(item)}
                >
                  {' '}
                  +
                </button>
                <button
                  className="btnes"
                  onClick={() => Context.erase(item.id)}
                >
                  {' '}
                  x
                </button>
              </div>
            </div>
          
          
        ))}
        <p>Pedido de: {Context.save}</p>
        <button className="enviar">Enviar</button>
      </section>
      
    
  

    </>

)
};

export default Comanda;