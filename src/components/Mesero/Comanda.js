import React, {useContext} from "react";
import { MenuContext } from "../../context/Context";

const Comanda = () => { 
    const Context = useContext(MenuContext);

    return (
    <>
        <section className="lol">
      <section className="lol">
        <div className="lol">
          {/* <p>Cliente:</p>
          <p>{Context.name}</p>
          <p>Mesa:</p>
          <p>{Context.table}</p> */}
        </div>
      </section>
      <section className="lol">
        {Context.product.map((item) => (
          <div key={item.id} className="lol">
            <div className="lol">
              <p className="lol">{item.name}</p>
              <p> {item.price}</p>

              <div className="lol">
                <button
                  className="lol"
                  onClick={(e) => Context.rest(item)}
                >
                  {' '}
                  -
                </button>
                <p className="lol">{item.quant}</p>
                <button
                  className="lol"
                  onClick={() => Context.add(item)}
                >
                  {' '}
                  +
                </button>
                <button
                  className="lol"
                  onClick={() => Context.erase(item.id)}
                >
                  {' '}
                  x
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  <p>Pedido de: {Context.save}</p>

    </>

)
};

export default Comanda;