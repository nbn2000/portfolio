import { Link } from "react-router-dom";
import Caramella from "/public/caramella.png";

const Projects = () => {
  return (
    <div className="w-full relative">
      <div className="absolute md:block hidden -left-[10px] top-[20%]">
        <img
          src="/public/ten-dots.png"
          alt="ten dots"
          className="w-full object-contain"
        />
      </div>
      <div className="container-x-axis container-y-axis flex flex-col justify-center items-center gap-[48px]">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-[20px] w-full">
          <div className="flex flex-row justify-center items-center gap-[16px] w-[70%] lg:w-max">
            <h3 className="font-[500] text-[32px] leading-[41.98px]">
              <span className="font-[500] text-[32px] leading-[41.98px] text-primary">
                #
              </span>
              projects
            </h3>
            <div className="w-full lg:w-[511px] h-[1px] bg-[rgba(199,120,221,1)]" />
          </div>
          <Link className="font-[500] text-[16px] leading-[20.99px]">
            View all ~~&gt;
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-[16px] w-full place-items-center justify-between sm:grid-cols-2 lg:grid-cols-3">
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
                <div className="p-[16px] flex flex-col justify-between items-start h-[280px] gap-[16px] border-solid border-[rgba(171,178,191,1)] border-[1px]">
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
                      >
                        {"Live <~>"}
                      </Link>
                    )}
                    {i.code && (
                      <Link
                        to={i.code}
                        className="px-[16px] py-[8px] border-[1px] border-solid border-[rgba(171,178,191,1)] font-[500] text-[16px] leading-[20.99px]"
                      >{`Cached >=`}</Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute right-0 top-[60%] xl:block hidden">
        <img
          src="/public/big-square.png"
          alt="big square"
          className="w-full object-contain"
        />
      </div>
    </div>
  );
};

const array = [
  {
    img: Caramella,
    techs: ["HTML", "Tailwind", "Nextjs"],
    name: "Caramella",
    desc: "Caramella: An ecommerce platform specializing in delectable pastries. Seamlessly integrated with Telegram for registration and online orders. Includes an intuitive admin panel for easy management.",
    live: "https://caramella-eng.vercel.app/",
    code: "https://github.com/nbn2000/caramella",
  },
  {
    img: Caramella,
    techs: ["HTML", "Tailwind", "Nextjs"],
    name: "Caramella",
    desc: "Caramella: An ecommercesssssss sssssssss ssssssssssssssssss ssssssssssssssssss platform specializing in delectable pastries. Seamlessly integrated with Telegram for registration and online orders. Includes an intuitive admin panel for easy management.",
    live: "https://caramella-eng.vercel.app/",
    code: "https://github.com/nbn2000/caramella",
  },
  {
    img: Caramella,
    techs: ["HTML", "Tailwind", "Nextjs"],
    name: "Caramella",
    desc: "Caramella: An ecommerce platform specializing in delectable pastries. Seamlessly integrated with Telegram for registration and online orders. Includes an intuitive admin panel for easy management.",
    live: "https://caramella-eng.vercel.app/",
    code: "https://github.com/nbn2000/caramella",
  },
];

export default Projects;
