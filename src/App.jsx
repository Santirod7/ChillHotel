import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootswatch/dist/journal/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { useState } from "react";
import Index from "./components/pages/Index";
import CatalogoHab from "./components/pages/CatalogoHab";
import Reservas from "./components/pages/Reservas";
import Servicios from "./components/pages/Servicios";
import RegistroUsuario from "./components/pages/RegistroUsuario";
import RutasProtegidas from "./routes/RutasProtegidas";
import RutasAdmin from "./routes/RutasAdmin";


function App() {
  const usuario = JSON.parse(sessionStorage.getItem('Chill Hotel')) || "";
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
    <BrowserRouter>
      <Menu
        usuarioLogueado={usuarioLogueado}
        setUsuarioLogueado={setUsuarioLogueado}
      ></Menu>
      <Routes>
        <Route path="/" element={<Index></Index>}></Route>
        <Route path="/catalogo" element={<CatalogoHab></CatalogoHab>}></Route>
        <Route path="/reservas" element={<Reservas></Reservas>}></Route>
        <Route path="/servicios" element={<Servicios></Servicios>}></Route>
        <Route path="/registrarse" element={<RegistroUsuario></RegistroUsuario>}></Route>
        <Route exact path="/login" element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}></Route>
        <Route
          exact
          path="/administrador/*"
          element={
          <RutasProtegidas>
            <RutasAdmin></RutasAdmin>
          </RutasProtegidas>}
        ></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
