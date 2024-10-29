import { Container, Row } from "react-bootstrap";
import CatalogoHab from "./CatalogoHab.jsx";
const Index = () => {
  return (
    <section className ='mainSeccion'>
      <Container className="mt-5">
        <h1 className="display-4">Nuestras Habitaciones Disponibles</h1>
        <hr />

        <Row>
          <CatalogoHab></CatalogoHab>
          <CatalogoHab></CatalogoHab>
          <CatalogoHab></CatalogoHab>
          <CatalogoHab></CatalogoHab>
          <CatalogoHab></CatalogoHab>
          <CatalogoHab></CatalogoHab>
          <CatalogoHab></CatalogoHab>
        </Row>
      </Container>
    </section>
  );
};

export default Index;
