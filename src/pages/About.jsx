import { Helmet, HelmetProvider } from "react-helmet-async";
import AboutView from "src/sections/about";

const About = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title> Nodirbek | About </title>
        <meta
          name="description"
          content="About Welcome to the portfolio of Nodirbek Makhmudov, a skilled front-end developer passionate about crafting beautiful and functional web experiences. Explore my projects and skills here."
        />
        <meta
          name="twitter:description"
          content="About Twitter Welcome to the portfolio of Nodirbek Makhmudov, a skilled front-end developer passionate about crafting beautiful and functional web experiences. Explore my projects and skills here."
        />
        <meta
          property="og:description"
          content="About OG Welcome to the portfolio of Nodirbek Makhmudov, a skilled front-end developer passionate about crafting beautiful and functional web experiences. Explore my projects and skills here."
        />
      </Helmet>
      <AboutView />
    </HelmetProvider>
  );
};

export default About;
