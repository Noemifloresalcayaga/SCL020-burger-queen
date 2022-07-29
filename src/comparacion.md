//se guarda un usuario (user) y una funcion que permita modificar al usuario
//lo guardamos a través de una llamada al useState ( = useState () ), en este caso lo llama null
//porque está vacío, pero se pueden poner {} [] y numeros segun su uso.
//se pone userContext envolviendo todo el div para que fluyan y cojan los datos del componente.
//también se le agrega el .Provider porque userContext le dice a Provider que le va a pasar 
//datos para que estén disponibles para cualquier componente que se encuentre dentro de <userContext.Provider>
//a esto se le pasa un valor (value) en donde se inserta la info que se le desea enttregar 
//al userContext para que esté disponible para todo todo ej: chef, mesero,etc. 
//Para probar se creó una constante cambiaLogin la cual va a tener una condicion
//segun la existencia del usuario. 
  // const [user, setUser] = useState(null)

  // const cambiaLogin = () => {
  //   if(user){
  //     setUser(null);
  //   }
  //   else{
  //     setUser({
  //       name: "Noe y cielo",
  //       mail: "cielo@gmail.com"
  //     });
  //   }
  // }