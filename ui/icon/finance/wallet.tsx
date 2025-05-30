import React from "react";
import { IIcon } from "../../Icon";
import Svg, { Path } from "react-native-svg";

const Wallet: React.FC<IIcon> = ({
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
      d="M12.66 2.51814L12.63 2.58814L9.72996 9.31814H6.87996C6.19996 9.31814 5.54996 9.45814 4.95996 9.70814L6.70996 5.52814L6.74996 5.42814L6.81996 5.26814C6.83996 5.20814 6.85996 5.14814 6.88996 5.09814C8.19996 2.06814 9.67996 1.37814 12.66 2.51814Z"
      stroke={currentColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18.05 9.51807C17.6 9.37807 17.12 9.31807 16.64 9.31807H9.72998L12.63 2.58807L12.66 2.51807C12.81 2.56807 12.95 2.63807 13.1 2.69807L15.31 3.62807C16.54 4.13807 17.4 4.66807 17.92 5.30807C18.02 5.42807 18.1 5.53807 18.17 5.66807C18.26 5.80807 18.33 5.94807 18.37 6.09807C18.41 6.18807 18.44 6.27807 18.46 6.35807C18.73 7.19807 18.57 8.22807 18.05 9.51807Z"
      stroke={currentColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M21.5217 14.1984V16.1484C21.5217 16.3484 21.5117 16.5484 21.5017 16.7484C21.3117 20.2384 19.3617 21.9984 15.6617 21.9984H7.86172C7.62172 21.9984 7.38172 21.9784 7.15172 21.9484C3.97172 21.7384 2.27172 20.0384 2.06172 16.8584C2.03172 16.6284 2.01172 16.3884 2.01172 16.1484V14.1984C2.01172 12.1884 3.23172 10.4584 4.97172 9.70836C5.57172 9.45836 6.21172 9.31836 6.89172 9.31836H16.6517C17.1417 9.31836 17.6217 9.38836 18.0617 9.51836C20.0517 10.1284 21.5217 11.9884 21.5217 14.1984Z"
      stroke={currentColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.71 5.52808L4.96 9.70808C3.22 10.4581 2 12.1881 2 14.1981V11.2681C2 8.42808 4.02 6.05808 6.71 5.52808Z"
      stroke={currentColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M21.5186 11.2677V14.1977C21.5186 11.9977 20.0586 10.1277 18.0586 9.52766C18.5786 8.22766 18.7286 7.20766 18.4786 6.35766C18.4586 6.26766 18.4286 6.17766 18.3886 6.09766C20.2486 7.05766 21.5186 9.02766 21.5186 11.2677Z"
      stroke={currentColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    </Svg>
  );
};

export { Wallet };
