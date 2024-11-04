import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Nadvar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary"  bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand  href="#index">Chill Hotel</Navbar.Brand>
        <Navbar.Toggle aria-controls="boton-hamburguesa" />
        <Navbar.Collapse id="boton-hamburguesa">
          <Nav className="me-auto">
            <Nav.Link href="/Index">Hoteles</Nav.Link>
            <Nav.Link href="#ciudades">Ciudades</Nav.Link>
              <Nav.Link href="/Nosotros.jsx">Sobre nosotros</Nav.Link>
              <Nav.Link href="#registro">
                Registrarse
              </Nav.Link>     
              
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nadvar;