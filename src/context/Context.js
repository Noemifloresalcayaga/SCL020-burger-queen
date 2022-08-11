import React, {useState} from "react";
const MenuContext = React.createContext('default');


const MenuProvider = ({children}) => {
const [product, setProduct] = useState([]);


const [save, setSave] = useState("");
  
  const handleSubmit = (ev) => {ev.preventDefault();
      setSave(ev.target.save.value);
      }



const add = (e) => {

    //se crea variable que representa un producto ya existente en el componente orden
    const productExist = product.find((item) => item.id === e.id); 
    if (productExist) {
      setProduct(
        product.map((item) =>
        // si ya existe un producto   verifico que este producto sea igual al elemento nuevo que quiero agregar
          item.id === e.id
          // si es verdadero se crea un nuevo array con el producto existente que contiene la propiedad quant
            ? { ...productExist, quant: productExist.quant + 1 }
            : item
        )
      );
    } else {  // si no existe el producto  se agrega y defino que su cantidad es igual a 1
      setProduct([...product, { ...e, quant: 1 }]);
    }
  };

  const erase = (id) => {
    setProduct(product.filter((item) => item.id !== id));
}

const rest  = (e) => {//por que aqui e y en command le doy item de argumento?
  const productExist = product.find((item) => item.id === e.id);
  // si la cantidad de producto existente es igual a 1
  if (productExist.quant === 1) {
    // si existe un producto se elimina del carro.Devolviendo todos los otros productos q no son ese
    setProduct(product.filter((item) => item.id !== e.id));
  } else{ //en caso de que exista más de 1 restale 1
    setProduct(
      product.map((item) =>
        item.id === e.id
          ? { ...productExist, quant: productExist.quant - 1 }
          : item
      )
    );
  }
};
  // total del pedido arr.reduce(callback(acumulador, valorActual[, índice[, array]])[, valorInicial])
  let priceInitial = 0;
  const total = product.reduce((total, item) => total + item.price * item.quant, priceInitial);

  const props ={
    
    save,
    setSave,
    handleSubmit,
    product,
    setProduct,
    add,
    rest,
    erase,
    total
  }
  

return <MenuContext.Provider value={props}>{children}</MenuContext.Provider>

}

export {MenuContext, MenuProvider}
//menu add
//export const OrderContext = createContext();


