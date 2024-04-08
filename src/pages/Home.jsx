import { Helmet } from "react-helmet-async";
import HomeView from "src/sections/home";

const Home = () => {
  return (
    <>
      <Helmet>
        <title> Home </title>
      </Helmet>
      <HomeView />
    </>
  );
};

export default Home;
