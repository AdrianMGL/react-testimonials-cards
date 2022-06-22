import andrea from "../Images/andrea.jpg";
import karla from "../Images/person1.jpeg";
import "./Testimonial.css";

function Testimonial({ nombre, pais, cargo, empresa, testimonio }) {
  return (
    <div className="Principal-testimonial">
      <div className="Contenedor-testimonial">
        <img src={andrea} alt="Andrea" />

        <div className="Datos-testimonial">
          <div className="Nombre-testimonial">
            <p>
              {nombre} <span> en {pais}</span>
            </p>
          </div>
          <div className="Cargo-testimonial">
            <p>
              {cargo} en <span>{empresa}</span>
            </p>
          </div>
          <div className="Texto-testimonial">
            <p>"{testimonio}"</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
