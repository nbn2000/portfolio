import { Link } from "react-router-dom";
import Caramella from "/public/caramella.png";
import Cards from "src/components/navbar/Cards";

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
        <Cards array={array} />
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
