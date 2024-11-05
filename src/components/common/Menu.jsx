import { Navbar, Container, Nav,Button} from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Menu = ({usuarioLogueado, setUsuarioLogueado}) => {
 
  const navegacion = useNavigate();

  const logout = () => {
   
    sessionStorage.removeItem("ChillHotel");
    
    setUsuarioLogueado("");
    
    navegacion("/");
  };
 
 
 
  return (
    <Navbar expand="lg" className="bg-dark" data-bs-theme="dark">
      <Container>
        {/* as LInk se comporte como link */}
        <Navbar.Brand as={Link} to='/'>
          <i className="bi bi-airplane-engines-fill"></i> Chill Hotel
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
         
        <Nav className="ms-auto">
            <NavLink end to='/' className='nav-link'>Inicio</NavLink>
            <NavLink end to='/QuienesSomos' className='nav-link'>¿Quienes Somos?</NavLink>
            <NavLink end to='/Contactanos' className='nav-link'>Contactanos</NavLink>

            {
              usuarioLogueado !== ""?(
                <>
                <NavLink end to='/administrador' className='nav-link'>Administrador</NavLink>
                <Button variant="dark"  onClick={logout}>Logout</Button>
                </>
              ):(
                <NavLink end to='/login' className='nav-link'>Login</NavLink>
              )
            }
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
