import "./NavBar.css";
import HomeIcon from "../../assets/icon-imgs/home-icon.svg";
import { useEffect, useState } from "react";

function NavBar() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const sectionElements = document.querySelectorAll("section");
    setSections(Array.from(sectionElements));
  }, []);

  return (
    <nav className="nav-bar">
      {sections.map((section, index) => (
        <a key={index} href={`#section-${index}`}><img src={HomeIcon} alt={`Section ${index + 1}`} /></a>
      ))}
    </nav>
  );
}

export default NavBar;