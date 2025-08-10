import { useState, useEffect, useRef } from "react";
import "@/assets/scss/components/Header.scss";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [menuActive, setMenuActive] = useState(false);
  const [navItemsVisible, setNavItemsVisible] = useState(false);
  const navRef = useRef(null);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
      setMenuActive(false);
    }
  };

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    if (!menuActive) {
      setNavItemsVisible(true);
    } else {
      setTimeout(() => setNavItemsVisible(false), 500);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["about", "gallery", "process", "contacts"];
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo">Marina's portfolio</div>

        <nav className={`nav ${menuActive ? "active" : ""}`} ref={navRef}>
          {["about", "gallery", "process", "contacts"].map((section, index) => (
            <button
              key={section}
              onClick={() => scrollTo(section)}
              className={`nav-link ${
                activeSection === section ? "active" : ""
              } ${navItemsVisible ? "show" : ""}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {section === "about" && "Обо мне"}
              {section === "gallery" && "Галерея"}
              {section === "process" && "Процесс"}
              {section === "contacts" && "Контакты"}
            </button>
          ))}
        </nav>

        <button
          className={`menu-button ${menuActive ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Меню"
        >
          <span className="menu-line"></span>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
        </button>
      </div>
    </header>
  );
}
