import { Routes, Route } from "react-router-dom";
import Administrador from "../components/pages/Administrador";

const RutasProtegidas = ({children}) => {
const admin = JSON.parse(sessionStorage.getItem('ChillHotel')) || null;
if(!admin){
 return <Navigate to={'/login'}></Navigate>
}else{
    return children
}
};

export default RutasProtegidas;