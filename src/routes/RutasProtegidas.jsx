import { Routes, Route } from "react-router-dom";
import Administrador from "../components/pages/Administrador";

const RutasProtegidas = () => {
    return (
   <Routes>
        <Route
          path="/"
          element={<Administrador></Administrador>}
        ></Route>
        <Route
          path="/crear"
          element={
            <FormularioProducto
              titulo={"Nuevo producto"}
              estoyCreando={true}
            ></FormularioProducto>
          }
        ></Route>
        <Route
          path="/editar/:id"
          element={
            <FormularioProducto
              titulo={"Editar producto"}
              estoyCreando={false}
            ></FormularioProducto>
          }
        ></Route>
      </Routes>
    );
};

export default RutasProtegidas;