import { FaGithub, FaGlobe } from "react-icons/fa";
import { projectsData } from "../../data/projectsData"
import { techIcons } from "../../data/techStackData";

function Projects({ limit }) {
  const projects = limit ? projectsData.slice(0, limit) : projectsData;
  return (
    <section>
      {projects.map((project, index) => (
      <div key={index} className="flex flex-col-reverse md:flex-row p-5 gap-8 mb-5 hover:bg-white/10 rounded-xl hover:p-5 transition duration-300">
        <div className="flex-1">
          <h3 className="uppercase text-sm text-zinc-400">{project.date}</h3>
          <div className="flex justify-between items-center gap-3">
            <h1 className="text-2xl font-medium py-2">{project.title}</h1>
            <div className="flex gap-2">
              {project.git && (
                <a 
                  href={project.git} 
                  className="text-white text-xl hover:text-[var(--accent-color)] transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View on GitHub"
                >
                  <FaGithub />
                </a>
              )}
              {project.url && (
                <a 
                  href={project.url} 
                  className="text-white text-xl hover:text-[var(--accent-color)] transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View on GitHub"
                >
                  <FaGlobe />
                </a>
              )}
            </div>    
          </div>
          <p className="text-base font-light">{project.description}</p>
          <div className="flex gap-2 mt-4 flex-wrap">
            {project.tech.map((tech, index) => (
              <div
                key={index}
                className="flex items-center px-2 py-1 rounded bg-zinc-800"
              >
                <img
                  src={techIcons[tech.iconName]}
                  alt={tech.iconName}
                  title={tech.iconName}
                  className={`w-4 h-4 mr-2 ${tech.background && "p-0.5 bg-white rounded-sm"}`}
                />
                <span className="text-xs lg:text-sm">{tech.iconName}</span>
              </div>
            ))}
          </div>
          
        </div>
        <div className="flex-1">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
      ))}
    </section>
  )
}

export default Projects