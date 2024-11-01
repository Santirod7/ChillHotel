import { Form, Button, Container, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { login } from "../../helpers/queries";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';


const Login = ({setUsuarioLogueado}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navegacion = useNavigate()

  const onSubmit = (data) => {
    if(login(data)){
      Swal.fire({
        title: "Bienvenido",
        text: `Este es tu panel de administración de Chill Hotel`,
        icon: "success",
      });
      setUsuarioLogueado(data.email)
      navegacion('/administrador')
    }else{
      Swal.fire({
        title: "Ocurrio un error",
        text: `Email o password incorrecto`,
        icon: "error",
      });
    }
  };
  const responseGoogle = (response) => {
    console.log(response);
  }
  return (
    <Container className="mainSection">
      <Card className="my-5">
        <Card.Header as="h5" className="text-center">Inicio de sesión</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese un email"
                {...register("email", {
                    required: "El nombre de email es obligatorio",
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                      message: "Ingrese una dirección de correo electrónico válida",
                    }
                  })}
              />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...register("password", {
                    required: "El  password es obligatorio",
                    pattern: {
                      value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                      message: "El password debe contener al menos una letra mayúscula, una letra minúscula y un número",
                    },
                  })}
              />
              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Ingresar
            </Button>
            <div className="my-3 border border-bottom">
            </div>
            <GoogleLogin
            className="text-center"
    clientId="650752236712-lhlpdbl32pop9e5i5jom3vhnh4p211gu.apps.googleusercontent.com"
    buttonText="Iniciar Sesion con Google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
