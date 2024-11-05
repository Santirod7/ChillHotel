export const URL = import.meta.env.VITE_API;

export const crearHabitacionesAPI = async(HabitacionNueva)=>{
  try {
      const respuesta = await fetch(URL+'/habitaciones/',{
          method: "POST",
          headers: {
              "Content-Type":"application/json",
          },
          body: JSON.stringify(HabitacionNueva)
      })
      return respuesta
  } catch (error) {
      console.error(error)
      return false;
  }
}

export const leerHabitacionesAPI = async()=>{
  try {
      const respuesta = await fetch(URL+'/habitaciones/');
      return respuesta;
  } catch (error) {
      console.error(error)
      return false;
  }
  }

export const obtenerHabitacionesAPI = async(id)=>{
  try {
      const respuesta = await fetch(URL+'/habitaciones/'+id);
      return respuesta;
  } catch (error) {
      console.error(error)
      return false;
  }
  }


export const editarHabitacionesAPI = async(HabitacionEditada, id)=>{
  try {
      const respuesta = await fetch(URL+'/habitaciones/'+id,{
          method: "PUT",
          headers: {
              "Content-Type":"application/json"
          },
          body: JSON.stringify(HabitacionEditada)
      })
      return respuesta
  } catch (error) {
      console.error(error)
      return false;
  }
}


 export const borrarHabitacionesAPI = async(id)=>{
  try {
      const respuesta = await fetch(URL+'/habitaciones/'+id,{
          method: "DELETE"
      })
      return respuesta
  } catch (error) {
      console.error(error)
      return false;
  }
}


export const nuevoUsuario = async(usuario)=>{
    try {
        const respuesta = await fetch(URL+'/usuario',{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(usuario)
        })
        sessionStorage.setItem("ChillHotel", JSON.stringify(usuario.email));
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

  export const userAdmin = {
    email: "admin@ChillHotel.com",
    password: "ChillHotel2024",
  };
  
export const login = (usuario, usuarioRegistrado) => {
  if (
      usuario.email === userAdmin.email &&
      usuario.password === userAdmin.password
   || usuarioRegistrado.filter((usuarioRegistrado)=>usuarioRegistrado.email === usuario.email ) && usuarioRegistrado.filter((usuarioRegistrado)=>usuarioRegistrado.email === usuario.email)) {
      sessionStorage.setItem("ChillHotel", JSON.stringify(usuario.email));
      return true;
    } else {
      return false;
    }
  };

