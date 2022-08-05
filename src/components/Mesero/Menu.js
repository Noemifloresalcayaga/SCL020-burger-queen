


export function MenuPostres ({postre, handleSelect}) {
  const handleClick = () => {
   
      handleSelect(postre.id)
      
  }
  
  return (  <li onClick={handleClick} >{postre.name}</li> );
}

export function MenuEntradas ({entrada, handleSelect}) {
  const handleClick = () => {
   
      handleSelect(entrada.id)
      
  }
  
  return (  <li onClick={handleClick} >{entrada.name}</li> );
}



export function MenuHamburguesas ({hamburguesa, handleSelect}) {
  const handleClick = () => {
   
      handleSelect(hamburguesa.id)
      
  }
  
  return (  <li onClick={handleClick} >{hamburguesa.name}</li> );
}

export function MenuAcompañamientos ({acompañamiento, handleSelect}) {
  const handleClick = () => {
   
      handleSelect(acompañamiento.id)
      
  }
  
  return (  <li onClick={handleClick} >{acompañamiento.name}</li> );
}
// export function MenuEntradas () {

//   const listItems = entradas.map((entrada) => (
   
//    <li key={entrada.id}>{entrada.name}</li>
//  ));
 
//  return (  <ul>{listItems}</ul> );
// }
// export function MenuHamburguesas () {

//   const listItems = hamburguesas.map((hamburguesa) => (
   
//    <li key={hamburguesa.id}>{hamburguesa.name}</li>
//  ));
 
//  return (  <ul>{listItems}</ul> );
// }

// export function Acompañamientos () {

//   const listItems = acompañamientos.map((acompañamiento) => (
   
//    <li key={acompañamiento.id}>{acompañamiento.name}</li>
//  ));
 
//  return (  <ul>{listItems}</ul> );
// }
