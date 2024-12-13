import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className="w-full relative">
      <div className="absolute lg:block hidden -left-[10px] top-[25%]">
        <img
          src="/left-square.png"
          alt="ten dots"
          className="w-full object-contain"
        />
      </div>
      <div className="container-x-axis container-y-axis flex flex-col justify-center items-center gap-[48px]">
        <div className="flex flex-row justify-start items-center gap-[16px] w-full">
          <h3 className="font-[500] text-[32px] leading-[41.98px] whitespace-nowrap">
            <span className="font-[500] text-[32px] leading-[41.98px] text-primary">
              #
            </span>
            about-me
          </h3>
          <div className="w-full lg:w-[350px] h-[1px] bg-[rgba(199,120,221,1)]" />
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center md:items-start gap-[10px]">
          <div className="w-full md:w-[50%] flex flex-col justify-start items-start gap-[15px] sm:gap-[27px]">
            <p className="font-[400] text-[16px] leading-[26px] text-grey">
              Hello, I’m Nodirbek!
            </p>
            <p className="font-[400] text-[16px] leading-[26px] text-grey">
              I’m a Frontend Developer building the Front-end of Websites and
              Web Applications that leads to the success of the overall product
              and sometimes I build backend of websites too. If you would like
              to see my works please let me know!
            </p>
            <p className="font-[400] text-[16px] leading-[26px] text-grey">
              I also like sharing content related to the stuff that I have
              learned over the years in Web Development so it can help other
              people of the Dev Community.
            </p>
            <p className="font-[400] text-[16px] leading-[26px] text-grey">
              I’m open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don’t hesitate to contact me.
            </p>
            <Link
              to="/about"
              className="font-[500] text-[16px] leading-[20.99px] border-solid border-[1px] border-[rgba(199,120,221,1)] px-[16px] py-[8px]"
            >
              Read more -&gt;
            </Link>
          </div>
          <div className="w-full md:w-[33%] p-6 md:p-0">
            <img
              src="/man-about-me.png"
              alt="man with hoodie"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-[60%] xl:block hidden">
        <img
          src="/twenty-dots.png"
          alt="big square"
          className="w-full object-contain"
        />
      </div>
    </div>
  );
};

export default AboutMe;
