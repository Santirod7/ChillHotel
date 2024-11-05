import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { borrarHabitacionesAPI, leerHabitacionesAPI } from "../../../helpers/queries";
import Swal from "sweetalert2";




 const ItemHabitaciones = ({habitacion,fila,setHabitaciones}) =>{

    const borrarHabitacion = async()=>{
        
        const respuesta = await borrarHabitacionesAPI(habitacion._id)
        if(respuesta.status === 200){
          Swal.fire({
            title: "Habitacion eliminada",
            text: `La Habitacion ${habitacion.tipoHabitacion}, fue eliminada correctamente`,
            icon: "success",
          });
         
          const respuestaHabitacion = await leerHabitacionesAPI();
          if(respuestaHabitacion.status === 200){
            const habitacionesActualizadas = await respuestaHabitacion.json()
            setHabitaciones(habitacionesActualizadas)
          }
        }else{
          Swal.fire({
            title: "Ocurrio un error",
            text: `La habitacion ${habitacion.tipoHabitacion} no pudo ser eliminada, intente esta operación en unos minutos.`,
            icon: "error",
          });
        }
      }
    

      return (
        <tr>
        <td className="text-center">{fila}</td>
        <td>{habitacion.numHabitacion}</td>
        <td>{habitacion.tipoHabitacion}</td>
        <td>{habitacion.disponibilidad}</td>
        <td className="text-end">{habitacion.precio}</td>
        <td className="text-center">
          <img
            src={habitacion.imagen}
            className="img-thumbnail"
            alt={habitacion.tipoHabitacion}
          ></img>
        </td>
        <td className="text-center">
          <Link className="btn btn-warning me-lg-2" to={`/administrador/editar/${habitacion._id}`}>
            <i className="bi bi-pencil-square"></i>
          </Link>
          <Button variant="danger" onClick={borrarHabitacion}>
            <i className="bi bi-trash"></i>
          </Button>
        </td>
      </tr>
      
    );





 }


 export default ItemHabitaciones;