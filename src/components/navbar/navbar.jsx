import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY && currentScroll > 80) {
        setHidden(true); // Oculta al scrollear hacia abajo
      } else {
        setHidden(false); // Muestra al subir
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`navbar ${hidden ? "hidden" : ""}`}
      onMouseEnter={() => setHidden(false)}
    >
      <nav className="nav-container">
        <h1 className="logo">Matthias.dev</h1>

        {/* Botón Hamburguesa */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>Sobre mí</a></li>
          <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experiencia</a></li>
          <li><a href="#technologies" onClick={() => setMenuOpen(false)}>Habilidades</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}
