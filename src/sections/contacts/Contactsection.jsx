import ContactForm from "./ContactForm";

const Contactsection = () => {
  return (
    <div className="w-full relative">
      <div className="container-x-axis container-y-axis flex flex-col justify-center items-center gap-[48px]">
        <div className="flex flex-row justify-start items-center gap-[16px] w-full">
          <h3 className="font-[500] text-[32px] leading-[41.98px]">
            <span className="font-[500] text-[32px] leading-[41.98px] text-primary">
              #
            </span>
            contact-me
          </h3>
        </div>
        <div className="flex w-full md:flex-row flex-col justify-center md:justify-between md:items-start gap-10 md:gap-[10px]">
          <h3 className="w-full md:w-[45%] font-[500] text-[16px] leading-[26px] text-grey text-center md:text-start">
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </h3>
          <div className=" w-full md:w-[50%]">
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-[60%] xl:block hidden">
        <img
          src="/big-square.png"
          alt="big square"
          className="w-full object-contain"
        />
      </div>
    </div>
  );
};

export default Contactsection;
