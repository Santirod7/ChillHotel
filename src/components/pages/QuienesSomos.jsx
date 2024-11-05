import "bootstrap/dist/css/bootstrap.min.css";
import Franco from "../../img/Franco.jpeg";
import Valentin from "../../img/Valentin.jpeg";
import Axel from "../../img/Axel.jpeg";
import Ezequiel from "../../img/Ezequiel.jpeg";
import Santiago from "../../img/Santiago.png";

const QuienesSomos = () => {
  return (
    <section className="PrincipalIndex">
      <div className="container">

      <h1 className="text-center mt-3 mb-3 bg-light text-dark">Equipo desarrolador</h1>

      <p>
        El equipo desarrollador de una página hotelera suele estar compuesto por
        profesionales de diversas áreas que trabajan en conjunto para crear una
        experiencia en línea atractiva y funcional para los usuarios. Este
        equipo incluye diseñadores gráficos que se encargan de la estética
        visual del sitio, asegurándose de que sea atractivo y coherente con la
        marca del hotel. Los desarrolladores front-end se ocupan de la
        implementación del diseño en código, utilizando lenguajes como HTML, CSS
        y JavaScript para crear una interfaz de usuario interactiva y
        responsiva. Por otro lado, los desarrolladores back-end trabajan en la
        lógica del servidor, bases de datos y la integración de sistemas de
        reservas y pagos, garantizando que todas las funcionalidades del sitio
        web operen sin problemas. Además, los especialistas en SEO (optimización
        para motores de búsqueda) optimizan el contenido y la estructura del
        sitio para mejorar su visibilidad en los motores de búsqueda, atrayendo
        más visitantes potenciales. Finalmente, los gerentes de proyecto
        coordinan todos estos esfuerzos, asegurándose de que el proyecto se
        mantenga dentro del presupuesto y se entregue a tiempo. Este equipo
        multidisciplinario colabora estrechamente para ofrecer una plataforma
        digital que no solo sea visualmente atractiva, sino también eficiente y
        fácil de usar para los clientes del hotel.
      </p>
      <article className="d-flex  justify-content-center justify-content-around flex-wrap">
        <ul>
          <div>
            <img className="img" src={Franco} alt="Franco Pereira" />
          </div>
          <h4 className="text-center">Franco Pereira</h4>
        </ul>
        <ul>
          <div>
            <img className="img" src={Ezequiel} alt=" Ezequien infante" />
          </div>
          <h4> Ezequien infante</h4>
        </ul>
        <ul>
          <div>
            <img className="img" src={Axel} alt="Axel Sebastian Gonzalez" />
          </div>
          <h4> Axel Gonzalez</h4>
        </ul>
        <ul>
          <div>
            <img className="img" src={Santiago} alt=" Santiago Rodriguez" />
          </div>
          <h4> Santiago Rodriguez</h4>
        </ul>
        <ul>
          <div>
            <img className="img" src={Valentin} alt="Valentin Lobo" />
          </div>
          <h4> Valentin Lobo</h4>
        </ul>
      </article>
      </div>
    </section>
  );
};

export default QuienesSomos;
