import { Button } from "react-bootstrap";
import error from "../../assets/IndexFotos/error.png"
const Error404 = () => {
    return (
        <section className=" container text-center mt-4"> 
        <img src={error} alt="error404" className="w-100 "/>  
       <Button className='my-5' variant="warning">Volver al inicio</Button>
   </section>
    );
};

export default Error404;