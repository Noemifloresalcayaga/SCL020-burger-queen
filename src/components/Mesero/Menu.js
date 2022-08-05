


export function MenuPostres ({postre, handleSelect}) {
  const handleClick = () => {
   
      handleSelect(postre.id)
  }
  
  return (  <ul onClick={handleClick} >{postre.name}</ul> );
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
