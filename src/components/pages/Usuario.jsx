import Button from 'react-bootstrap/Button';
import '../../../node_modules/bootswatch/dist/darkly/bootstrap.min.css'
import imagenRegistro from '../../assets/imagenRegistro.jpg'
import FormularioRegistro from './FormularioRegistro';
import Login from './Login';
import { useEffect, useState } from 'react';

const Usuario = () => { 
  const [registro, setRegistro] = useState(true)

  useEffect(()=>{
  },[])

  const formularioRegistro = () =>{
      setRegistro(true)
    }
  const formularioLogin = () =>{
      setRegistro(false)
    }



  return (
        <section className='bg-registro mainSection'>
            <div className='row mx-0 justify-content-center'>
            <div className='col-12 col-lg-7 px-0'>
<img src={imagenRegistro} alt="" className='w-100 h-100 img-config' />
            </div>
            <div className='col-12 col-lg-5'>
              <div className='row'>
<div className='col-12 text-center mt-5'>
  <Button className='btn btn-outline-info' onClick={()=>formularioRegistro()} >Registrarse</Button>
  <Button className='btn btn-outline-info' onClick={()=>formularioLogin()}>Iniciar sesión</Button>
</div>
          <div className=' col-12'>
            {registro === true ? (<FormularioRegistro></FormularioRegistro>):(<Login></Login>)
            }
    </div>
            </div>
            </div>
          </div>
        </section>
    );
}; 

export default Usuario;