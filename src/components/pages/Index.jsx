import { Container, Row, Carousel, Button,Col,Card } from "react-bootstrap";
import CatalogoHab from "./habitaciones/CatalogoHab.jsx";
const Index = () => {
  return (
    <section className ='mainSeccion'>
      <div className="carousel-container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/horizontal-lines-photography-3.jpg?resize=1500%2C842&ssl=1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Off 50% de Descuento</h3>
            <p>Texto descriptivo para el primer slide.</p>
            <Button variant="primary">Ver Más</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ipt.imgix.net/205979/x/0/leonardopapera-horizontal-2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Segundo Slide</h3>
            <p>Texto descriptivo para el segundo slide.</p>
            <Button variant="primary">Ver Más</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpapercave.com/wp/wp4566625.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Tercer Slide</h3>
            <p>Texto descriptivo para el tercer slide.</p>
            <Button variant="primary">Ver Más</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
    </div>
   {/* pagos aceptados */}

  

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
