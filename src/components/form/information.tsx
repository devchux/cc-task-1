import { FC } from "react";
import Checkbox from "../inputs/checkbox";
import Switch from "../buttons/switch";

interface InformationProps {
  title: string;
  subtitle?: string;
  check?: boolean;
  setCheck?: () => void;
  isSwitch?: boolean;
  setIsSwitch?: () => void;
  hasToggle?: boolean;
  underline?: boolean;
  type?: string;
}

const Information: FC<InformationProps> = ({
  title,
  check,
  setCheck,
  setIsSwitch,
  isSwitch,
  subtitle,
  hasToggle,
  type,
  underline = true,
}) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-[1.94rem]">
        <p className="w-full text-xl font-semibold">
          {title}{" "}
          {subtitle && (
            <span className="text-[0.94rem] font-normal">{subtitle}</span>
          )}
        </p>
        {hasToggle && (
          <div className="flex items-center justify-between w-full">
            <Checkbox
              label={type === "profile" ? "Mandatory" : "Internal"}
              checked={check}
              toggle={setCheck}
            />
            <Switch isOpen={isSwitch} toggle={setIsSwitch} />
          </div>
        )}
      </div>
      {underline && <hr className="mb-7" />}
    </div>
  );
};

export default Information;
