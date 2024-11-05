import { Button,Table } from "react-bootstrap";
import ItemHabitaciones from "./habitaciones/ItemHabitaciones";
import { useEffect, useState } from "react";
import { leerHabitacionesAPI } from "../../helpers/queries";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Administrador = () => {

    const [habitaciones,setHabitaciones] = useState([])


    useEffect(()=>{
    recibirHabitaciones();
    },[])
    
    const recibirHabitaciones= async ()=>{
    
      const respuesta = await leerHabitacionesAPI();
      if(respuesta.status===200){
    
      const datos = await respuesta.json();
      setHabitaciones(datos);
      }else{
    
        Swal.fire({
          title:"ocurrio un error ",
           text:`no se pudo obtener el listado de Habitaciones,intente en unos minutos..`,
           icon:"error"
          });
    
      }
    
    
    }

    return (
        
        <section className="container ">
        <div className="d-flex justify-content-between align-items-center mt-5">
          <h1 className="display-4 ">Habitaciones disponibles</h1>
          <Link className="btn btn-primary" to={"/administrador/crear"} >
            <i className="bi bi-database-fill-add"></i>
          </Link>
        </div>
        <hr />
        <Table responsive striped bordered hover className="border border-5 border-dark-subtle">
          <thead>
            <tr className="text-center">
              <th>Cod</th>
              <th>Num Habitacion</th>
              <th>Tipo de Habitacion</th>
              <th>Disponibilidad</th>
              <th>Precio</th>
              <th>Imagen</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {
              habitaciones.map((habitacion,posicion)=> <ItemHabitaciones key={habitacion.id} habitacion={habitacion} fila={posicion+1} setHabitaciones={setHabitaciones}></ItemHabitaciones>)
            
            }
          </tbody>
        </Table>
      </section>
    );
};

export default Administrador;