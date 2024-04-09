import Cards from "src/components/navbar/Cards";
import Caramella from "/public/caramella.png";

const InComplete = () => {
  return (
    <div className="w-full relative">
      <div className="absolute md:block hidden left-0 top-[2%]">
        <img
          src="/public/left-square.png"
          alt="ten dots"
          className="w-full object-contain"
        />
      </div>
      <div className="absolute md:block hidden left-0 top-[40%]">
        <img
          src="/public/fifteen-dots.png"
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
              projects-in-process
            </h3>
          </div>
        </div>
        <Cards array={array} />
      </div>
      <div className="absolute right-0 top-[15%] xl:block hidden">
        <img
          src="/public/twenty-dots.png"
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
    desc: "Caramella: An ecommerce platform specializing in delectable pastries. Seamlessly integrated with Telegram for registration and online orders. Includes an intuitive admin panel for easy management.",
    live: "https://caramella-eng.vercel.app/",
    code: "https://github.com/nbn2000/caramella",
  },
];

export default InComplete;
