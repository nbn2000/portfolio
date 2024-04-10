import SkillContainer from "src/components/navbar/SkillContainer";

const Skills = () => {
  return (
    <div className="w-full relative">
      <div className="container-x-axis container-y-axis flex flex-col justify-center items-center gap-[48px]">
        <div className="flex flex-row justify-start items-center gap-[16px] w-full">
          <h3 className="font-[500] text-[32px] leading-[41.98px]">
            <span className="font-[500] text-[32px] leading-[41.98px] text-primary">
              #
            </span>
            skills
          </h3>
        </div>
        <div className="w-full flex flex-row flex-wrap lg:flex-nowrap justify-center md:justify-end items-center md:items-start gap-[16px]">
          {array.map((i, idx) => (
            <SkillContainer header={i.header} body={i.body} key={idx} />
          ))}
        </div>
      </div>
      <div className="absolute right-0 top-0 xl:block hidden">
        <img
          src="/public/fifteen-dots.png"
          alt="big square"
          className="w-full object-contain rotate-180"
        />
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
