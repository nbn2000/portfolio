import { Link } from "react-router-dom";
import Cards from "src/components/Cards";
import { homeProjects } from "src/constants";

const Projects = () => {
  return (
    <div className="w-full relative">
      <div className="absolute md:block hidden -left-[10px] top-[20%]">
        <img
          src="/ten-dots.png"
          alt="ten dots"
          className="w-full object-contain"
        />
      </div>
      <div className="container-x-axis container-y-axis flex flex-col justify-center items-center gap-[48px]">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-[20px] w-full">
          <div className="flex flex-row justify-center items-center gap-[16px] w-[70%] lg:w-max">
            <h3 className="font-[500] text-[32px] leading-[41.98px]">
              <span className="font-[500] text-[32px] leading-[41.98px] text-primary">
                #
              </span>
              projects
            </h3>
            <div className="w-full lg:w-[511px] h-[1px] bg-[rgba(199,120,221,1)]" />
          </div>
          <Link to="/works" className="font-[500] text-[16px] leading-[20.99px]">
            View all ~~&gt;
          </Link>
        </div>
        <Cards array={homeProjects} />
      </div>
      <div className="absolute right-0 top-[60%] xl:block hidden">
        <img
          src="/big-square.png"
          alt="big square"
          className="w-full object-contain"
        />
      </div>
    </div>
  );
};

export default Projects;
