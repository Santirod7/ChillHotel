import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


const Contactanos = () => {
       

    
   

    return (
        
         <section className=" container-fluid PrincipalIndex ">
           <div className='text-center text-black'>
           <h1 className="mt-5 mb-3 ms-5  display-4">Contactanos</h1>
           <h5 className="ms-5">Para todas las consultas,envienos un correo Electronico utilizando el siguiente <br />formulario. </h5>
           </div>
          
     
            <section className=" mt-5 mb-5 ps-4 pe-4 pb-3 pt-3 bg-secondary container border border-4 rounded-5 ">
             <Form  >
             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className='text-white'>Apellido Y Nombre*</Form.Label>
              <Form.Control type="text" placeholder="Gonzalez Axel" maxLength="100" minLength="2"
              
              />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className='text-white'>Gmail*</Form.Label>
              <Form.Control type="email" placeholder="ChillHotel101@gmail.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label className='text-white'>Detalle Del Problema*</Form.Label>
              <Form.Control as="textarea" rows={3}
              minLength="2" maxLength="100"
              />
              </Form.Group>
                  

              <div className='text-end'>
              <Button variant="light" type='submit' >Enviar</Button>
             
              </div>
             </Form>
            
            </section>
           


         </section>
    );
};

export default Contactanos;