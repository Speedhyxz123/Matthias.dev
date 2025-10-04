import "./Technologies.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaSass,
  FaGitAlt,
  FaFigma,
  FaDatabase,
  FaFire,
} from "react-icons/fa";

export default function Technologies() {
  const techs = [
    { id: 1, name: "HTML", icon: <FaHtml5 />, color: "#e44d26" },
    { id: 2, name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
    { id: 3, name: "JavaScript", icon: <FaJsSquare />, color: "#f7df1e" },
    { id: 4, name: "React", icon: <FaReact />, color: "#61DBFB" },
    { id: 5, name: "SASS", icon: <FaSass />, color: "#CD6799" },
    { id: 6, name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
    { id: 7, name: "Tailwind", icon: "🌬️", color: "#38BDF8" },
    { id: 8, name: "Firebase", icon: <FaFire />, color: "#FFCA28" },
    { id: 9, name: "Git & GitHub", icon: <FaGitAlt />, color: "#f1502f" },
    { id: 10, name: "Figma", icon: <FaFigma />, color: "#a259ff" },
    { id: 11, name: "SQL", icon: <FaDatabase />, color: "#00618A" },
  ];

  return (
    <section className="technologies" id="technologies">
      <h2>Tecnologías</h2>
      <div className="tech-grid">
        {techs.map((tech) => (
          <div key={tech.id} className="tech-card" style={{ borderColor: tech.color }}>
            <div className="tech-icon" style={{ color: tech.color }}>
              {tech.icon}
            </div>
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
