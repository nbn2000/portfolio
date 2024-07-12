import { Helmet } from "react-helmet-async";
import AboutView from "src/sections/about";

const About = () => {
  return (
    <>
      <Helmet>
        <title> Nodirbek | About </title>
      </Helmet>
      <AboutView />
    </>
  );
};

export default About;
