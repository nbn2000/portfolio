import { Link } from "react-router-dom";
import {
  WhiteLogoSmall,
  Github,
  Linkedin,
  Twitter,
  Telegram,
} from "src/svg/view";

const Footer = () => {
  return (
    <footer className="py-[32px] w-full border-t-[rgba(171,178,191,1)] border-solid border-t-[1px]">
      <div className="container-x-axis  flex flex-col justify-center items-center gap-[48px]">
        <div className="flex flex-col md:flex-row justify-center md:justify-between text-center md:items-start gap-[20px] flex-wrap md:flex-nowrap w-full">
          <div className="flex flex-col justify-center md:justify-start items-center md:items-start gap-[16px]">
            <div className="flex flex-row justify-center md:justify-start flex-wrap items-center md:items-start gap-[24px]">
              <div className="flex flex-row justify-center items-center gap-[9px]">
                <WhiteLogoSmall />
                <span className="font-[500] text-[16px] leading-[20.99px]">
                  Nodirbek
                </span>
              </div>
              <span className="text-grey font-[400] text-[16px] leading-[20.99px]">
                makhmudov.work4744@inbox.ru
              </span>
            </div>
            <span className="font-[400] text-[16px] leading-[20.99px] ">
              Back-end and front-end developer
            </span>
          </div>
          <div className="flex flex-col justify-start  items-center gap-[12px]">
            <span className="font-[500] text-[24px] leading-[31.49px]">
              Media
            </span>
            <div className="flex flex-row justify-center items-center gap-[8px]">
              <Link>
                <Github />
              </Link>
              <Link>
                <Linkedin />
              </Link>
              <Link>
                <Twitter />
              </Link>
              <Link>
                <Telegram />
              </Link>
            </div>
          </div>
        </div>
        <span className="font-[400] text-[16px] leading-[20.99px] text-grey">
          © Copyright 2022. Made by Nodirbek
        </span>
      </div>
    </footer>
  );
};

export default Footer;
