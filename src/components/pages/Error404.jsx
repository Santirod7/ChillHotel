import { Button } from "react-bootstrap";
import error from "../../assets/IndexFotos/error3.avif"
import { Link} from "react-router-dom";

const Error404 = () => {
    return (
        <section className=" container text-center mt-4"> 
        <img src={error} alt="error404" className="w-100 "/>  
       <Button className='my-5' variant="dark" to="/" as={Link}>Volver al inicio</Button>
   </section>
    );
};

export default Error404;