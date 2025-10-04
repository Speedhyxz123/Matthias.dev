import "./Certifications.css";

export default function Certifications() {
  const certs = [
    {
      id: 1,
      title: "Desarrollo Web - Coderhouse",
      img: "https://res.cloudinary.com/da7qyuew6/image/upload/v1759550638/certificadodw_jj77ts.png",
      description:
        "Curso de fundamentos web con HTML, CSS, SASS y Bootstrap. Creación de sitios con enfoque responsive.",
      year: "2025",
    },
    {
      id: 2,
      title: "JavaScript - Coderhouse",
      img: "https://res.cloudinary.com/da7qyuew6/image/upload/v1759550638/certificadojs_ex6pis.png",
      description:
        "Desarrollo de aplicaciones dinámicas con JavaScript moderno, DOM, JSON y consumo de APIs.",
      year: "2025",
    },
    {
      id: 3,
      title: "React - Coderhouse",
      img: "https://res.cloudinary.com/da7qyuew6/image/upload/v1759550638/certificador_d5vavo.png",
      description:
        "Desarrollo de aplicaciones SPA con React, Hooks, componentes reutilizables y Firebase.",
      year: "2025",
    },
  ];

  return (
    <section className="certifications" id="certifications">
      <h2>Certificaciones</h2>
      <div className="cert-grid">
        {certs.map((cert) => (
          <div key={cert.id} className="cert-card">
            <div className="cert-image">
              <img src={cert.img} alt={cert.title} loading="lazy" />
            </div>
            <div className="cert-info">
              <h3>{cert.title}</h3>
              <p>{cert.description}</p>
              <span>{cert.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
