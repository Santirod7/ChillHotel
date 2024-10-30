import { Container, Row, Carousel, Button,Col,Card } from "react-bootstrap";
import CatalogoHab from "./habitaciones/CatalogoHab.jsx";
// import 'bootstrap/dist/css/bootstrap.min.css';
const Index = () => {
  const hotels = [
    {
      image: 'https://via.placeholder.com/300x200?text=Hotel+1',
      title: 'Hotel Maravilloso',
      description: 'Disfruta de una estancia inolvidable en nuestro hotel de lujo.',
    },
    {
      image: 'https://via.placeholder.com/300x200?text=Hotel+2',
      title: 'Hotel Relax',
      description: 'Un lugar ideal para relajarte y desconectar Con toda tu flia.',
    },
    {
      image: 'https://via.placeholder.com/300x200?text=Hotel+3',
      title: 'Hotel Axel',
      description: 'Vive la aventura en nuestro hotel rodeado de naturaleza.',
    },
    {
      image: 'https://via.placeholder.com/300x200?text=Hotel+3',
      title: 'Hotel Franco',
      description: 'Vive la aventura en nuestro hotel rodeado de naturaleza.',
    },
    {
      image: 'https://via.placeholder.com/300x200?text=Hotel+3',
      title: 'Hotel EZEQUIEL',
      description: 'Vive la aventura en nuestro hotel rodeado de naturaleza.',
    },
    {
      image: 'https://via.placeholder.com/300x200?text=Hotel+3',
      title: 'Hotel Valentin',
      description: 'Vive la aventura en nuestro hotel rodeado de naturaleza.',
    },
  ];

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



      <Container className="my-5">
        <h1 className="display-4 text-white">Nuestras Habitaciones Disponibles</h1>
        <hr className="border border-white"/>

        <Row>
          <CatalogoHab></CatalogoHab>
          <CatalogoHab></CatalogoHab>
          <CatalogoHab></CatalogoHab>
          <CatalogoHab></CatalogoHab>
          <CatalogoHab></CatalogoHab>
          <CatalogoHab></CatalogoHab>
          <CatalogoHab></CatalogoHab>
        </Row>
       
       {/* Poner ejemplos de mas buscados*/}
        <h2 className="display-4 text-white">Lo Mas Buscado:</h2> <hr className="border border-white" />
        <Carousel>
      <Carousel.Item>
        <Row className="d-flex justify-content-center">
          {hotels.slice(0, 3).map((hotel, index) => (
            <Col key={index} md={4}>
              <Card className="mb-3">
                <Card.Img variant="top" src={hotel.image} />
                <Card.Body>
                  <Card.Title>{hotel.title}</Card.Title>
                  <Card.Text>{hotel.description}</Card.Text>
                  <Button variant="primary">Ver más</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Carousel.Item>

      <Carousel.Item>
        <Row className="d-flex justify-content-center">
          {hotels.slice(3).map((hotel, index) => (
            <Col key={index} md={4}>
              <Card className="mb-3">
                <Card.Img variant="top" src={hotel.image} />
                <Card.Body>
                  <Card.Title>{hotel.title}</Card.Title>
                  <Card.Text>{hotel.description}</Card.Text>
                  <Button variant="primary">Ver más</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Carousel.Item>
    </Carousel>

      </Container>

     
      
       
      
    
     


    </section>
  );
};

export default Index;
