import { Helmet } from "react-helmet-async";
import AboutView from "src/sections/about";

const About = () => {
  return (
    <>
      <Helmet>
        <title> Nodirbek | About </title>
        <meta
          name="description"
          content="1111111Welcome to the portfolio of Nodirbek Makhmudov, a skilled front-end developer passionate about crafting beautiful and functional web experiences. Explore my projects and skills here."
        />
        <meta
          property="og:description"
          content="1111xWelcome to the portfolio of Nodirbek Makhmudov, a skilled front-end developer passionate about crafting beautiful and functional web experiences. Explore my projects and skills here."
        />
      </Helmet>
      <AboutView />
    </>
  );
};

export default About;
