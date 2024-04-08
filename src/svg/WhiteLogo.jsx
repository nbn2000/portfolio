const WhiteLogo = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={52}
      height={52}
      fill="none"
      {...props}
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M39 0H26v13H0v39h26V39h26V0H39ZM13 39h13V26h13V13H26v13H13v13Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default WhiteLogo;
