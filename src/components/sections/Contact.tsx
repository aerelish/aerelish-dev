import { socialLinks } from "@/data/socialLinks"

type ContactLinkProps = {
  link?: string,
  icon: string,
  name: string,
  children: React.ReactNode
}

const ContactLink = ({ link, icon, name, children }: ContactLinkProps) => {
  return (
    <a
      href={link}
      className="flex items-center px-2 py-1 rounded-sm bg-white"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={icon}
        alt={name}
        title={name}
        className={`w-6 h-6 mr-2`}
      />
      <span className="text-base">{children}</span>
    </a>
  )
}

function Contact() {
  return (
    <section className="flex flex-col px-4 justify-center items-center h-80 mt-12 text-[#1c1c1c] bg-[var(--accent-color)]">
      <h1 className="font-semibold text-3xl md:text-4xl pb-4">
        Get In Touch
      </h1>
      <p className="font-base text-xl pb-4 text-center">
        Need a developer for your next project? Let's connect.
      </p>
      <div className="flex gap-3">
        <ContactLink
          link={socialLinks.gmail}
          icon="assets/icons/gmail.svg"
          name="gmail"
        >
          Email Me
        </ContactLink>
        <ContactLink
          link={socialLinks.linkedIn}
          icon="assets/icons/linkedin.svg"
          name="linkedin"
        >
          LinkedIn
        </ContactLink>
      </div>
    </section>
  )
}

export default Contact