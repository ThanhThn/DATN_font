import React from "react";
import { IIcon } from "../../icon";

const Triangle: React.FC<IIcon> = ({ className }) => {
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
        d="M6.07381 21H17.9262C20.208 21 21.6545 18.5536 20.5548 16.5542L13.7524 4.18624C12.9926 2.80469 11.0074 2.80469 10.2476 4.18624L3.44516 16.5542C2.34552 18.5536 3.79201 21 6.07381 21Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Triangle;
