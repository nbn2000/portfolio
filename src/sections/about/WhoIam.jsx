const WhoIam = () => {
  return (
    <div className="w-full relative">
      <div className="absolute lg:block hidden left-[1%] top-[55%]">
        <img
          src="/public/twelve-dots.png"
          alt="ten dots"
          className="w-full object-contain"
        />
      </div>
      <div className="container-x-axis container-y-axis flex flex-col-reverse md:flex-row justify-center md:justify-between items-center md:items-center gap-[10px]">
        <div className="w-full md:w-[50%] flex flex-col justify-start items-start gap-[15px] sm:gap-[27px]">
          <p className="font-[400] text-[16px] leading-[26px] text-grey">
            Hello, I’m Nodirbek!
          </p>
          <p className="font-[400] text-[16px] leading-[26px] text-grey">
            I’m a Frontend Developer building the Front-end of Websites and Web
            Applications that leads to the success of the overall product and
            sometimes I build backend of websites too. Check out some of my work
            in the Projects section.
          </p>
          <p className="font-[400] text-[16px] leading-[26px] text-grey">
            I also like sharing content related to the stuff that I have learned
            over the years in Web Development so it can help other people of the
            Dev Community.
          </p>
          <p className="font-[400] text-[16px] leading-[26px] text-grey">
            I’m open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don’t hesitate to contact me.
          </p>
        </div>
        <div className="w-full md:w-[33%] p-6 md:p-0">
          <img
            src="/public/man-about-me.png"
            alt="man with hoodie"
            className="w-full object-contain"
          />
        </div>
      </div>
      <div className="absolute right-0 top-[30%] xl:block hidden">
        <img
          src="/public/big-square.png"
          alt="big square"
          className="w-full object-contain"
        />
      </div>
    </div>
  );
};

export default WhoIam;
