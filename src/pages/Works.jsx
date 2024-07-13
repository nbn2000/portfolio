import { Helmet } from "react-helmet-async";
import WorksView from "src/sections/works";

const Works = () => {
  return (
    <>
      <Helmet>
        <title> Nodirbek | Works </title>
        <meta
          name="description"
          content="Works Welcome to the portfolio of Nodirbek Makhmudov, a skilled front-end developer passionate about crafting beautiful and functional web experiences. Explore my projects and skills here."
        />
      </Helmet>
      <WorksView />
    </>
  );
};

export default Works;
