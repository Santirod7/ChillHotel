import '../../../node_modules/bootswatch/dist/darkly/bootstrap.min.css'
import FormularioRegistro from './FormularioRegistro';
import Login from './Login';
import { useEffect, useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useNavigate } from "react-router-dom";
import ToggleButton from 'react-bootstrap/ToggleButton';
import Swal from "sweetalert2";


const Usuario = ({setUsuarioLogueado}) => { 
  const [registro, setRegistro] = useState(true)
  const usuario = JSON.parse(sessionStorage.getItem('ChillHotel')) || null
  const [radioValue, setRadioValue] = useState('2');
  const radios = [
    { name: 'Registrarse', value: '1' },
    { name: 'Iniciar sesión', value: '2' },
  ];
  const navegacion = useNavigate()
  const existeUsuario = (usuario) =>{ 
    usuario !== null?(
      navegacion("/"),
      Swal.fire({
        title: "Sesión activa",
        text: `Tu sesión está activa. Cierra sesión para ingresar a esta ruta`,
        icon: "error",
      })):(
      navegacion("/usuario")
    )
  }

  useEffect(()=>{
    setRegistro(false)
    existeUsuario(usuario)
  },[])

  const formularioRegistro = () =>{
      setRegistro(true)
    }
  const formularioLogin = () =>{
      setRegistro(false)
    }



  return (
        <section className=' mainSection img-fondo-login'>
            <div className='row mx-0 justify-content-center h-100'>
            <div className='col-10 col-md-6 col-lg-5 align-content-center'>
              <div className='row'>
<div className='col-12 text-center mt-5 align-content-center'>
<ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`registro-${idx}`}
            type="radio"
            variant={idx % 2 ? 'info' : 'light'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onClick={idx % 2 ? (()=>formularioLogin()) : (()=>formularioRegistro())}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
</div>
          <div className=' col-12'>
            {registro === true ? (<FormularioRegistro setUsuarioLogueado={setUsuarioLogueado}></FormularioRegistro>):( <Login setUsuarioLogueado={setUsuarioLogueado}></Login>)
            }
    </div>
            </div>
            </div>
          </div>
        </section>
    );
}; 

export default Usuario;