import { Navbar, Container, Nav, Button, NavDropdown} from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { userAdmin } from "../../helpers/queries";
import "bootstrap-icons/font/bootstrap-icons.css";


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
            <NavLink end to='/' className='nav-link menu-link'>Inicio</NavLink>
            <NavLink end to='/quienes-somos' className='nav-link menu-link'>¿Quienes Somos?</NavLink>
            <NavLink end to='/contactanos' className='nav-link menu-link'>Contactanos</NavLink>

            {
              usuarioLogueado !== ""?(
                <div className="d-flex">{ 
                  usuarioLogueado.email ===`${userAdmin.email}`?(
                    <div className="d-flex">
                      <NavLink end to='/administrador' className='nav-link menu-link'>Administrador</NavLink>
                      <Button className="py-0 ms-2">   
                      <NavDropdown title={<i className="align-content-center bi bi-person-dash"></i>} id="basic-nav-dropdown">             
                      <NavDropdown.Item ><NavLink end to="/perfil" className="text-decoration-none">Mi perfil</NavLink></NavDropdown.Item>
              <NavDropdown.Item>
              <NavLink end to="/*" className="text-decoration-none">Mis reservas</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item ><NavLink end to="/*" className="text-decoration-none">Mis CDD</NavLink></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={logout}>
                Cerrar sesión
              </NavDropdown.Item>
            </NavDropdown>
            </Button>
                    </div>
                ):(<Button className="py-0 px-0 ms-2">   
                  <NavDropdown className="px-2" title={<i className="align-content-center bi bi-person-dash"></i>} id="basic-nav-dropdown">             
          <NavDropdown.Item ><NavLink end to="/perfil" className="text-decoration-none text-light">Mi perfil</NavLink></NavDropdown.Item>
          <NavDropdown.Item>
          <NavLink end to="/*" className="text-decoration-none">Mis reservas</NavLink>
          </NavDropdown.Item>
          <NavDropdown.Item ><NavLink end to="/*" className="text-decoration-none">Mis CDD</NavLink></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={logout}>
            Cerrar sesión
          </NavDropdown.Item>
        </NavDropdown>
        </Button>)
                }
                </div>
              ):(
                <div>
                <NavLink end to='/usuario' className='nav-link btn bg-primary'><i className="bi bi-person-add">  Iniciar sesión</i></NavLink>
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
