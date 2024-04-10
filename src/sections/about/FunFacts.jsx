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
            {array.map((i, idx) => (
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

const array = [
  <h5 key={1}>I like winter more than summer</h5>,
  <h5 key={2}>I often bike with my friends</h5>,
  <h5 key={3}>
    I like <span>pizza </span>and <span>pasta</span>
  </h5>,
  <h5 key={4}>
    I was in <span>Egypt</span>,<span> Poland </span>
    and
    <span> Turkey</span>
  </h5>,
  <h5 key={5}>
    My favorite movie is <span>The Green Mile</span>
  </h5>,
  <h5 key={6}>I am still in school</h5>,
  <h5 key={7}>I don’t have any siblings</h5>,
];
export default FunFacts;
