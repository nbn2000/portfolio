import {
  Hashnode,
  Github,
  Linkedin,
  Telegram,
  Whatsapp,
  Twitter,
  Mail,
} from "src/svg/view";
import { Link } from "react-router-dom";

const Media = () => {
  return (
    <div className="w-full relative">
      <div className="absolute left-0 top-0 xl:block hidden">
        <img
          src="/public/twelve-dots.png"
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
            all-media
          </h3>
        </div>
        <div className="w-full flex flex-row flex-wrap justify-start items-center gap-[16px]">
          <Link className="flex flex-row justify-center items-center gap-[5px]">
            <Hashnode />
            <span className="font-[400] text-[16px] leading-[20.99px] text-grey">
              nodibek-makhmudov.hashnode.dev
            </span>
          </Link>
          <Link className="flex flex-row justify-center items-center gap-[5px]">
            <Mail />
            <span className="font-[400] text-[16px] leading-[20.99px] text-grey">
              makhmudov.work4744@inbox.ru
            </span>
          </Link>
          <Link className="flex flex-row justify-center items-center gap-[5px]">
            <Github />
            <span className="font-[400] text-[16px] leading-[20.99px] text-grey">
              nbn2000
            </span>
          </Link>
          <Link className="flex flex-row justify-center items-center gap-[5px]">
            <Linkedin />
            <span className="font-[400] text-[16px] leading-[20.99px] text-grey">
              in/nodirbek-makhmudov
            </span>
          </Link>
          <Link className="flex flex-row justify-center items-center gap-[5px]">
            <Telegram />
            <span className="font-[400] text-[16px] leading-[20.99px] text-grey">
              @nodirbek4744
            </span>
          </Link>
          <Link className="flex flex-row justify-center items-center gap-[5px]">
            <Whatsapp />
            <span className="font-[400] text-[16px] leading-[20.99px] text-grey">
              Nodirbek
            </span>
          </Link>
          <Link className="flex flex-row justify-center items-center gap-[5px]">
            <Twitter />
            <span className="font-[400] text-[16px] leading-[20.99px] text-grey">
              @Nodirbe77981460
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Media;
