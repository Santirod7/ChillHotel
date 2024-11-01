import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const FormularioRegistro = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  return (
    <article className="w-100">
      <Card className="my-5">
        <Card.Header as="h5" className="text-center">
          Registrarse
        </Card.Header>
        <Card.Body>
          <Form className="container my-2 ">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email </Form.Label>
              <Form.Control
                type="email"
                placeholder="juancarlos10@gmail.com"
                {...register("email", {
                  required: "El nombre de email es obligatorio",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                    message:
                      "Ingrese una dirección de correo electrónico válida",
                  },
                })}
              />
              <Form.Text className="text-danger">
              {errors.email?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formnombreUsuario">
              <Form.Label>Nombre de usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej. Carlitos10"
                {...register("nombreUsuario", {
                  required: "El nombre de usuario es obligatorio",
                  minLength: {
                    value: 4,
                    message:
                      "Debe ingresar como minimo 4 caracteres como nombre de usuario",
                  },
                  maxLength: {
                    value: 25,
                    message:
                      "Debe ingresar como maximo 25 caracteres como nombre de usuario",
                  },
                })}
              />
            </Form.Group>
            <Form.Text className="text-danger">
              {errors.nombreUsuario?.message}
              </Form.Text>
            <div className="row">
              <div className="col-6">
                <Form.Group className="mb-3" controlId="formNombre">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ej. Carlos"
                    {...register("nombre", {
                      required: "El nombre es obligatorio",
                      minLength: {
                        value: 3,
                        message: "Debe ingresar como minimo 3 caracteres",
                      },
                      maxLength: {
                        value: 25,
                        message: "Debe ingresar como maximo 25 caracteres",
                      },
                    })}
                  />
                </Form.Group>
                <Form.Text className="text-danger">
              {errors.nombre?.message}
              </Form.Text>
              </div>
              <div className="col-6">
                <Form.Group className="mb-3" controlId="formApellido">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ej. Caravajal"
                    {...register("apellido", {
                      required: "El apellido es obligatorio",
                      minLength: {
                        value: 3,
                        message: "Debe ingresar como minimo 3 caracteres",
                      },
                      maxLength: {
                        value: 25,
                        message: "Debe ingresar como maximo 25 caracteres",
                      },
                    })}
                  />
                </Form.Group>
                <Form.Text className="text-danger">
              {errors.apellido?.message}
              </Form.Text>
              </div>
            </div>
            <Form.Group className="mb-3" controlId="formNacionalidad">
              <Form.Label>Nacionalidad</Form.Label>
              <Form.Select aria-label="Selector" {...register("selector", {
                      required: "La nacionalidad es requerida",
                      })}>
                <option>Seleccione su nacionalidad</option>
                <option value="1">Argentina</option>
                <option value="2">Chile</option>
                <option value="3">US</option>
                <option value="4">Brasil</option>
                <option value="5">México</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "El password es obligatorio",
                  pattern: {
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                    message:
                      "El password debe contener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número",
                  },
                })}
              />
            </Form.Group>
            <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            <Form.Group className="mb-3" controlId="formBasicRepeatPassword">
              <Form.Label>Repetir Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Repetir Password"
                {...register("repeatPassword", {
                  required: "Repetir password es obligatorio",
                  pattern: {
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                    message:
                      "Los passwords no coinciden",
                  },
                })}
              />
            </Form.Group>
            {setValue('password') === setValue('repeatPassword') ? (<Form.Text className="text-success">
                    Los passwords coinciden
                    </Form.Text>) : (<Form.Text className="text-danger">
                    {errors.repeatPassword?.message}
                    </Form.Text>)
                }
            <Form.Group className="mb-3 d-flex" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" />
              <Form.Label className="ms-2">
                Aceptar los <Link to={"/error404"}>términos y condiciones</Link>
              </Form.Label>
            </Form.Group>
            <div className="row justify-content-center">
            <Button variant="info" type="submit" className="text-center">
              Enviar
            </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </article>
  );
};

export default FormularioRegistro;
