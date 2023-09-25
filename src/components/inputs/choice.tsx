import { FC } from "react";
import Input, { InputProps } from "./input";
import Label from "../form/label";

interface ChoiceProps extends InputProps {
  onAdd?: () => void;
  onClear?: () => void;
}

const Choice: FC<ChoiceProps> = ({ onClear, onAdd, ...rest }) => {
  return (
    <div>
      <Label className="text-xl font-medium ml-6">Choice</Label>
      <div className="flex items-center gap-2">
        <button type="button" onClick={onClear}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 10.5C3.2 10.5 2.5 11.2 2.5 12C2.5 12.8 3.2 13.5 4 13.5C4.8 13.5 5.5 12.8 5.5 12C5.5 11.2 4.8 10.5 4 10.5ZM4 5.5C3.2 5.5 2.5 6.2 2.5 7C2.5 7.8 3.2 8.5 4 8.5C4.8 8.5 5.5 7.8 5.5 7C5.5 6.2 4.8 5.5 4 5.5ZM4 15.5C3.2 15.5 2.5 16.2 2.5 17C2.5 17.8 3.2 18.5 4 18.5C4.8 18.5 5.5 17.8 5.5 17C5.5 16.2 4.8 15.5 4 15.5ZM7.5 6V8H21.5V6H7.5ZM7.5 18H21.5V16H7.5V18ZM7.5 13H21.5V11H7.5V13Z"
              fill="black"
            />
          </svg>
        </button>
        <Input {...rest} className="px-[1.12rem]" />
        <button type="button" onClick={onAdd}>
          <svg
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.77866 6.50921L1 6.51404L7.5 6.47434L14 6.43464"
              stroke="black"
              strokeWidth="3"
            />
            <path
              d="M7.44511 1.37632L7.44092 0.597656L7.47526 7.09769L7.47526 13.1175"
              stroke="black"
              strokeWidth="3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Choice;
