import { Link } from "react-router-dom";
import { Mail, Whatsapp, Telegram } from "src/svg/view";

const Contacts = () => {
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
          <div className="w-full lg:w-[300px] h-[1px] bg-[rgba(199,120,221,1)]" />
        </div>
        <div className="flex flex-col md:flex-row md:justify-between justify-center w-full items-center md:items-start gap-[10px]">
          <p className="font-[500] text-[16px] leading-[20.99px] text-grey max-w-[505px] w-full">
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </p>
          <div className="flex  overflow-x-auto w-[260px]  sm:w-max vertical-scroll flex-col justify-start items-start gap-[16px] p-[16px] border-[1px] border-solid border-[rgba(171,178,191,1)]">
            <span className="font-[600] text-[16px] leading-[20.99px]">
              Message me here
            </span>
            <div className="flex whitespace-nowrap flex-col justify-start items-start gap-[8px]">
              <Link
                to="mailto:makhmudov.work4744@inbox.ru"
                className="flex flex-row justify-center items-center gap-[5px]"
              >
                <Mail />
                <span className="font-[400] text-[16px] leading-[20.99px] text-grey">
                  makhmudov.work4744@inbox.ru
                </span>
              </Link>
              <Link
                to="https://t.me/Nodirbek4744"
                className="flex flex-row justify-center items-center gap-[5px]"
              >
                <Telegram />
                <span className="font-[400] text-[16px] leading-[20.99px] text-grey">
                  @nodirbek4744
                </span>
              </Link>
              <Link
                to="https://wa.me/998993764744"
                className="flex flex-row justify-center items-center gap-[5px]"
              >
                <Whatsapp />
                <span className="font-[400] text-[16px] leading-[20.99px] text-grey ">
                  Nodirbek
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
