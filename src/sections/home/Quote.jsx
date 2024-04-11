import { QuoteIcon } from "src/svg/view";

const Quote = () => {
  return (
    <div className="relative  container-y-axis">
      <div className="max-w-[720px] mx-auto w-full flex flex-col justify-end items-end px-[3px]">
        <div className="border-[rgba(171,178,191,1)] border-solid border-[1px] p-[32px] relative">
          <div className="px-[8px] py-[4px] bg-[rgba(40,44,51,1)] absolute -top-[20px]">
            <QuoteIcon />
          </div>
          <span className="font-[500] text-[24px] leading-[31.49px]">
            With great power comes great electricity bill
          </span>
          <div className="px-[8px] py-[4px] bg-[rgba(40,44,51,1)] absolute -bottom-[20px] right-1">
            <QuoteIcon />
          </div>
        </div>
        <div className="border-[rgba(171,178,191,1)] border-solid border-[1px] p-[16px] border-t-0">
          <span className="font-[400] text-[24px] leading-[31.49px]">
            - Dr. Who
          </span>
        </div>
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block">
        <img src="/square.png" alt="square shape" />
      </div>
    </div>
  );
};

export default Quote;
