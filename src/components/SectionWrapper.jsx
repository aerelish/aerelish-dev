import { MdDoubleArrow } from "react-icons/md";

function SectionWrapper({ title, subtitle, link, children }) {
  return (
    <div className="max-w-4xl mt-12 pb-2 px-4 mx-auto text-zinc-100">
      {title && (
        <h2 className="text-center uppercase text-2xl md:text-3xl lg:text-3xl font-semibold mt-3 flex items-center gap-2 group">
          {title}
          {link && (
            <a
              href={link}
              className="group-hover:translate-x-2 hover:text-[var(--accent-color)] transition-all duration-300"
            >
              <MdDoubleArrow />
            </a>
          )}
        </h2>
      )}
      <div className="uppercase text-md font-light mt-1 mb-5 text-zinc-400">{subtitle}</div>
      {/* {subtitle && <div className="text-md text-zinc-400">{subtitle}</div>} */}
      {children}
    </div>
  )
}

export default SectionWrapper