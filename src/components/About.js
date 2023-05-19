import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Gabriel </h1>
                               <p className="mb-8 leading-relaxed">
    With years of hands-on experience in various roles and academic studies in a different domain, I bring a unique perspective to software development and an ability to fastly incorporate to your working environment. As a dedicated Full Stack Developer, I have refined my problem-solving skills and developed a passion for creating innovative solutions. My track record of managing teams demonstrates my ability to collaborate effectively and deliver results. I am eager to take on new challenges and deliver high-quality work that exceeds expectations. Let's discuss how I can contribute to your team and help drive your business forward. </p>        <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-gray-400 bg-gray-800 border-0 py-1 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-green-500 border-0 py-1 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Check my projects
            </a>
            <a
  href="./Gabriel Aldea Resume.pdf" 
  download="Gabriel Aldea Resume.pdf"
  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-1 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
  my CV <img src="./cv2.png" alt="CV Logo" className="ml-3 w-6 h-6"/> 
</a>
            </div>
            <div className="flex justify-center my-4">
            <a
              href="https://www.instagram.com/gab_aldea/" onClick={(e) => {e.preventDefault(); window.open("https://www.instagram.com/gab_aldea/", "_blank")}}
              className="inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-2 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              <img src="./Instagram_logo_2016.svg.webp" alt="Instagram Logo" className="w-6 h-6"/> 
            </a>
                        <a
              href="https://www.linkedin.com/in/gabriel-aldea/" onClick={(e) => {e.preventDefault(); window.open("https://www.linkedin.com/in/gabriel-aldea/", "_blank")}}
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-2 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              <img src="./LinkedIn_icon.svg.png" alt="Linkedin" className="w-6 h-6"/> 
            </a>
            <a
              href="https://github.com/galdea" onClick={(e) => {e.preventDefault(); window.open("https://github.com/galdea", "_blank")}}
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-2 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              <img src="./github-mark-white.png" alt="Linkedin" className="w-6 h-6"/> 
            </a>
        


          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
  <img
    className="object-cover object-center rounded-full h-64 w-64 md:h-96 md:w-96 mb-4gi"
    alt="hero"
    src="./profile.jpg"
  />
</div>




      </div>
    </section>
  );
}
