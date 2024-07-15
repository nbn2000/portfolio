import { Helmet } from "react-helmet-async";
import HomeView from "src/sections/home";

const Home = () => {
  return (
    <>
      <Helmet>
        <title> Nodirbek | Home </title>
      </Helmet>
      <HomeView />
    </>
  );
};

export default Home;
