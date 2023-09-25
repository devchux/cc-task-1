import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import { cn } from "../../util/lib";

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const Input: FC<InputProps> = ({ className, ...rest }) => {
  return (
    <input
      {...rest}
      className={cn(
        "border-none outline outline-silver-chalice rounded-md h-16 py-[1.44rem] px-[1.6rem] text-sm placeholder:text-dusty-gray w-full block focus-visible:outline-salem focus-visible:outline-[2px] hover:outline-black",
        className
      )}
    />
  );
};

export default Input;
