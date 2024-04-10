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
        <div className="w-full flex flex-row justify-between items-start gap-[10px]">
          <div className="w-[60%]"></div>
          <div className="w-[17%]">
            <img
              src="/public/small-rectangles.png"
              alt="small rectangles"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-full xl:block hidden">
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
