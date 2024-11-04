export const URL = import.meta.env.VITE_API;

export const nuevoUsuario = async(usuario)=>{
    try {
        const respuesta = await fetch(URL+'/usuario',{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(usuario)
        })
        return respuesta
    } catch (error) {
        console.log(error)
        return false;
    }
}
export const leerUsuario = async()=>{
  try {
      const respuesta = await fetch(URL+'/usuario');
      return respuesta;
  } catch (error) {
      console.error(error)
      return false;
  }
  }

  export const adjuntoUsuario = async(id)=>{
  try {
      const respuesta = await fetch(URL+'/usuario/'+id);
      return respuesta;
  } catch (error) {
      console.error(error)
      return false;
  }
  }
  
  export const editarUsuario = async(usuarioEditado, id)=>{
      try {
          const respuesta = await fetch(URL+'/usuario/'+id,{
              method: "PUT",
              headers: {
                  "Content-Type":"application/json"
              },
              body: JSON.stringify(usuarioEditado)
          })
          return respuesta
      } catch (error) {
          console.error(error)
          return false;
      }
  }
  //DELETE
  export const borrarUsuario = async(id)=>{
      try {
          const respuesta = await fetch(URL+'/'+id,{
              method: "DELETE"
          })
          return respuesta
      } catch (error) {
          console.error(error)
          return false;
      }
  }
export const login = (usuario) => {
    if (
      usuario.email === userAdmin.email &&
      usuario.password === userAdmin.password
    ) {
      sessionStorage.setItem("Chill Hotel", JSON.stringify(usuario.email));
      return true;
    } else {
      return false;
    }
  };