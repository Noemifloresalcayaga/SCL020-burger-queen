import { useState, useRef } from "react";
import style from "./order.css"


const Menu = () => {

  const [menuId,setMenuId] = useState(0);
  const dropdownRef = useRef(null);
  const onClick = (id) => {
    if(menuId == id) {
      setMenuId(0)
    } else {
      setMenuId(id)
    }
    return
} 
};

  export default Menu;
