import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Cards = ({ array }) => {
  return (
    <div className="grid grid-cols-1 gap-[16px] w-full place-items-start justify-between sm:grid-cols-2 lg:grid-cols-3">
      {array.map((i, idx) => (
        <div key={idx} className="max-w-[330px] w-full">
          <div className="h-[150px] w-full border-solid border-[rgba(171,178,191,1)] border-[1px]">
            <img
              src={i.img}
              alt={`${i.img}`}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="flex flex-row flex-wrap justify-start items-start w-full gap-[8px] border-solid border-[rgba(171,178,191,1)] border-[1px] border-t-0 border-b-0 p-[8px]">
              {i.techs.map((item, index) => (
                <span
                  key={index}
                  className="font-[400] text-[16px] leading-[20.99px] text-grey"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="p-[16px] flex flex-col justify-between items-start gap-[16px] border-solid border-[rgba(171,178,191,1)] border-[1px]">
              <span className="font-[500] text-[24px] leading-[31.49px]">
                {i.name}
              </span>
              <p className="font-[400] text-[12px] leading-[15px] text-grey">
                {i.desc}
              </p>
              <div className="flex flex-row justify-start items-start gap-[16px]">
                {i.live && (
                  <Link
                    className="px-[16px] py-[8px] border-[1px] border-solid border-[rgba(199,120,221,1)] font-[500] text-[16px] leading-[20.99px]"
                    to={i.live}
                    target="_blank"
                  >
                    {"Live <~>"}
                  </Link>
                )}
                {i.code && (
                  <Link
                    to={i.code}
                    target="_blank"
                    className="px-[16px] py-[8px] border-[1px] border-solid border-[rgba(171,178,191,1)] font-[500] text-[16px] leading-[20.99px]"
                  >{`Cached >=`}</Link>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

Cards.propTypes = {
  array: PropTypes.array,
};

export default Cards;
