import { Col, Card, Button } from "react-bootstrap";

const CatalogoHab = ({habitaciones2}) => {
  
  
  
  
  
  return (
    <Col md={4} lg={4} className="mb-3">
      <Card className="h-100 border border-3 border-secondary-subtle">
        <div>
          <img
            src={habitaciones2.imagen}
            alt="cafe"
            className="card-img-top-nueva"
          />
        </div>
        <Card.Body >
          <Card.Title className="primary-font text-center">{habitaciones2.tipoHabitacion}</Card.Title>
          <Card.Text>
          <span className="text-danger">${habitaciones2.precio},99</span><br />
          <span className="fw-bold">Numero De Habitacion: </span>{habitaciones2.numHabitacion} <br />
          <span className="fw-bold">Disponibilidad:</span> {habitaciones2.disponibilidad} <br />
          <span className="fw-bold">Descripcion:</span>{habitaciones2.descripcion_breve}<br />
            
           
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-end">
          <Button className="btn btn-secondary me-2 border-3 border-black" to="">
            Reservar ahora
          
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CatalogoHab;
