import Postres from "./data"
//meter la data y crear funciones para llamarla
export default function MenuPostres() {

const postre = Postres.map(product => 
    <li
      key={product.id}
    >
      {product.name}
    </li>
  );
  return 
    <ul>{postre}</ul>
};    

