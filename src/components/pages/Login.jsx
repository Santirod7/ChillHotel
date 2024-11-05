import { Form, Button, Container, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { leerUsuario, login } from "../../helpers/queries";
import '../../App.css'
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google';
import { useState, useEffect } from "react";

const Login = ({setUsuarioLogueado}) => {


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navegacion = useNavigate()

  const onSubmit = (data) => {

    if(login(data, usuarioRegistrado)){
      Swal.fire({
        title: "Bienvenido",
        text: `Este es tu panel de administración de Chill Hotel`,
        icon: "success",
      });
      setUsuarioLogueado(data.email)
      navegacion('/')
    }else{
      Swal.fire({
        title: "Ocurrio un error",
        text: `Email o password incorrecto`,
        icon: "error",
      });
    }
  };

  const [usuarioRegistrado,setUsuarioRegistrado] = useState([])

  useEffect(()=>{
  recibirUsuario();
  },[])

  const recibirUsuario= async ()=>{
    
    const respuesta = await leerUsuario();
    if(respuesta.status===200){
  
    const datos = await respuesta.json();
    setUsuarioRegistrado(datos);
    }else{
      Swal.fire({
        title:"ocurrio un error ",
         text:`no se pudo obtener el listado de Habitaciones,intente en unos minutos..`,
         icon:"error"
        });
   }}

  return (
    <article className="w-100">
    <Container>
      <Card className="my-5">
        <Card.Header as="h5" className="text-center">Inicio de sesión</Card.Header>
        <Card.Body>
          <Form className="container" onSubmit={handleSubmit(onSubmit)}>
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
            <div className="d-flex justify-content-evenly w-100">
  <GoogleLogin className="ps-auto"
  onSuccess={credentialResponse => {
    Swal.fire({
      title: "Bienvenido",
      text: `Ingresaste exitosamente al Chill World`,
      icon: "success",
    })
    const usuario = sessionStorage.setItem("ChillHotel", JSON.stringify(usuario.email));
    setUsuarioLogueado(usuario.email)
  }}
  onError={() => {
    Swal.fire({
      title: "Ocurrio un error",
      text: `Lo sentimos, en estos momentos no puede iniciar sesion desde aqui`,
      icon: "error",
  })}}
/>
<Link className="btn btn-primary fw-bolder align-content-center" to="./Error404">
              Acceder con Facebook
              <i className=" mt-2 ms-3 bi bi-facebook tamaño-icon-facebook h-100"></i>
            </Link>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
    </article>
  );
};

export default Login;