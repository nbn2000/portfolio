import { NotFoundIcon } from "../svg/view";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 not found</title>
      </Helmet>
      <div className="flex flex-col py-24 justify-center items-center gap-6 w-full h-full container-y-axis container-x-axis">
        <NotFoundIcon />
        <h3 className="typography-2 text-center">
          Sorry we could not found what you were looking for
        </h3>
        <h6 className="typography-4 text-center">
          Maybe you will find in home page
        </h6>
        <Link to="/">
          <button className="bg-black text-white rounded-none">
            GO TO HOME
          </button>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
