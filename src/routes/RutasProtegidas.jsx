import { Navigate } from "react-router-dom";
import { userAdmin } from "../helpers/queries";

const RutasProtegidas = ({children}) => {
const usuario = JSON.parse(sessionStorage.getItem('ChillHotel')) || null;
if(usuario !== userAdmin.email){
 return <Navigate to={'/'}></Navigate>
}else{
    return children
}
};

export default RutasProtegidas;