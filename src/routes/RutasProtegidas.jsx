import { Navigate } from "react-router-dom";
import { userAdmin } from "../helpers/queries";
import Swal from "sweetalert2";


const RutasProtegidas = ({children}) => {
const usuario = JSON.parse(sessionStorage.getItem('ChillHotel')) || null;
if(usuario.email !== userAdmin.email){
 return <Navigate to={'/'}> {Swal.fire({
    title: "Ingreso Restringido",
    text: `Necesitas ser administrador para ingresar a esta dirección`,
    icon: "error",
  })} </Navigate>
}else{
    return children
}
};

export default RutasProtegidas;