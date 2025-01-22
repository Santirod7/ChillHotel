import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { borrarUsuario, leerUsuario } from "../../../helpers/queries";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";


const Perfil = ({setUsuarioLogueado}) => {
  const [Usuario, setUsuario] = useState([])
  const navegacion = useNavigate();

  useEffect(() => {
    obtenerUsuario();
  }, []);
  const idUsuario = JSON.parse(sessionStorage.getItem("ChillHotel"));

  const eliminarUsuario = async(id)=>{       
    const respuesta = await borrarUsuario(id)
    if(respuesta.status === 200){
      Swal.fire({
        title: "Cuenta eliminada",
        text: `La cuenta fue eliminada correctamente`,
        icon: "success",
      })}
      }

  const obtenerUsuario = async () => {
        const respuesta = await leerUsuario();
   if(respuesta.status === 200){
    const datos = await respuesta.json();
    const usuarioActivo = datos.find((u) => u._id === idUsuario.id)
    if(usuarioActivo){
      setUsuario(usuarioActivo);
    }
   }else{
    Swal.fire({
      title: "Ocurrio un error",
      text: `No se pudo obtener los datos del usuario, intente esta operación en unos minutos.`,
      icon: "error"
    });
   }
  }
const alertadeSwal =()=>{
Swal.fire({
  toast: true,
  showCancelButton: true,
  confirmButtonText: "Borrar",
  title: "¿Estás seguro?",
      text: `Si confirmas, la cuenta se borrara permanentemente`,
      icon: "warning"
}).then((result) => {
  if (result.isConfirmed) {
    sessionStorage.removeItem("ChillHotel")
    eliminarUsuario(idUsuario.id)
    setUsuarioLogueado("")
    navegacion('/')
  } else if (result.isDenied) {
    Swal.fire("Lo petición fue rechazada", "", "info");
  }
})
  };


    return (
        <section className='container-fluid min-vh-100 py-4 img-fondo-perfil'>
            <div>
<div className='row w-100 justify-content-center'>
        <div className='col-10 border align-content-center border-2 border-light bg-primary '>
          <div>
            <div className='row justify-content-center'> 
              <div className="col-3 bg-light align-middle mt-3 py-2 px-0">
                <div className="d-flex justify-content-center">
              <img className='imagen-usuario' src="https://thumbs.dreamstime.com/b/perfil-de-usuario-vectorial-avatar-predeterminado-179376714.jpg" alt="" />
                </div>
              </div>
            <h3 className='mt-3 text-center mb-4'>{Usuario.nombreUsuario}</h3>
            </div>
        </div>
          </div>
        <div className='col-10 border border-2 border-light bg-secondary '>
          <div className="row">
          <div className="col-12 col-lg-8 pb-2 align-content-center">
       <h5 className="mt-3"><b>Email: </b>{Usuario.email} </h5>
       <h5 className="mt-3"><b>Nombre: </b>{Usuario.nombre} </h5>
       <h5 className="mt-3"><b>Apellido: </b>{Usuario.apellido} </h5>
       <h5 className="mt-3"><b>Nacionalidad: </b>{Usuario.nacionalidad} </h5>
          </div>
          <div className="col-12 col-lg-4 bg-warning py-2">
            <div className="row justify-content-between h-100">
              <div  className="col-12 h-50">
               <div className="row h-100">
                  <div className="col-6 d-flex justify-content-start">
                    <div className="align-content-center w-75">
                    <Button variant='success' className="btn-perfil">
                      <div className="d-flex justify-content-center"><i className="bi bi-bag-check fs-3"></i>
                      </div>
<h6 className="text-center mt-2">Reservas</h6>
                    </Button>
                    </div>
                  </div>
                  <div className="col-6 d-flex justify-content-start">
                    <div className="align-content-center w-75">
                  <Button variant='info' className="btn-perfil">
                      <div className="d-flex justify-content-center"><i className="bi bi-gear fs-3"></i>
                      </div>
<h6 className="text-center">Configuración</h6>
                    </Button>
                    </div>
                  </div>
                </div>
              </div>
            <div className="col-12 h-50">
            <div className="row h-100">
            <div className="col-6 d-flex justify-content-start">
              <div className="align-content-center w-75">
            <Link to={"editar/"+Usuario._id} className="btn btn-light btn-perfil">
                      <div className="d-flex justify-content-center"><i className="bi bi-lock-fill fs-3"></i>
                      </div>
<h6 className="text-center mt-2">Privacidad</h6>
                    </Link>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-start">
              <div className="align-content-center  w-75">
            <Button onClick={alertadeSwal} variant='danger' className="btn-perfil">
                      <div className="d-flex justify-content-center"><i className="bi bi-trash fs-3"></i>
                      </div>
<h6 className="text-center mt-2">Borrar cuenta</h6>
                    </Button>
              </div>
            </div>
            </div>
            </div>
            </div>
          </div>
          </div>
        </div>
</div>
<div className="container mt-5">
    <img className="w-100 public-perfil" src="https://images.pexels.com/photos/163792/model-planes-airplanes-miniatur-wunderland-hamburg-163792.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
</div>
            </div>
        </section>
    );
};

export default Perfil;