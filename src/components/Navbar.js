import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { useTranslation} from "react-i18next"
import './Navbar.css'


export default function Navbar() {
  function handlePhotographyClick() {
    
    // Redirect to the Photography component
    window.location.href = "/photography";
  }
  const {t, i18n} = useTranslation("global");

  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="/" className="title-font font-medium text-white mb-4 md:mb-0">
          Gabriel Aldea
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <a
            href="#projects"
            className="mr-5 hover:text-white"
          >
{t("navbar.projects")}          </a>
          <a
            href="#skills"
            className="mr-5 hover:text-white"
          >
{t("navbar.skills")}           </a>
<a
  href="https://gabrielaldeaphotography.vercel.app"
  target="_blank"
  className="mr-5 text-green hover:text-white"
  style={{ textDecoration: "none" }}
>
            {t("navbar.photography")} 
          </a>
        </nav>
        <div className="flex items-center justify-end">
        <button className="mr-3" onClick={() => i18n.changeLanguage("es")}>
  <span className="fi fi-es fis rounded-full"></span>
</button>

<button className="mr-1" onClick={() => i18n.changeLanguage("en")}>
  <span className="fi fi-us fis rounded-full"></span>
</button>
          <a
            href="#contact"
            className="inline-flex items-center bg-gray-700 border-0 px-3 ml-3 mr-4 focus:outline-none hover:bg-gray-800 rounded text-base md:mt-0"
          >
{t("navbar.contactme")}           </a>
          <a
            href="https://www.instagram.com/gab_aldea/"
            className="mr-5 hover:text-white"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://github.com/galdea"
            className="mr-5 hover:text-white"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </header>
  );
}
