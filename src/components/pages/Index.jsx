import { Container, Row, Carousel, Button, Col, Card } from "react-bootstrap";
import CatalogoHab from "./habitaciones/CatalogoHab.jsx";
import ImagenDisney from "../../assets/IndexFotos/disney.webp";
import HabitacionDoble from "../../assets/habitaciones/DOBLE/doble001.jpg";
import HabitacionDuplex from "../../assets/habitaciones/DUPLEX/duplex006.jpg";
import HabitacionMatrimonial from "../../assets/habitaciones/MATRIMONIAL/matrimonial004.jpg";
import HabitacionSingle from "../../assets/habitaciones/SINGLE/single001.jpg";
import HabitacionTriple from "../../assets/habitaciones/TRIPLE/triple003.jpg";
import HabitacionMatrimonial2 from "../../assets/habitaciones/MATRIMONIAL/matrimonial003.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { leerHabitacionesAPI } from "../../helpers/queries.js";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Index = () => {
  const hotels = [
    {
      image: `${HabitacionDoble}`,
      title: "Habitacion doble",
      description:
        "cuenta con una cama matrimonial (doble),ofrecen servicios como conexión Wi-Fi, televisión, y un baño privado o compartido.",
    },
    {
      image: `${HabitacionDuplex}`,
      title: "Habitacion Duplex",
      description:
        "en la planta inferior se encuentra una sala de estar o un área de trabajo, mientras que la planta superior alberga la cama y un baño.",
    },
    {
      image: `${HabitacionMatrimonial}`,
      title: "Cuarto Matrimonial",
      description:
        "cuenta con una cama matrimonial amplia, decoraciones suaves y acogedoras, como cortinas y alfombras que aportan calidez.",
    },
    {
      image: `${HabitacionSingle}`,
      title: "Habitacion Single",
      description:
        "cuenta con una cama individual, un escritorio , y un armario o espacio de almacenamiento incluyen comodidades como conexión Wi-Fi, televisión.",
    },
    {
      image: `${HabitacionTriple}`,
      title: "Habitacion Triple",
      description:
        "cuenta con tres camas individuales, una cama doble y una individual,comodidades como un baño privado, televisión, aire acondicionado",
    },
    {
      image: `${HabitacionMatrimonial2}`,
      title: "Cuarto Matrimonial",
      description:
        "cuenta con una cama matrimonial amplia, incluye muebles como mesas de noche, un armario y, a veces, un área de descanso y  aire acondicionado.",
    },
  ];

  const [habitaciones2, setHabitaciones] = useState([]);

  useEffect(() => {
    recibirHabitaciones();
  }, []);

  const recibirHabitaciones = async () => {
    const respuesta = await leerHabitacionesAPI();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setHabitaciones(datos);
    } else {
      Swal.fire({
        title: "ocurrio un error ",
        text: `no se pudo obtener el listado de Habitaciones,intente en unos minutos..`,
        icon: "error",
      });
    }
  };

  return (
    <section className="PrincipalIndex">
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.jaimelaucirica.cl/wp-content/uploads/2022/11/conce121_dpto_1122_04.jpg"
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
              src="https://media.admagazine.com/photos/6317bd95d75f2fd76bd148aa/master/w_1600%2Cc_limit/APR%2520-%2520Nooor%2520-%2520Appartement%252045m2%2520rue%2520de%2520Grenelle%2520-%2520cre%25CC%2581dit%2520Nicolas%2520MatheusG19_2044.jpg"
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
        <h1 className="display-4 text-white">
          Nuestras Habitaciones Disponibles
        </h1>
        <hr className="border border-white" />
        <Row>
          {habitaciones2.map((habitaciones2) => (
            <CatalogoHab
              key={habitaciones2.id}
              habitaciones2={habitaciones2}
              setHabitaciones={setHabitaciones}
            ></CatalogoHab>
          ))}
        </Row>
        {/* Poner ejemplos de mas buscados*/}
        <h2 className="display-4 text-white">Lo Mas Buscado:</h2>{" "}
        <hr className="border" />
        <Carousel>
          <Carousel.Item>
            <Row className="d-flex justify-content-center">
              {hotels.slice(0, 3).map((hotel, index) => (
                <Col key={index} md={4}>
                  <Card className="mb-3">
                    <Card.Img variant="" src={hotel.image} />
                    <Card.Body>
                      <Card.Title>{hotel.title}</Card.Title>
                      <Card.Text>{hotel.description}</Card.Text>
                      <a href="./Error404.jsx">
                        <Button variant="primary">Ver más</Button>
                      </a>
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
                    <Card.Img src={hotel.image} />
                    <Card.Body>
                      <Card.Title>{hotel.title}</Card.Title>
                      <Card.Text>{hotel.description}</Card.Text>
                      <Button variant="primary" to="/saccascs " as={Link}>
                        Ver más
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        </Carousel>
        <hr className="border border-white" />
        {/* ofertas  */}
        <section className="rounded-5 py-3 px-3 bg-dark my-5 d-md-flex text-white justify-content-md-center  Alinear text-lg-start text-center ">
          <div>
            <p className="text-light-emphasis ">
              VACACIONES DE WALT DISNEY WORLD
            </p>
            <h2 className="display-5 mb-3">
              <b>
                ¡Ahorre en sus vacaciones <br /> en Walt Disney World!
              </b>
            </h2>
            <p className="mb-4">
              Ahorre hasta un 25% en habitaciones en hoteles selectos de Disney{" "}
              <br />
              para estadías la mayoría de las noches 2/23-4/30/25. Además, otros
              <br />
              ahorros para estadías la mayoría de las noches de domingo a jueves{" "}
              <br />
              1/1-2/20/25*.
            </p>
            <Button
              variant="primary"
              className="mb-3"
              to="/saccascs "
              as={Link}
            >
              Reservar Ahora
            </Button>
          </div>
          <div className="ms-md-5">
            <img
              className="d-block w-100 rounded-5 "
              src={ImagenDisney}
              alt="Second slide"
            />
          </div>
        </section>
        <hr className=" my-5 border border-white" />
      </Container>
    </section>
  );
};

export default Index;
