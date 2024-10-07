const Header = () => {
  return (
    <header className="container-x-axis container-y-axis flex flex-col justify-start items-start gap-[14px]">
      <h1 className="font-[600] text-[32px] leading-[41.98px]">
        <span className="font-[600] text-[32px] leading-[41.98px] text-primary">
          /
        </span>
        projects
      </h1>
      <span className="font-[400] text-[16px] leading-[20.99px]">
        List of my projects
      </span>
      <span className="font-[400] text-[16px] leading-[26px] text-grey">
        As a full-stack developer, my recent work has focused on building and
        scaling applications for companies. While my personal projects are from
        a few years ago, they represent the foundation of my skills and growth.
        If you&apos;re interested in seeing my past work or discussing my more
        recent projects, feel free to reach out.
      </span>
    </header>
  );
};

export default Header;
