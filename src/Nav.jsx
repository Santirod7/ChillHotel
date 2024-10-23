import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Nadvar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary"  bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand  href="#home">Chill Hotel</Navbar.Brand>
        <Navbar.Toggle aria-controls="boton-hamburguesa" />
        <Navbar.Collapse id="boton-hamburguesa">
          <Nav className="me-auto">
            <Nav.Link href="#home">Hoteles</Nav.Link>
            <Nav.Link href="#link">Ciudades</Nav.Link>
              <Nav.Link href="#action/3.1">Sobre nosotros</Nav.Link>
              <Nav.Link href="#action/3.2">
                Registrarce
              </Nav.Link>     
              
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nadvar;