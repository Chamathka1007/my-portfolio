import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./styles/NavBar.css";

function NavBar() {
  const [active, setActive] = useState("home");
  const [underlineStyle, setUnderlineStyle] = useState({});

  const sections = ["home", "about", "skills"];

  const handleScroll = () => {
    const scrollPos = window.scrollY + 80; // adjust offset for navbar
    let current = "home";

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element && element.offsetTop <= scrollPos) {
        current = section;
      }
    });
    setActive(current);
    updateUnderline(current);
  };

  const updateUnderline = (section) => {
    const el = document.querySelector(`.nav-item[data-section=${section}]`);
    if (el) {
      setUnderlineStyle({
        width: el.offsetWidth + "px",
        left: el.offsetLeft + "px",
      });
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", () => updateUnderline(active));
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", () => updateUnderline(active));
    };
  }, [active]);

  return (
    <nav className="navbar">
      <ul className="nav-list">
        {sections.map((section) => (
          <li
            key={section}
            className={`nav-item ${active === section ? "active" : ""}`}
            data-section={section}
          >
            <Link to={section} smooth={true} duration={500}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
      <span className="nav-underline" style={underlineStyle}></span>
    </nav>
  );
}

export default NavBar;
