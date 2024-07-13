import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 not found</title>
      </Helmet>
      <div className="flex flex-col py-24 justify-center items-center gap-6 w-full h-full container-y-axis container-x-axis">
        <h1 className="font-[800] text-[70px] leading-[90px] tracking-[20px] text-grey">
          404
        </h1>
        <h3 className="font-[400] text-[16px] leading-[20.99px] text-center">
          Sorry we could not found what you were looking for
        </h3>
        <h6 className="font-[400] text-[16px] leading-[20.99px] text-center">
          Maybe you will find in home page
        </h6>
        <Link className="px-[16px] py-[8px] text-[16px] font-[500] leading-[20.99px] border-solid border-[1px] border-[rgba(199,120,221,1)]">
          go to home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
