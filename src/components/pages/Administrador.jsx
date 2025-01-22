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
          <section className="container-fluid">
    <div className="row">
        <div className="col-sm-auto bg-light sticky-top">
            <div className="d-flex flex-sm-column flex-row flex-nowrap bg-light align-items-center sticky-top">
                <Link className="hover-admin d-block p-3 link-dark text-decoration-none" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
                    <i className="bi-house-lock-fill fs-3"></i>
                </Link>
                <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto text-center justify-content-between w-100 align-items-center">
                    <li className="nav-item hover-admin">
                        <Link className=" nav-link p-3" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                            <i className="bi-person-lines-fill fs-3"></i>
                        </Link>
                    </li>
                    <li className="hover-admin">
                        <Link className="nav-link p-3" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
                            <i className="bi-building-fill-gear fs-3"></i>
                        </Link>
                    </li>
                    <li className="hover-admin">
                        <Link className="nav-link p-3" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Orders">
                            <i className="bi-bar-chart-fill fs-3"></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className="col-sm p-3 min-vh-100">
        <div className="border border-top-0 border-start-0 border-end-0 container d-flex justify-content-between align-items-center my-3">
          <h1 className="display-4 ">Habitaciones disponibles</h1>
          <Link className="btn btn-primary" to={"/administrador/crear"} >
            <i className="bi bi-database-fill-add"></i>
          </Link>
        </div>
      
        <Table responsive striped bordered hover className="border container border-5 border-dark-subtle">
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
              habitaciones.map((habitacion,posicion)=> <ItemHabitaciones key={habitacion._id} habitacion={habitacion} fila={posicion+1} setHabitaciones={setHabitaciones}></ItemHabitaciones>)
            
            }
          </tbody>
        </Table>     
        </div>
    </div>
      </section>
    );
};

export default Administrador;