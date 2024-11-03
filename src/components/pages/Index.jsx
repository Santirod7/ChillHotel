import { Container, Row, Carousel, Button,Col,Card } from "react-bootstrap";
import CatalogoHab from "./habitaciones/CatalogoHab.jsx";
import ImagenDisney from '../../assets/IndexFotos/disney.webp'
 import 'bootstrap/dist/css/bootstrap.min.css';
 import { useEffect, useState } from "react";
import { leerHabitacionesAPI,URLHabitaciones } from "../../helpers/queries.js";
import { Link } from "react-router-dom";
import Swal from "sweetalert2"
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

  const [habitaciones2,setHabitaciones] = useState([])


  useEffect(()=>{
  recibirHabitaciones();
  },[])
  
  const recibirHabitaciones= async ()=>{
  
    const respuesta = await leerHabitacionesAPI();
    if(respuesta.status===200){
  
    const datos = await respuesta.json();
    setHabitaciones(datos);
    }else{
  
      Swal.fire({
        title:"ocurrio un error ",
         text:`no se pudo obtener el listado de Habitaciones,intente en unos minutos..`,
         icon:"error"
        });
  
    }
  
  
  }





  return (
    <section className ='PrincipalIndex'>
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
            src="https://wallpaperboat.com/wp-content/uploads/2019/11/horizontal-12.jpg"
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
        {
              habitaciones2.map((habitaciones2)=> <CatalogoHab key={habitaciones2.id} habitaciones2={habitaciones2}  setHabitaciones={setHabitaciones}></CatalogoHab>)
            
            }
             
        </Row>
       
       {/* Poner ejemplos de mas buscados*/}

      
         <h2 className="display-4 text-white">Lo Mas Buscado:</h2> <hr className="border" />
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
     <hr className="border border-white"/> 
     

       {/* ofertas  */}
      <section className="rounded-5 py-3 px-3 bg-dark my-5 d-md-flex text-white justify-content-md-center  Alinear text-lg-start text-center ">
       <div>
        <p className="text-light-emphasis ">VACACIONES DE WALT DISNEY WORLD</p>
         <h2 className="display-5 mb-3"><b>¡Ahorre en sus vacaciones <br /> en Walt Disney World!</b></h2>
         <p className="mb-4">Ahorre hasta un 25% en habitaciones en hoteles selectos de Disney <br />para estadías la mayoría de las noches 2/23-4/30/25. Además, otros<br />ahorros para estadías la mayoría de las noches de domingo a jueves <br />1/1-2/20/25*.</p>
        <a href="./Error404.jsx"><Button variant="primary" className="mb-3">Reservar Ahora</Button></a> 
       </div>
       <div className="ms-md-5">
       <img
            className="d-block w-100 rounded-5 "
            src={ImagenDisney}
            alt="Second slide"
          />
       </div>
      
      
     </section>
     <hr className=" my-5 border border-white"/>


      </Container>

     
      
       
      
    
     


    </section>
  );
};

export default Index;
