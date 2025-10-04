import React from "react";
import "./About.css";

export default function About() {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-text">
          <h2 className="about-title">Sobre mí</h2>
          <p>
            Tengo <strong>19 años</strong> y soy un apasionado por la informática y la tecnología.
            Me gusta construir experiencias digitales atractivas, modernas y funcionales.
          </p>
          <p>
            Trabajo como <span style={{ color: "#029aff" }}>desarrollador Front-End</span>{" "}
            , utilizando herramientas como <strong>HTML, CSS, JavaScript y React</strong>.
          </p>
          <p>
            Mi objetivo es seguir creciendo profesionalmente, aprendiendo nuevas tecnologías y
            aportando soluciones creativas en cada proyecto.
          </p>
        </div>

        <div className="about-img">
          <img
            src="https://res.cloudinary.com/da7qyuew6/image/upload/v1759556353/profile_br8nvq.jpg"
            alt="Foto de Matthias Gasco"
          />
        </div>
      </div>
    </section>
  );
}
