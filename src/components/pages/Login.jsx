import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Button, Container, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { login } from "../../helpers/queries";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google';

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
            <div className="d-flex w-100">
  <GoogleLogin className="ps-auto"
  onSuccess={credentialResponse => {
    Swal.fire({
      title: "Bienvenido",
      text: `Ingresaste exitosamente al Chill World`,
      icon: "success",
    })
  }}
  onError={() => {
    Swal.fire({
      title: "Ocurrio un error",
      text: `Lo sentimos, en estos momentos no puede iniciar sesion desde aqui`,
      icon: "error",
  })}}
/>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
    </article>
  );
};

export default Login;
