import About from "@/components/Home/About/About";
import Blog from "@/components/Home/Blog/Blog";
import ChooseMe from "@/components/Home/ChooseMe/ChooseMe";
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
        <Skills />
        <Projects />
        <Education />
        <ChooseMe />
        <Blog />
        <Service />
        <Contact />
      </div>
    </>
  );
};

export default HomePage;
