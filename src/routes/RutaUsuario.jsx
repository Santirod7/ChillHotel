import { Routes, Route } from "react-router-dom";
import Perfil from "../components/pages/usuario/Perfil.jsx";
import FormularioUsuario from "../components/pages/usuario/FormularioUsuario.jsx";

const RutaUsuario = ({setUsuarioLogueado}) => {
    return (
        <div>
             <Routes>
      <Route
        path="/"
        element={<Perfil setUsuarioLogueado={setUsuarioLogueado}></Perfil>}
      ></Route>
      <Route
        path="/editar/:id"
        element={
          <FormularioUsuario
          editoUsuario={true}
          ></FormularioUsuario>
        }
      ></Route>
    </Routes>
        </div>
    );
};

export default RutaUsuario;