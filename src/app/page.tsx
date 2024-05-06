import About from "@/components/Home/About/About";
import Blog from "@/components/Home/Blog/Blog";
import Contact from "@/components/Home/Contact/Contact";
import Education from "@/components/Home/Education/Education";
import Experience from "@/components/Home/Experience/Experience";
import Hero from "@/components/Home/Hero/Hero";
import Projects from "@/components/Home/Projects/Projects";
import Service from "@/components/Home/Services/Services";
import Skills from "@/components/Home/Skills/Skills";


const HomePage = () => {
  return (
    <>
      <div>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Blog />
        <Service />
        <Contact />
      </div>
    </>
  );
};

export default HomePage;
