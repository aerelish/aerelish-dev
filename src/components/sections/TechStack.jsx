import { techStack, techIcons } from "../../data/techStackData";

function TechStack() {
  return (
    <section className="relative flex flex-col">
        {techStack.map((section, index) => {
          return (
            <div key={index} className="relative pl-8 border-l-2 border-[var(--accent-color)]">
              <h3 className="text-xl font-semibold mb-1">{section.title}</h3>
              <p className="text-lg text-gray-400 mb-2">{section.description}</p>
              <div className={`flex flex-wrap gap-4 ${index === techStack.length - 1 ? 'mb-1' : 'mb-6'}`}>
                {section.icons.map((icon, index) => (
                  <img key={index} src={techIcons[icon.iconName]} alt={icon.alt} className={`w-9 h-9 ${icon.background && "p-1 bg-white rounded-sm"}`} />
                ))}
              </div>
            </div>
          )
        })}
     </section>
  )
}

export default TechStack