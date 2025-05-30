import React from "react";
import { IIcon } from "../../Icon";
import Svg, { Path } from "react-native-svg";

const Home: React.FC<IIcon> = ({ className, currentColor, strokeWidth = 1.5 }) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <Path
        stroke={currentColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M8 17h8M11.018 2.764 4.235 8.039c-.453.353-.68.53-.843.75a2 2 0 0 0-.318.65C3 9.704 3 9.991 3 10.565V17.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C4.52 21 5.08 21 6.2 21h11.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C21 19.48 21 18.92 21 17.8v-7.235c0-.574 0-.861-.074-1.126a2.002 2.002 0 0 0-.318-.65c-.163-.22-.39-.397-.843-.75l-6.783-5.275c-.351-.273-.527-.41-.72-.462a1 1 0 0 0-.523 0c-.194.052-.37.189-.721.462Z"
      />
    </Svg>
  );
};

const Home2: React.FC<IIcon> = ({ className, currentColor, strokeWidth = 1.5 }) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <Path
        d="M12 18V15"
        stroke={currentColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.0703 2.81985L3.14027 8.36985C2.36027 8.98985 1.86027 10.2998 2.03027 11.2798L3.36027 19.2398C3.60027 20.6598 4.96027 21.8098 6.40027 21.8098H17.6003C19.0303 21.8098 20.4003 20.6498 20.6403 19.2398L21.9703 11.2798C22.1303 10.2998 21.6303 8.98985 20.8603 8.36985L13.9303 2.82985C12.8603 1.96985 11.1303 1.96985 10.0703 2.81985Z"
        stroke={currentColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const HomeAdd: React.FC<IIcon> = ({ className, currentColor, strokeWidth = 1.5 }) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
    <Path
      d="M7.5 11.4782V14.5C7.5 15.6046 8.39543 16.5 9.5 16.5H14.5C15.6046 16.5 16.5 15.6046 16.5 14.5V11.4782C16.5 10.861 16.2151 10.2784 15.7279 9.89946L13.2279 7.95502C12.5057 7.39329 11.4943 7.39329 10.7721 7.95502L8.27212 9.89946C7.78495 10.2784 7.5 10.861 7.5 11.4782Z"
      stroke={currentColor}
      strokeWidth={strokeWidth}
    />
    <Path d="M20 2V6" stroke={currentColor} strokeWidth={strokeWidth} strokeLinecap="round" />
    <Path
      d="M22 4L18 4"
      stroke={currentColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <Path
      d="M13 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V10.8531"
      stroke={currentColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    </Svg>
  );
};

export default Home;
export {Home2, HomeAdd};
