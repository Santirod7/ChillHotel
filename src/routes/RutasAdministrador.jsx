import { Routes, Route } from "react-router-dom";
import Administrador from "../components/pages/Administrador";
import FormularioHabitaciones from "../components/pages/habitaciones/FormularioHabitaciones";

const RutasAdministrador = () => {
    return (
        <div>
             <Routes>
      <Route
        path="/"
        element={<Administrador></Administrador>}
      ></Route>
      <Route
        path="/crear"
        element={
          <FormularioHabitaciones
            titulo={"Nueva Habitacion"}
            estoyCreando={true}
          ></FormularioHabitaciones>
        }
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

export default RutasAdministrador;