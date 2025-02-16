import React from "react";
import { IIcon } from "../../icon";

const Search: React.FC<IIcon> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M20 20L16.4153 16.4153M16.4153 16.4153C17.7314 15.0992 18.5455 13.281 18.5455 11.2727C18.5455 7.25611 15.2893 4 11.2727 4C7.25611 4 4 7.25611 4 11.2727C4 15.2893 7.25611 18.5455 11.2727 18.5455C13.281 18.5455 15.0992 17.7314 16.4153 16.4153Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Search;
