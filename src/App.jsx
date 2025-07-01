// import packages
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import components
import SectionWrapper from './components/SectionWrapper';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/pages/About';
import Services from './components/sections/Services';
import TechStack from './components/sections/TechStack';
import Projects from './components/sections/Projects';
import Journey from './components/sections/Journey';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';

// import data
import { sectionsData } from './data/sectionsData';
import { pageData } from './data/pageData';

const componentList = {
  Services,
  TechStack,
  Projects,
  Journey,
  Contact
}

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Hero/>
      <Routes>
        {/* Home */}
        <Route
          path='/'
          element={
            <>
              {/*  
              *** Dynamically Rendering HomePage for Scaling
              */}
              {sectionsData.map((section) => {
                const Component = componentList[section.component];

                // in case want to put limit to content
                const sectionContent = section.limit ? (
                  <Component limit={section.limit}/>
                ) : (
                  <Component />
                )

                return section.title || section.subtitle ? (
                  <SectionWrapper
                    key={section.id}
                    title={section.title}
                    subtitle={section.subtitle}
                    link={section.link}
                  >
                    {sectionContent}
                  </SectionWrapper>
                ) : (
                  <Component key={section.id}/>
                )
              })}
            </>
          }
        />

        {/* About */}
        <Route
          path="/about"
          element={
            <SectionWrapper
              title={pageData.about.title}
              subtitle={pageData.about.subtitle}
            >
              <About />
            </SectionWrapper>
          }
        />

        {/* Projects Page */}
        <Route
          path="/projects"
          element={
            <SectionWrapper
              title={pageData.projects.title}
              subtitle={pageData.projects.subtitle}
            >
              <Projects />
            </SectionWrapper>
          }
        />

        {/* Journey Page */}
        <Route
          path="/journey"
          element={
            <SectionWrapper
              title={pageData.journey.title}
              subtitle={pageData.journey.subtitle}
            >
              <Journey />
            </SectionWrapper>
          }
        />

      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
