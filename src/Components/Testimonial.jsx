import React from "react";
import "./Testimonial.css";

import { testimonialData } from "../data/testimonials-data";

function Testimonial() {
  return (
    <div className="Principal-testimonial">
      {testimonialData.map((data, key) => {
        return (
          <div className="Contenedor-testimonial " key={key}>
            <img src={data.imagen} alt={data.alt} />
            <div className="Datos-testimonial">
              <div className="Nombre-testimonial">
                <p>
                  {data.nombre} <span> en {data.pais}</span>
                </p>
              </div>
              <div className="Cargo-testimonial">
                <p>
                  {data.cargo} en <span>{data.empresa}</span>
                </p>
              </div>
              <div className="Texto-testimonial">
                <p>"{data.testimonio}"</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Testimonial;
