import React from "react";
import { IIcon } from "../../Icon";
import Svg, { Path } from "react-native-svg";

const Phone: React.FC<IIcon> = ({
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
        d="M13.9157 20.2681L11.8489 18.8627C9.20932 17.0678 6.93225 14.7907 5.1373 12.1511L3.73188 10.0843C2.47798 8.24028 2.87204 5.73943 4.63223 4.3704L5.53514 3.66814C6.98923 2.53718 9.09777 2.87934 10.1196 4.41209L10.5588 5.07092C10.9656 5.68114 11.0143 6.46257 10.6863 7.11854C10.0829 8.32531 10.1139 9.7521 10.7692 10.9315L10.9339 11.2281C11.363 12.0004 11.9996 12.637 12.7719 13.0661L13.0685 13.2308C14.2479 13.8861 15.6747 13.9171 16.8815 13.3137C17.5374 12.9857 18.3189 13.0344 18.9291 13.4412L19.5879 13.8804C21.1207 14.9022 21.4628 17.0108 20.3319 18.4649L19.6296 19.3678C18.2606 21.128 15.7597 21.522 13.9157 20.2681Z"
        stroke={currentColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default Phone;
