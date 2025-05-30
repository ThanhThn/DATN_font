import React from "react";
import { IIcon } from "../../Icon";
import Svg, { Path } from "react-native-svg";

const Hexagon: React.FC<IIcon> = ({ className }) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <Path
        d="M10.5 3.86603C11.4282 3.33013 12.5718 3.33013 13.5 3.86603L18.2942 6.63397C19.2224 7.16987 19.7942 8.16025 19.7942 9.23205V14.7679C19.7942 15.8397 19.2224 16.8301 18.2942 17.366L13.5 20.134C12.5718 20.6699 11.4282 20.6699 10.5 20.134L5.70577 17.366C4.77757 16.8301 4.20577 15.8397 4.20577 14.7679V9.23205C4.20577 8.16025 4.77757 7.16987 5.70577 6.63397L10.5 3.86603Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default Hexagon;
