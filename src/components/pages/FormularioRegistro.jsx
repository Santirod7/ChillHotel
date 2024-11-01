import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const FormularioRegistro = () => {
    return (
        <article>
            <Form className='container my-3'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" placeholder="juancarlos10@gmail.com" />
        <Form.Text className="text-muted">
          No compartiremos su email con nadie
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formnombreUsuario">
        <Form.Label>Nombre de usuario</Form.Label>
        <Form.Control type="text" placeholder="Ej. Carlitos10" />
      </Form.Group>
      <div className='row'>
        <div className='col-6'>
        <Form.Group className="mb-3" controlId="formBasicNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ej. Carlos" />
      </Form.Group>
        </div>
        <div className='col-6'>
        <Form.Group className="mb-3" controlId="formBasicApellido">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" placeholder="Ej. Caravajal" />
      </Form.Group>
        </div>
      </div>
      <Form.Group className="mb-3" controlId="formNacionalidad">
      <Form.Label>Nacionalidad</Form.Label>
      <Form.Select aria-label="Default select example">
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
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicRPassword">
        <Form.Label>Repetir Password</Form.Label>
        <Form.Control type="password" placeholder="Repetir Password" />
      </Form.Group>
      <Form.Group className="mb-3 d-flex" controlId="formBasicCheckbox">
        <Form.Check type="checkbox"/>
        <Form.Label className='ms-2'>Aceptar los <Link to={'/error404'}>términos y condiciones</Link></Form.Label>

      </Form.Group>
      <Button variant="info" type="submit">
        Enviar
      </Button>
    </Form>
        </article>
    );
};

export default FormularioRegistro;