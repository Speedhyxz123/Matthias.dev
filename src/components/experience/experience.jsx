import "./Experience.css";
import { FaLaptopCode, FaCity, FaTools, FaPalette } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Pasante en Cómputos",
      company: "Intendencia de Flores",
      year: "2024",
      icon: <FaCity />,
      description:
        "Soporte técnico, mantenimiento de equipos, instalación de software y tareas relacionadas con redes y sistemas internos.",
    },
    {
      id: 2,
      title: "Desarrollador Front-End",
      company: "Proyectos Personales",
      year: "2025",
      icon: <FaLaptopCode />,
      description:
        "Diseño y desarrollo de sitios web con HTML, CSS, JavaScript, React, SASS, Bootstrap y Tailwind. Enfoque en usabilidad y performance.",
    },
    {
      id: 3,
      title: "Desarrollador Full-Stack",
      company: "Barberlocate",
      year: "2024",
      icon: <FaLaptopCode />,
      description:
        "BarberLocate fue mi proyecto final, desarrollado con HTML, CSS, JavaScript, SQL y PHP. Se trató de una aplicación web para localizar barberías y gestionar turnos. Durante el desarrollo, realicé diagramas de flujo, testing funcional y la documentación de requerimientos, abarcando tanto el diseño visual como la lógica del sistema.",
    },
    {
      id: 4,
      title: "Desarrollador Front-End",
      company: "Freelance",
      year: "Actualidad",
      icon: <FaLaptopCode />,
      description:
        "Freelance Front-End Developer — Desarrollo de landing pages en React y tiendas online integradas con Firebase, enfocadas en diseño moderno, rendimiento y experiencia de usuario.",
    },
    {
      id: 5,
      title: "Freelance Front-End Developer & Diseñador Web",
      company: "Proyectos Independientes",
      year: "Actualidad",
      icon: <FaPalette />,
      description: "Diseño de interfaces en Figma.",
    },
    {
      id: 6,
      title: "Técnico de Hardware",
      company: "Freelance",
      year: "Actualidad",
      icon: <FaTools />,
      description:
        "Reparación, mantenimiento y optimización de computadoras. Armado de equipos a medida, instalación de sistemas operativos y diagnóstico de fallos de hardware y software.",
    },
  ];

  return (
    <section className="experience" id="experience">
      <h2 className="experience-title">Experiencia</h2>

      <div className="experience-grid">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-card">
            <div className="icon">{exp.icon}</div>
            <h3>{exp.title}</h3>
            <h4>{exp.company}</h4>
            <span className="year">{exp.year}</span>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
