import { DetailedHTMLProps, FC, LabelHTMLAttributes } from "react";
import { cn } from "../../util/lib";

const Label: FC<
  DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>
> = ({ children, className, ...rest }) => {
  return (
    <label className={cn("text-xl font-semibold mb-2 block", className)} {...rest}>
      {children}
    </label>
  );
};

export default Label;
