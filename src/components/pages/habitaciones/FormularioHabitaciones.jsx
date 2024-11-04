import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crearHabitacionesAPI, editarHabitacionesAPI, obtenerHabitacionesAPI } from "../../../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";


const FormularioHabitaciones = ({titulo,estoyCreando})=>{

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue
      } = useForm();

      const {id} = useParams()
      const navegacion = useNavigate();


      useEffect(()=>{
      
        if(!estoyCreando){
            cargarHabitacionesEnFormulario()
        }
      },[])

      const cargarHabitacionesEnFormulario = async()=>{
        const respuesta = await obtenerHabitacionesAPI(id);
        if(respuesta.status === 200){
          
          const datoHabitacion = await respuesta.json()
          setValue('numHabitacion', datoHabitacion.numHabitacion)
          setValue('tipoHabitacion', datoHabitacion.tipoHabitacion)
          setValue('disponibilidad', datoHabitacion.disponibilidad)
          setValue('precio', datoHabitacion.precio)      
          setValue('imagen', datoHabitacion.imagen)
          setValue('descripcion_breve', datoHabitacion.descripcion_breve)
          
        }
      }
    
      const habitacionValidada = async (habitacion) => {
        if (estoyCreando) {
          
          const respuesta = await crearHabitacionesAPI(habitacion);
        
          if (respuesta.status === 201) {
            Swal.fire({
              title: "Habitacion creada",
              text: `La Habitacion ${habitacion.tipoHabitacion}, fue creado correctamente`,
              icon: "success",
              
            });
            reset();
          } else {
            Swal.fire({
              title: "Ocurrio un error",
              text: `La Habitacion ${habitacion.tipoHabitacion} no pudo ser creada, intente esta operación en unos minutos.`,
              icon: "error",
            });
          }
        } else {
          
          const respuesta = await editarHabitacionesAPI(habitacion, id)
          if(respuesta.status === 200){
            Swal.fire({
              title: "Habitacion editada",
              text: `La Habitacion ${habitacion.tipoHabitacion}, fue editada correctamente`,
              icon: "success",
            });
            
            navegacion('/administrador')
          }else{
            Swal.fire({
              title: "Ocurrio un error",
              text: `La Habitacion ${habitacion.tipoHabitacion} no pudo ser editada, intente esta operación en unos minutos.`,
              icon: "error",
            });
          }
        }
      };

      return (
        <section className="container FormularioIndex ">
          <h1 className="display-4 mt-5">{titulo}</h1>
          <hr />
          <Form className="my-4" onSubmit={handleSubmit(habitacionValidada)}>
            <Form.Group className="mb-3" controlId="formnumHabitacion">
              <Form.Label>Numero de habitacion*</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ej: 101"
                {...register("numHabitacion", {
                  required: "El Numero de Habitacion es obligatorio",
                  minLength: {
                    value: 1,
                    message:
                      "Debe ingresar como minimo 1 caracteres para el num de Habitacion",
                  },
                  maxLength: {
                    value: 1000,
                    message:
                      "Debe ingresar como maximo 1000 caracteres para el num de habitacion",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.numHabitacion?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formtipoHabitacion">
              <Form.Label>Tipo De Habitacion*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Ejecutiva"
                {...register("tipoHabitacion", {
                  required: "El tipo de Habitacion Es obligatorio",
                  minLength: {
                    value: 2,
                    message: "Debe ingresar como minimo 2 caracteres",
                  },
                  maxLength: {
                    value: 50,
                    message: "Debe ingresar como maximo 50 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">{errors.tipoHabitacion?.message}</Form.Text>
            </Form.Group>
              
            <Form.Group className="mb-3" controlId="formtipoHabitacion">
              <Form.Label>Disponibilidad*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Disponibilidad"
                {...register("disponibilidad", {
                  required: "La disponibilidad de la Habitacion Es obligatoria",
                  minLength: {
                    value: 2,
                    message: "Debe ingresar como minimo 2 caracteres",
                  },
                  maxLength: {
                    value: 50,
                    message: "Debe ingresar como maximo 50 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">{errors.disponibilidad?.message}</Form.Text>
            </Form.Group>
             

            <Form.Group className="mb-3" controlId="formPrecio">
              <Form.Label>Precio*</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ej: 500"
                {...register("precio", {
                  required: "El precio es obligatorio",
                  min: {
                    value: 50,
                    message: "El precio como minimo debe ser de $50",
                  },
                  max: {
                    value: 2000000,
                    message: "El precio como maximo debe ser de $2000000",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.precio?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formimagen">
              <Form.Label>Imagen URL:*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: https://cdn.forbes.co/2020/02/sofitel-legend-santa-clara-outdoor-pool.jpg"
                {...register("imagen", {
                  required: "La imagen es obligatoria",
                  pattern: {
                    value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/,
                    message: "Debe ingresar una URL valida (jpg|jpeg|gif|png)",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.imagen?.message}
              </Form.Text>
            </Form.Group>

            
            <Form.Group className="mb-3" controlId="fordescripcion_breve">
              <Form.Label>Descripción breve:*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: cuenta con una cama tamaño queen o king, un escritorio amplio con buena iluminación, y sillas ergonómicas. Los servicios incluyen acceso a Wi-Fi de alta velocidad, una televisión de pantalla plana, minibar y, a menudo, un baño privado con amenities de calidad."
                as="textarea"
                {...register("descripcion_breve", {
                  required: "La descripcion breve de la habitacion es obligatoria",
                  minLength: {
                    value: 3,
                    message:
                      "Debe ingresar como minimo 3 caracteres para la descripcion breve",
                  },
                  maxLength: {
                    value: 200,
                    message:
                      "Debe ingresar como maximo 50 caracteres para la descripcion breve",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.descripcion_breve?.message}
              </Form.Text>
            </Form.Group>


    

            <Button type="submit" variant="secondary">
              Guardar
            </Button>
          </Form>
        </section>
      );




}

export default FormularioHabitaciones;