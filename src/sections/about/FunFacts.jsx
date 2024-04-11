import { funFacts } from "src/constants/funFacts";

const FunFacts = () => {
  return (
    <div className="w-full relative">
      <div className="absolute left-0 top-1/2 xl:block hidden">
        <img
          src="/public/left-square.png"
          alt="big square"
          className="w-full object-contain rotate-180"
        />
      </div>
      <div className="container-x-axis container-y-axis flex flex-col justify-center items-center gap-[48px]">
        <div className="flex flex-row justify-start items-center gap-[16px] w-full">
          <h3 className="font-[500] text-[32px] leading-[41.98px]">
            <span className="font-[500] text-[32px] leading-[41.98px] text-primary">
              #
            </span>
            my-fun-facts
          </h3>
        </div>
        <div className="w-full flex md:flex-row flex-col justify-center md:justify-between text-center md:items-start gap-10 md:gap-[10px] xl:px-[50px]">
          <div className="w-full md:w-[70%] flex flex-row flex-wrap justify-start items-start gap-[16px] ">
            {funFacts.map((i, idx) => (
              <div
                key={`div-${idx}`}
                className="border-[rgba(171,178,191,1)] border-solid border-[1px] p-[8px] *:font-[400] *:text-grey *:text-[16px] *:leading-[20.99px]"
              >
                {i}
              </div>
            ))}
          </div>
          <div className="hidden md:w-[17%] md:block">
            <img
              src="/public/small-rectangles.png"
              alt="small rectangles"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-[70%] xl:block hidden">
        <img
          src="/public/twenty-dots.png"
          alt="big square"
          className="w-full object-contain rotate-180"
        />
      </div>
    </div>
  );
};
export default FunFacts;
