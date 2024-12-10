import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";


const RutaProtegidaUsuario = ({children}) => {
const usuario = JSON.parse(sessionStorage.getItem('ChillHotel')) || null;
if(!usuario){
 return <Navigate to={'/'}> {Swal.fire({
    title: "Ingreso Restringido",
    text: `Necesitas haberte registrado previamente para ingresar a esta dirección`,
    icon: "error",
  })} </Navigate>
}else{
    return children
}
};

export default RutaProtegidaUsuario;