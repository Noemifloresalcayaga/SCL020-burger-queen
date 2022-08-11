import React, { useContext } from 'react';
import { MenuContext } from '../../context/Context.js';

const Total = () => {
    const Context = useContext(MenuContext);
    return(
        <div className="lol">
         <p>TOTAL: ${Context.total}</p></div>
    )
}

export default Total;