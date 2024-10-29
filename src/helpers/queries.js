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

// CREAR HABITACIONES 
  export const crearHabitacionesAPI = async(HabitacionNueva)=>{
    try {
        const respuesta = await fetch(URLProductos,{
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                "x-token": JSON.parse(sessionStorage.getItem('ChillHotel')).token
            },
            body: JSON.stringify(HabitacionNueva)
        })
        return respuesta
    } catch (error) {
        console.error(error)
        return false;
    }
}

//PUT o PATCH editar
export const editarHabitacionesAPI = async(HabitacionEditada, id)=>{
  try {
      const respuesta = await fetch(URLProductos+'/'+id,{
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