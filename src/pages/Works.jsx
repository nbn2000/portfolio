import { Helmet } from "react-helmet-async";
import WorksView from "src/sections/works";

const Works = () => {
  return (
    <>
      <Helmet>
        <title> Nodirbek | Works </title>
      </Helmet>
      <WorksView />
    </>
  );
};

export default Works;
