import { Navbar, Container, Nav, Button} from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"


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
                <div className="d-flex">{
                  usuarioLogueado === "admin@ChillHotel.com"?(
                    <div className="d-flex">
                      <NavLink end to='/administrador' className='nav-link'>Administrador</NavLink>
                      <Button variant="dark"  onClick={logout}><i className="bi bi-person-dash">   Cerrar sesión</i></Button>
                    </div>
                ):(<Button variant="dark"  onClick={logout}><i className="bi bi-person-dash">   Cerrar sesión</i></Button>)
                }
                </div>
              ):(
                <div>
                <NavLink end to='/usuario' className='nav-link'><i className="bi bi-person-add">  Iniciar sesión</i></NavLink>
                </div>
              )
            }
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
