import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import { useState } from "react";
import Index from "./components/pages/Index";
import CatalogoHab from "./components/pages/CatalogoHab";
import Reservas from "./components/pages/Reservas";
import Servicios from "./components/pages/Servicios";
import Usuario from "./components/pages/Usuario"
import RutasProtegidas from "./routes/RutasProtegidas";
import RutasAdministrador from "./routes/RutasAdministrador";
import Login from "./components/pages/Login";
import Error404 from "./components/pages/Error404";



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
        <Route path="/registro" element={<Usuario></Usuario>}></Route>
        <Route exact path="/login" element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}></Route>
        <Route
          exact
          path="/administrador/*"
          element={
          <RutasProtegidas>
            <RutasAdministrador></RutasAdministrador>
          </RutasProtegidas>}
        ></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
