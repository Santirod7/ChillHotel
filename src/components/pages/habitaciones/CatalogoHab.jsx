import { Col, Card, Button } from "react-bootstrap";

const CatalogoHab = () => {
  return (
    <Col md={4} lg={4} className="mb-3">
      <Card className="h-100 border border-3 border-secondary-subtle">
        <div>
          <img
            src="https://th.bing.com/th/id/R.0d426cb813f8c9c5994c3cab197ceff4?rik=%2fFK%2ff5cIRe7oYw&pid=ImgRaw&r=0"
            alt="cafe"
            className="card-img-top-nueva"
          />
        </div>
        <Card.Body >
          <Card.Title className="primary-font">Habitacion</Card.Title>
          <Card.Text>
            <span className="fw-bold">Precio: $20000</span> <br />
            <span className="fw-bold">Num de Hab:10</span> <br />
            Descripción:4 habitaciones .
            <br className="mb-2" />
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-end">
          <Button className="btn btn-secondary me-2 border-3 border-black" to="*">
            Ver más
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CatalogoHab;
