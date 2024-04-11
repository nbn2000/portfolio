import Cards from "src/components/Cards";
import { inCompleteProjects } from "src/constants";

const InComplete = () => {
  return (
    <div className="w-full relative">
      <div className="absolute md:block hidden left-0 top-[2%]">
        <img
          src="/left-square.png"
          alt="ten dots"
          className="w-full object-contain"
        />
      </div>
      <div className="absolute md:block hidden left-0 top-[40%]">
        <img
          src="/fifteen-dots.png"
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
              projects-in-process
            </h3>
          </div>
        </div>
        <Cards array={inCompleteProjects} />
      </div>
      <div className="absolute right-0 top-[15%] xl:block hidden">
        <img
          src="/twenty-dots.png"
          alt="big square"
          className="w-full object-contain"
        />
      </div>
    </div>
  );
};

export default InComplete;
