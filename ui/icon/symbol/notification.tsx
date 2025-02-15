import { IIcon } from "@/ui/icon";
import Svg, { Path } from "react-native-svg";

const Notification: React.FC<IIcon> = ({ className, currentColor }) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <Path
        d="M9 2H5.8C4.11984 2 3.27976 2 2.63803 2.32698C2.07354 2.6146 1.6146 3.07354 1.32698 3.63803C1 4.27976 1 5.11984 1 6.8V14.2C1 15.8802 1 16.7202 1.32698 17.362C1.6146 17.9265 2.07354 18.3854 2.63803 18.673C3.27976 19 4.11984 19 5.8 19H13.2C14.8802 19 15.7202 19 16.362 18.673C16.9265 18.3854 17.3854 17.9265 17.673 17.362C18 16.7202 18 15.8802 18 14.2V11M11 15H5M13 11H5M18.1213 1.87868C19.2929 3.05025 19.2929 4.94975 18.1213 6.12132C16.9497 7.29289 15.0503 7.29289 13.8787 6.12132C12.7071 4.94975 12.7071 3.05025 13.8787 1.87868C15.0503 0.707107 16.9497 0.707107 18.1213 1.87868Z"
        stroke={currentColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export { Notification };
