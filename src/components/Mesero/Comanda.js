import React, {useContext} from "react";
import { MenuContext } from "../../context/Context";

const Comanda = () => { 
    const Context = useContext(MenuContext);

    return (
    <>
        
      <section className="comanda">
        {Context.product.map((item) => (
          <div key={item.id} className="lol">
            <div className="comanda">
              <p className="lol">{item.name}</p>
              <p> {item.price}</p>

              <div className="lol">
                <button
                  className="btnes"
                  onClick={(e) => Context.rest(item)}
                >
                  {' '}
                  -
                </button>
                <p className="lol">{item.quant}</p>
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
                <p>Pedido de: {Context.save}</p>
                <button className="enviar">Enviar</button>
              </div>
            </div>
          </div>
        ))}
        
      </section>
    
  

    </>

)
};

export default Comanda;