import { useEffect, useState } from "react";
import { FaFileDownload, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import "./Hero.css";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const rotation = Math.min(scrollY / 5, 180);
  const opacity = Math.max(1 - scrollY / 300, 0);

  return (
    <section className="hero">
      <div
        className="hero-image"
        style={{
          transform: `rotateY(${rotation}deg) translateY(${scrollY / 3}px)`,
          opacity,
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          src="https://res.cloudinary.com/da7qyuew6/image/upload/v1759550639/Profile_shzo4h.png"
          alt="Perfil"
        />

        <div className={`hero-buttons ${hover ? "show" : ""}`}>
          <a href="/cv.pdf" download title="Descargar CV">
            <FaFileDownload />
          </a>
          <a
            href="https://www.linkedin.com/in/matthias-gasco-8070b9361/"
            target="_blank"
            title="LinkedIn"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a href="mailto:matthiasgascmo@gmail.com" title="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="hero-info">
        <h1>Matthias Gasco</h1>
        <h2>Desarrollador Front End</h2>
      </div>
    </section>
  );
}
