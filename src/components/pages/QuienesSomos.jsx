import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Franco from "../../assets/fotosNosotros/Franco.jpeg";
import Valentin from "../../assets/fotosNosotros/Valentin.jpeg";
import Axel from "../../assets/fotosNosotros/Axel.jpeg";
import Ezequiel from "../../assets/fotosNosotros/Ezequiel.jpeg";
import Santiago from "../../assets/fotosNosotros/Santiago.png";
import "../../QuienesSomos.css";

const QuienesSomos = () => {


    const integrantes = [
        {
          nombre: "Pereyra Franco",
          cargo: "Desarrollador Fronend y Backend",
          imagen:`${Franco}`,
        },
        {
          nombre: "Gonzalez Axel",
          cargo: "Desarrollador Fronend y Backend",
          imagen: `${Axel}`, 
        },
        {
          nombre: "Rodriguez Santiago",
          cargo: "Desarrollador Fronend y Backend",
          imagen: `${Santiago}`,
        },
        {
          nombre: "Lobo Valentin",
          cargo: "Desarrollador Fronend y Backend",
          imagen:  `${Valentin}`,
        },
        {
            nombre: "Infante Ezequiel",
            cargo: "Desarrollador Fronend y Backend",
            imagen:  `${Ezequiel}`, 
          },
      ];
      







  return (
    <section className="PrincipalIndex ">
      <div className="container text-center mt-5">
        
        <h1>Equipo De Desarrollo</h1>
          
        <p>
          El equipo desarrollador de una página hotelera suele estar compuesto
          por profesionales de diversas áreas que trabajan en conjunto para
          crear una experiencia en línea atractiva y funcional para los
          usuarios. Este equipo incluye diseñadores gráficos que se encargan de
          la estética visual del sitio, asegurándose de que sea atractivo y
          coherente con la marca del hotel. Los desarrolladores front-end se
          ocupan de la implementación del diseño en código, utilizando lenguajes
          como HTML, CSS y JavaScript para crear una interfaz de usuario
          interactiva y responsiva. Por otro lado, los desarrolladores back-end
          trabajan en la lógica del servidor, bases de datos y la integración de
          sistemas de reservas y pagos, garantizando que todas las
          funcionalidades del sitio web operen sin problemas. Además, los
          especialistas en SEO (optimización para motores de búsqueda) optimizan
          el contenido y la estructura del sitio para mejorar su visibilidad en
          los motores de búsqueda, atrayendo más visitantes potenciales.
          Finalmente, los gerentes de proyecto coordinan todos estos esfuerzos,
          asegurándose de que el proyecto se mantenga dentro del presupuesto y
          se entregue a tiempo. Este equipo multidisciplinario colabora
          estrechamente para ofrecer una plataforma digital que no solo sea
          visualmente atractiva, sino también eficiente y fácil de usar para los
          clientes del hotel.
        </p>
      
        </div>

      <Container className="mt-5">
      <h2 className="text-center mb-4">¿Quiénes Somos?</h2>
      <Row className="justify-content-beetwen">
        {integrantes.map((integrante, index) => (
          <Col key={index} md={6} lg={3} className="mb-4">
            
            <Card className="border border-4">
              <Card.Img variant="" src={integrante.imagen}  className="img" />
              <Card.Body>
                <Card.Title>{integrante.nombre}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{integrante.cargo}</Card.Subtitle>
                
              </Card.Body>
            </Card>
          </Col>
        ))}
        </Row>
      
    </Container>


    </section>
  );
};

export default QuienesSomos;
