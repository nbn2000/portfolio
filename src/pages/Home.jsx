import { Helmet } from "react-helmet";
import HomeView from "src/sections/home";

const Home = () => {
  return (
    <>
      <Helmet>
        <title> Nodirbek | Home </title>
        <meta
          name="description"
          content="Home Welcome to the portfolio of Nodirbek Makhmudov, a skilled front-end developer passionate about crafting beautiful and functional web experiences. Explore my projects and skills here."
        />
        <meta
          name="twitter:description"
          content="Home Twitter Welcome to the portfolio of Nodirbek Makhmudov, a skilled front-end developer passionate about crafting beautiful and functional web experiences. Explore my projects and skills here."
        />
        <meta
          property="og:description"
          content="Home OG Welcome to the portfolio of Nodirbek Makhmudov, a skilled front-end developer passionate about crafting beautiful and functional web experiences. Explore my projects and skills here."
        />
      </Helmet>
      <HomeView />
    </>
  );
};

export default Home;
