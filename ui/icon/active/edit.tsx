import React from "react";
import { IIcon } from "../../icon";
import Svg, { Path } from "react-native-svg";

const Edit: React.FC<IIcon> = ({ className, currentColor }) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <Path
        d="M13 7L4.58579 15.4142C4.21071 15.7893 4 16.298 4 16.8284V18C4 19.1046 4.89543 20 6 20H7.17157C7.70201 20 8.21071 19.7893 8.58579 19.4142L17 11M13 7L14.5858 5.41421C15.3668 4.63317 16.6332 4.63317 17.4142 5.41421L18.5858 6.58579C19.3668 7.36684 19.3668 8.63317 18.5858 9.41421L17 11M13 7L17 11"
        stroke={currentColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Edit;
