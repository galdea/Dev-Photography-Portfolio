
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function PhotographyNavbar() {
    return (
      <header className="bg-gray-800 md:sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a href="/" className="title-font font-medium text-white mb-4 md:mb-0">
            Gabriel Aldea
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
            <a href="/projects" className="mr-5 hover:text-white">
              Past Work
            </a>
            <a href="/skills" className="mr-5 hover:text-white">
              Skills
            </a>
            <a href="/photography" className="mr-5 hover:text-white">
              Photography
            </a>
          </nav>
          <div className="flex items-center justify-end">
            <a
              href="#contact"
              className="inline-flex items-center bg-gray-800 border-0 px-3 mr-3 focus:outline-none hover:bg-gray-700 rounded text-base md:mt-0"
            >
              Contact me
            </a>
            <a
              href="https://www.instagram.com/gab_aldea/"
              className="mr-5 hover:text-white"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.linkedin.com/in/gabriel-aldea/"
              className="mr-5 hover:text-white"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
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