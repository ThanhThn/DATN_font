import React from "react";
import { IIcon } from "../../icon";
import Svg, { Path } from "react-native-svg";

const Wifi: React.FC<IIcon> = ({
  className,
  currentColor,
  strokeWidth = 1.5,
}) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <Path
        d="M6.34326 10.59C6.8091 10.0905 7.37236 9.69169 7.99828 9.41823C8.62421 9.14477 9.29929 9.0024 9.98234 9.00001C10.6654 8.99763 11.3418 9.13525 11.9696 9.40434C12.5974 9.67342 13.1636 10.0683 13.6329 10.5645M4.14941 7.54405C4.89476 6.74477 5.79597 6.10668 6.79745 5.66914C7.79893 5.2316 8.87935 5.00389 9.97223 5.00007C11.0651 4.99626 12.1471 5.2164 13.1516 5.64693C14.1561 6.07746 15.062 6.70924 15.8129 7.5033M1.22363 4.81605C2.34165 3.61712 3.69347 2.65998 5.19569 2.00367C6.69791 1.34737 8.31878 1.0058 9.9581 1.00007C11.5974 0.994351 13.2204 1.32459 14.7272 1.97039C16.234 2.61619 17.5923 3.56389 18.7186 4.75498M10 15C9.44772 15 9 14.5523 9 14C9 13.4477 9.44772 13 10 13C10.5523 13 11 13.4477 11 14C11 14.5523 10.5523 15 10 15Z"
        stroke={currentColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export { Wifi };
