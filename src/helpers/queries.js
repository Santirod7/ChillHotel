 export const URLHabitaciones = import.meta.env.VITE_API_HABITACIONES;
// const URL_Usuario = import.meta.env.VITE_API_USUARIO;

// CREAR HABITACIONES 
export const crearHabitacionesAPI = async(HabitacionNueva)=>{
  try {
      const respuesta = await fetch(URLHabitaciones,{
          method: "POST",
          headers: {
              "Content-Type":"application/json",
              // "x-token": JSON.parse(sessionStorage.getItem('ChillHotel')).token
          },
          body: JSON.stringify(HabitacionNueva)
      })
      return respuesta
  } catch (error) {
      console.error(error)
      return false;
  }
}

//GET
export const leerHabitacionesAPI = async()=>{
  try {
      const respuesta = await fetch(URLHabitaciones);
      return respuesta;
  } catch (error) {
      console.error(error)
      return false;
  }
  }

  //GET que devuelve una Habitacion
export const obtenerHabitacionesAPI = async(id)=>{
  try {
      const respuesta = await fetch(URLHabitaciones+'/'+id);
      return respuesta;
  } catch (error) {
      console.error(error)
      return false;
  }
  }

//PUT o PATCH editar
export const editarHabitacionesAPI = async(HabitacionEditada, id)=>{
  try {
      const respuesta = await fetch(URLHabitaciones+'/'+id,{
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

 //DELETE
 export const borrarHabitacionesAPI = async(id)=>{
  try {
      const respuesta = await fetch(URLHabitaciones+'/'+id,{
          method: "DELETE"
      })
      return respuesta
  } catch (error) {
      console.error(error)
      return false;
  }
}



const userAdmin = {
  email: "admin@ChillHotel.com",
  password: "ChillHotel2024",
};

export const login = (usuario) => {
    
  
  if (
      usuario.email === userAdmin.email &&
      usuario.password === userAdmin.password
    ) {
      sessionStorage.setItem("ChillHotel", JSON.stringify(usuario.email));
      return true;
    } else {
      return false;
    }
  };

