import SkillContainer from "src/components/navbar/SkillContainer";

const Skills = () => {
  return (
    <div className="container-x-axis container-y-axis flex flex-col justify-center items-center gap-[48px]">
      <div className="flex flex-row justify-start items-center gap-[16px] w-full">
        <h3 className="font-[500] text-[32px] leading-[41.98px]">
          <span className="font-[500] text-[32px] leading-[41.98px] text-primary">
            #
          </span>
          skills
        </h3>
        <div className="w-full lg:w-[280px] h-[1px] bg-[rgba(199,120,221,1)]" />
      </div>
      <div className="flex flex-col justify-center md:justify-between items-center gap-[59px] md:gap-[10px] w-full md:flex-row">
        <div className="w-full md:w-[34%]">
          <img
            src="/public/group-rectangles.png"
            alt="group of rectangles"
            className="w-full object-contain"
          />
        </div>
        <div className="w-full md:w-[57%] flex flex-row flex-wrap justify-center md:justify-end items-center md:items-start gap-[16px]">
          {array.map((i, idx) => (
            <SkillContainer header={i.header} body={i.body} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

const array = [
  {
    header: "Languages",
    body: ["TypeScript,", "JavaScript"],
  },
  {
    header: "Databases",
    body: ["MongoDB,", "Firebase,", "MySQL"],
  },
  {
    header: "Tools",
    body: [
      "VSCode,",
      "WebStorm,",
      "Kali Linux,",
      "Windows,",
      "Figma,",
      "Git,",
      "Github,",
      "GitLab,",
      "Jira,",
    ],
  },
  {
    header: "Frameworks",
    body: ["Tailwind CSS,", "Expressjs,", "Nextjs,", "Bootstrap"],
  },
  {
    header: "Libraries",
    body: [
      "React,",
      "RTK Query,",
      "Redux,",
      "MaterialUI,",
      "Styled Components,",
      "Emotion,",
      "NPM,",
      "Tailwind Styled Components...",
    ],
  },
  {
    header: "Other",
    body: ["HTML,", "CSS,", "SCSS,", "REST"],
  },
];

export default Skills;
