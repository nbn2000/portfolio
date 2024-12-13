import AboutMe from "./AboutMe";
import Contacts from "./Contacts";
import Header from "./Header";
// import Projects from "./Projects";
import Quote from "./Quote";
import Skills from "./Skills";

const HomeView = () => {
  return (
    <>
      <Header />
      <Quote />
      {/* <Projects /> */}
      <Skills />
      <AboutMe />
      <Contacts />
    </>
  );
};

export default HomeView;
