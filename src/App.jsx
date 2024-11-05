import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Index from "./components/pages/Index";
import QuienesSomos from "./components/pages/QuienesSomos";
import Contactanos from "./components/pages/Contactanos";

import Error404 from "./components/pages/Error404";

import { useState } from "react";
import RutasProtegidas from "./routes/RutasProtegidas";
import RutasAdmin from "./routes/RutasAdministrador";
import Login from "./components/pages/Login";




function App() {
  const usuario = JSON.parse(sessionStorage.getItem('ChillHotel')) || "";
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
    <BrowserRouter>
      <Menu
        usuarioLogueado={usuarioLogueado}
        setUsuarioLogueado={setUsuarioLogueado}
      ></Menu>
      <Routes>
        <Route path="/" element={<Index></Index>}></Route>
        <Route path="/QuienesSomos" element={<QuienesSomos></QuienesSomos>}></Route>
        <Route path="/Contactanos" element={<Contactanos></Contactanos>}></Route>
       <Route
          exact
          path="/login"
          element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}
        ></Route>
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

export default App
