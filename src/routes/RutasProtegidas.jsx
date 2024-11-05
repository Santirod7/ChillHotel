import { Navigate } from "react-router-dom";
import { userAdmin } from "../helpers/queries";

const RutasProtegidas = ({children}) => {
const admin = JSON.parse(sessionStorage.getItem('ChillHotel')) || null;
if(admin !== userAdmin.email){
 return <Navigate to={'/administrador/'}></Navigate>
}else{
    return children
}
};

export default RutasProtegidas;