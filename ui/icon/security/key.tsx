import { IIcon } from "../../Icon";
import Svg, { Path } from "react-native-svg";

const Key: React.FC<IIcon> = ({
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
        d="M19.79 14.93C17.73 16.98 14.78 17.61 12.19 16.8L7.48002 21.5C7.14002 21.85 6.47002 22.06 5.99002 21.99L3.81002 21.69C3.09002 21.59 2.42002 20.91 2.31002 20.19L2.01002 18.01C1.94002 17.53 2.17002 16.86 2.50002 16.52L7.20002 11.82C6.40002 9.22001 7.02002 6.27001 9.08002 4.22001C12.03 1.27001 16.82 1.27001 19.78 4.22001C22.74 7.17001 22.74 11.98 19.79 14.93Z"
        stroke={currentColor}
        strokeWidth={strokeWidth}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.89001 17.49L9.19001 19.79"
        stroke={currentColor}
        strokeWidth={strokeWidth}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.5 11C15.3284 11 16 10.3284 16 9.5C16 8.67157 15.3284 8 14.5 8C13.6716 8 13 8.67157 13 9.5C13 10.3284 13.6716 11 14.5 11Z"
        stroke={currentColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export { Key };
