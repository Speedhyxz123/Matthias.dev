import "./App.css";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Experience from "./components/experience/experience";
import Technologies from "./components/technologies/technologies";
import Certifications from "./components/certifications/certifications";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import AnimatedSection from "./components/AnimatedSection/AnimatedSection";
;

function App() {
  return (<>
      <Navbar />
      <AnimatedSection><Hero /></AnimatedSection>
      <AnimatedSection delay={0.1}><About /></AnimatedSection>
      <AnimatedSection delay={0.2}><Experience /></AnimatedSection>
      <AnimatedSection delay={0.3}><Technologies /></AnimatedSection>
      <AnimatedSection delay={0.4}><Certifications /></AnimatedSection>
      <AnimatedSection delay={0.5}><Contact /></AnimatedSection>
      <AnimatedSection delay={0.6}><Footer /></AnimatedSection>
    </>
  );
}

export default App;
