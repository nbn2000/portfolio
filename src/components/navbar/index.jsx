import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { WhiteLogo, Github, Linkedin, Twitter } from "src/svg/view";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  return (
    <div className="relative">
      <div className="hidden absolute md:flex flex-col justify-center items-center gap-[8px] left-2 top-0 pointer-events-none md:pointer-events-auto">
        <hr className="h-[191px] w-[1px] bg-grey text-grey" />
        <Link>
          <Github />
        </Link>
        <Link>
          <Linkedin />
        </Link>
        <Link>
          <Twitter />
        </Link>
      </div>
      <nav className="w-full container-x-axis mx-auto flex flex-row md:flex-row items-center justify-between p-4 gap-3">
        <Link
          href="/"
          className="flex flex-row justify-center items-center gap-[8px] "
        >
          <WhiteLogo />{" "}
          <span className="font-[700] text-[16px] leading-[20.99px]">
            Nodirbek
          </span>
        </Link>
        <div>
          <button
            className="w-14 h-14 relative md:hidden "
            onClick={() => setOpen(!open)}
          >
            <div className="block w-5 absolute left-6 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
              <span
                className={`block absolute h-0.5 w-7 text-white bg-current transform transition duration-500 ease-in-out ${
                  open ? "rotate-45 -translate-y-[0px]" : "-translate-y-[12px]"
                }`}
              ></span>
              <span
                className={`block absolute h-0.5 w-5 text-white bg-current transform transition duration-500 ease-in-out ${
                  open ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block absolute h-0.5 w-7 text-white bg-current transform transition duration-500 ease-in-out ${
                  open ? "-rotate-45 translate-y-[0px]" : "translate-y-[12px]"
                }`}
              ></span>
            </div>
          </button>
          <div
            className={`w-[250px] md:static fixed right-0 p-5 z-50 bg-[rgba(40,44,51,1)] transition-opacity duration-700 px-[16px] md:h-full bg-[rgba(40, 44, 51, 1)] md:opacity-100 md:block md:w-auto flex flex-col justify-start shadow-box md:shadow-none  ${
              open ? "opacity-100" : "opacity-0"
            }`}
            id="navbar-dropdown"
          >
            <ul
              className={`flex flex-col w-full md:flex-row gap-[32px] justify-end items-start md:justify-center md:items-center`}
            >
              {array.map((i, idx) => (
                <li key={idx}>
                  <Link href={i.link}>
                    <span className="font-[400] text-[16px] text-primary leading-[20.99px]">
                      #
                    </span>
                    <span
                      className={`font-[400] text-[16px] ${
                        location.pathname === i.link
                          ? "text-white"
                          : "text-grey"
                      } leading-[20.99px] hover:text-white`}
                    >
                      {i.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="w-full md:hidden flex flex-row justify-center items-center gap-[8px] h-[64px]">
              <Link>
                <Github />
              </Link>
              <Link>
                <Linkedin />
              </Link>
              <Link>
                <Twitter />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

const array = [
  { link: "/", name: "home" },
  { link: "/works", name: "works" },
  { link: "/about-me", name: "about-me" },
  { link: "/contacts", name: "contacts" },
];

export default Navbar;
