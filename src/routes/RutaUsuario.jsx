import { Routes, Route } from "react-router-dom";
import Perfil from "../components/pages/usuario/Perfil.jsx";
import FormularioHabitaciones from "../components/pages/habitaciones/FormularioHabitaciones";

const RutaUsuario = () => {
    return (
        <div>
             <Routes>
      <Route
        path="/"
        element={<Perfil></Perfil>}
      ></Route>
      <Route
        path="/editar/:id"
        element={
          <FormularioHabitaciones
            titulo={"Editar Habitacion"}
            estoyCreando={false}
          ></FormularioHabitaciones>
        }
      ></Route>
    </Routes>
        </div>
    );
};

export default RutaUsuario;