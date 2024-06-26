import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container-x-axis container-y-axis flex flex-col md:flex-row justify-between items-center gap-[20px]">
        <div className="w-full md:w-[52%] flex flex-col justify-center md:justify-start items-center md:items-start gap-[32px]">
          <h1 className="*:font-[600] *:text-[32px] *:leading-[41.98px] text-center md:text-start">
            <span className="text-white">Nodirbek is a</span>{" "}
            <span className="text-primary">front-end developer</span>{" "}
            <span className="text-white">and</span>{" "}
            <span className="text-primary">backend-end developer</span>
          </h1>
          <div className="w-full md:w-[70%] flex flex-col justify-center items-center md:justify-start md:items-start gap-[24px]">
            <span className="font-[400] text-[16px] leading-[25px] text-grey text-center md:text-start">
              He crafts responsive websites where technologies meet creativity
            </span>
            <Link
              to="/contacts"
              className="px-[16px] py-[8px] text-[16px] font-[500] leading-[20.99px] border-solid border-[1px] border-[rgba(199,120,221,1)]"
            >
              Contact me!!
            </Link>
          </div>
        </div>
        <div className="md:w-[45%] w-full ">
          <div className="w-full">
            <img
              src="/man.png"
              alt="man sitting"
              className="max-w-[469px] w-full "
            />
          </div>
          <div className="border-[rgba(171,178,191,1)]  border-solid  border-[1px] w-full max-w-full p-[8px] flex justify-center items-center gap-[10px]">
            <div className="w-[16px] min-w-[16px] h-[16px] bg-primary" />
            <h4 className="font-[500] text-[16px] leading-[20.99px] text-grey">
              Currently{" "}
              <span className="font-[500] text-[16px] leading-[20.99px] text-white">
                open{" "}
              </span>
              for new job opportunities
            </h4>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
