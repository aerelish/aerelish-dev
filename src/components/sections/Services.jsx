const highlightStyle = "font-medium underline decoration-[var(--accent-color)]";

function Services() {
  return (
    <section>
      <p>I <span className={highlightStyle}>design</span>, <span className={highlightStyle}>build</span>, and <span className={highlightStyle}>maintain</span> software by writing <span className={highlightStyle}>clean</span>, <span className={highlightStyle}>efficient</span> code and developing solutions that solve real-world problems. This involves <span className={highlightStyle}>planning features</span>, <span className={highlightStyle}>implementing functionality</span>, and <span className={highlightStyle}>collaborating with others</span> to ensure the final product is reliable, maintainable, and focused on delivering a great user experience.</p>
      <br/>
      Want to learn more{" "}
      <a 
        href="/about" 
        className="relative inline-block font-medium text-[var(--accent-color)] group">
        about mE
        <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-[var(--accent-color)] transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
      </a>{" "}
      ?
    </section>
  )
}

export default Services