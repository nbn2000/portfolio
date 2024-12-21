import MyPicture from "./assets/me.webp";
import { skills, projects, aboutMyself, socialLinks } from './data';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6">
      <div className="container mx-auto flex flex-col items-center text-center">
        <img
          src={MyPicture}
          loading="lazy"
          alt="Makhmudov Nodirbek"
          className="w-[6rem] h-[6rem] md:w-[8rem] md:h-[8rem] lg:w-[10rem] lg:h-[10rem] rounded-full mb-4 border-4 object-cover object-top border-white"
        />
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Makhmudov Nodirbek</h1>
        <p className="text-base md:text-lg lg:text-xl mt-2">Full-Stack Developer</p>
      </div>
    </header>
    <section className="p-6">
      <div className="container mx-auto">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">About Me</h2>
        {aboutMyself.map((paragraph, index) => (
          <p key={index} className="leading-relaxed mb-1 md:mb-3 inter text-sm md:text-lg lg:text-2xl tracking-wide inter">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
    <section className="p-6 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 xl:gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-700 p-2 lg:p-3 xl:p-4 rounded-lg">
              <h3 className="text-sm md:text-base lg:text-xl font-bold mb-[2px] md:mb-1 lg:mb-2">{skill.header}</h3>
              <ul className="list-disc ml-4">
                {skill.body.map((item, idx) => (
                  <li key={idx} className="text-xs md:text-sm lg:text-base">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="p-6">
      <div className="container mx-auto">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-700 p-1 md:p-2 lg:p-4 rounded-lg hover:shadow-lg hover:bg-gray-600 transition duration-300"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <h3 className="text-base md:text-lg lg:text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-xs md:text-sm">{project.link}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
    <footer className="p-2 md:p-4 lg:p-6 pb-6 bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="container mx-auto text-center">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">Connect with Me</h2>
        <div className="flex justify-center align-center flex-wrap gap-2 md:gap-4 lg:gap-6 w-full">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 text-sm md:text-base lg:text-lg px-2 md:px-3 lg:px-4 py-1 md:py-2 rounded-lg hover:bg-gray-200 transition duration-300"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  </div>
  );
}

export default App;
