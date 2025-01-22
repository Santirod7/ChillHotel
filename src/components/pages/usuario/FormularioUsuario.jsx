import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { adjuntoUsuario, editarUsuario } from "../../../helpers/queries";


const FormularioUsuario = (editoUsuario) => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
      } = useForm();

      const {id} = useParams()
      const navegacion = useNavigate();

      useEffect(()=>{
      
        if(editoUsuario){
            cargarDatosUsuario()
        }
      },[])

      const cargarDatosUsuario = async()=>{
        const respuesta = await adjuntoUsuario(id);
        if(respuesta.status === 200){
          const datoUsuario = await respuesta.json()
          setValue('email', datoUsuario.email)
          setValue('nombreUsuario', datoUsuario.nombreUsuario)
          setValue('nombre', datoUsuario.nombre)
          setValue('apellido', datoUsuario.apellido)      
          setValue('nacionalidad', datoUsuario.nacionalidad)          
        }
      }

          const usuarioValidado = async (usuario) => {
            if (editoUsuario) {
              const respuesta = await editarUsuario(usuario, id)
              if(respuesta.status === 200){
                Swal.fire({
                  title: "Usuario editado correctamente",
                  icon: "success",
                });
                navegacion('/perfil')
              }else{
                Swal.fire({
                  title: "Ocurrio un error",
                  text: `El usuario no pudo ser editado, intente esta operación en unos minutos.`,
                  icon: "error",
                });
              }
          };
      };


    return (
        <section className='container-fluid min-vh-100 my-4'>
            <div>
<div className='row w-100 justify-content-center'>
        <div className='col-10 border border-2 border-light bg-secondary '>
        <h1 className="text-center my-2">Ficha personal</h1>
        <Form className="container my-2 " onSubmit={handleSubmit(usuarioValidado)}>
            <Form.Group className="mt-2" controlId="formBasicEmail">
              <Form.Label>Email </Form.Label>
              <Form.Control
                type="email"
                placeholder="juancarlos10@gmail.com"
                {...register("email", {
                  required: "El nombre de email es obligatorio",
                  pattern: {
                    value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message:
                      "Ingrese una dirección de correo electrónico válida",
                  },
                })}
              />
              <Form.Text className="text-danger">
              {errors.email?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mt-2" controlId="formnombreUsuario">
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
                <Form.Group className="mt-2" controlId="formNombre">
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
                <Form.Text className="text-danger mt-0">
              {errors.nombre?.message}
              </Form.Text>
              </div>
              <div className="col-6">
                <Form.Group className="mt-2" controlId="formApellido">
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
            <Form.Group className="mt-2" controlId="formNacionalidad">
              <Form.Label>Nacionalidad</Form.Label>
              <Form.Select aria-label="Selector" {...register("nacionalidad", {
                      required: "La nacionalidad es requerida",
                      })}
                      aria-invalid={errors.nacionalidad ? "true" : "false"
                      }>
                <option value="">Seleccione su nacionalidad</option>
                <option value="Argentina">Argentina</option>
                <option value="Chile">Chile</option>
                <option value="Estados Unidos">US</option>
                <option value="Brasil">Brasil</option>
                <option value="México">México</option>
              </Form.Select>
              {errors.nacionalidad && (
          <Form.Text className="text-danger">
            {errors.nacionalidad.message}
          </Form.Text>
        )}
            </Form.Group>
            <div className="row justify-content-center">
            <Button variant="info" type="submit" className="mt-4 text-center">
              Editar
            </Button>
            </div>
          </Form>
        </div>
</div>
<div className="container mt-5">
    <img className="w-100 public-perfil" src="https://images.pexels.com/photos/163792/model-planes-airplanes-miniatur-wunderland-hamburg-163792.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
</div>
            </div>
        </section>
    );
};

export default FormularioUsuario;