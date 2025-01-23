import React from "react";
import { IIcon } from "../../icon";
import Svg, { Path } from "react-native-svg";

const Hide: React.FC<IIcon> = ({ className }) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <Path
        d="M3.9157 4L18.9157 19M15.6345 15.9586C14.3664 16.6417 12.9331 17.1249 11.4157 17.1249C8.10571 17.1249 5.19665 14.8261 3.52843 13.1676C3.08809 12.7299 2.86795 12.511 2.7278 12.0814C2.62786 11.775 2.62783 11.2249 2.7278 10.9185C2.86799 10.4889 3.08858 10.2695 3.5298 9.83094C4.37063 8.9952 5.52644 7.99712 6.88973 7.21259M18.447 13.9689C18.7592 13.6942 19.0451 13.4241 19.3018 13.169L19.3045 13.1662C19.7438 12.7295 19.9641 12.5105 20.104 12.0818C20.204 11.7754 20.2038 11.2252 20.1038 10.9187C19.9637 10.4893 19.7433 10.2698 19.3032 9.83229C17.635 8.17383 14.7257 5.875 11.4157 5.875C11.0993 5.875 10.7866 5.89601 10.4782 5.93545M12.6559 12.9062C12.3254 13.198 11.8912 13.375 11.4157 13.375C10.3802 13.375 9.5407 12.5355 9.5407 11.5C9.5407 10.9942 9.74096 10.5354 10.0665 10.1981"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Hide;
