import PropTypes from "prop-types";
const SkillContainer = ({ header, body }) => {
  return (
    <div className="border-solid border-[rgba(171,178,191,1)] border-[1px] max-w-[196px]">
      <div className="border-b-solid border-b-[rgba(171,178,191,1)] border-b-[1px] p-[8px]">
        <span className="font-[600] text-[16px] leading-[20.99px]">
          {header}
        </span>
      </div>
      <div className="flex flex-row flex-wrap justify-start items-start  gap-[8px] p-[8px]">
        {body.map((i, idx) => (
          <span
            key={idx}
            className="text-grey font-[400] text-[16px] leading-[20.99px]"
          >
            {i}
          </span>
        ))}
      </div>
    </div>
  );
};

SkillContainer.propTypes = {
  header: PropTypes.string,
  body: PropTypes.array,
};
export default SkillContainer;
