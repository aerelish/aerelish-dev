import { socialLinks } from "../data/socialLinks";
import { TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";
import { AiOutlineMail } from "react-icons/ai";
import { RiFile3Line } from "react-icons/ri";

const links = [
  {
    id: "git",
    link: socialLinks.github,
    icon: <TbBrandGithub />
  },
  {
    id: "email",
    link: socialLinks.gmail,
    icon: <AiOutlineMail />
  },
  {
    id: "linkedin",
    link: socialLinks.linkedIn,
    icon: <TbBrandLinkedin />
  },
  {
    id: "resume",
    link: socialLinks.resume,
    icon: <RiFile3Line />
  }
];

function Footer() {
  return (
    <footer className="max-w-4xl mx-auto px-5 z-40 flex items-center justify-between py-[1em]">
      <p className="text-md text-[var(--accent-color)]">
        &#169; 
        2025 {" "}
        <span className="uppercase">aerelish</span>
      </p>
      <div className="flex gap-1.5 text-[var(--accent-color)] text-xl">
        {links.map((link, index) => {
          return (
            <a 
              key={index}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </a>
          )
        })}
      </div>
    </footer>
  )
}

export default Footer