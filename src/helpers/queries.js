export const URLHabitacion = import.meta.env.VITE_API_HABITACION;

export const nuevaHabitacionAPI = async(habitacionNueva)=>{
    try {
        const respuesta = await fetch(URLHabitacion,{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(habitacionNueva)
        })
        return respuesta
    } catch (error) {
        console.error(error)
        return false;
    }
}
