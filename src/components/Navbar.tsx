import { useLocation } from "react-router-dom";

const navLinks = [
  {
    id: "home",
    label: "Home",
    link: "/"
  },
  {
    id: "about",
    label: "About",
    link: "/about"
  },
  {
    id: "projects",
    label: "Projects",
    link: "/projects"
  },
];

type NavItemProps = {
  label: string,
  link: string
}

const NavItem = ({
  label,
  link
}: NavItemProps) => {

  const location = useLocation();
  const isSelectedPage = location.pathname === link;

  return (
    <a
      href={link}
      className={`relative inline-block uppercase text-base tracking-[.2em] hover:text-[var(--accent-color)] group`}
    >
      {label}
      <span className={`absolute bottom-0 left-1/2 h-0.5 w-0 bg-[var(--accent-color)] transition-all duration-300 transform -translate-x-1/2 ${isSelectedPage ? "w-full" : "group-hover:w-full"}`}></span>
    </a>
  )
};

function Navbar() {
  return (
    <nav className="top-1 w-full z-40 pt-[1em] md:pt-[4em]">
      <div className="max-w-4xl mx-auto px-5">
        <div className="flex justify-center">
          <div className="flex items-center space-x-5 text-lg">
            {navLinks.map((navlink) => (
              <NavItem
                key={navlink.id}
                label={navlink.label}
                link={navlink.link}
              />
            ))}
          </div>
        </div>

        {/* Mobile View */}
        {/* <div className="flex justify-between md:hidden">
          <a 
            className="uppercase text-2xl font-black"
            href="/">
            Aerelish
          </a>
          <button className="md:hidden text-lg items-center" onClick={toggleMenu}>
            <RxHamburgerMenu className="cursor-pointer" />
          </button>
        </div> */}

      </div>

    </nav>
  )
}

export default Navbar