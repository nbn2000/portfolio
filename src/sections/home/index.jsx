import AboutMe from "./AboutMe";
import Header from "./Header";
import Projects from "./Projects";
import Quote from "./Quote";
import Skills from "./Skills";

const HomeView = () => {
  return (
    <>
      <Header />
      <Quote />
      <Projects />
      <Skills />
      <AboutMe />
    </>
  );
};

export default HomeView;
