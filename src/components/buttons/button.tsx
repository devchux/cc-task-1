import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import { cn } from "../../util/lib";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "default" | "text" | "danger";
}

const Button: FC<ButtonProps> = ({
  variant = "default",
  className,
  children,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={cn("px-[0.69rem] py-[0.44rem] rounded text-sm", className, {
        "bg-salem text-white hover:bg-green-800": variant === "default",
        "inline-flex items-center gap-3": ["text", "danger"].includes(variant),
        "text-[#A80000]": variant === "danger",
      })}
    >
      {variant === "danger" && (
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.55684 9.42862L8.54321 8.42749L17.0039 16.7854L25.4645 25.1434"
            stroke="#A80000"
            strokeWidth="5"
          />
          <path
            d="M23.528 10.1184L24.53 9.10559L16.1651 17.5594L8.37698 25.3474"
            stroke="#A80000"
            strokeWidth="5"
          />
        </svg>
      )}
      {variant === "text" && (
        <svg
          className="w-6 h-6"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.42465 11.9094L1 11.9182L12.8925 11.8456L24.7851 11.7729"
            stroke="black"
            strokeWidth="5"
          />
          <path
            d="M12.7915 2.51804L12.7838 1.09338L12.8466 12.986L12.8466 24"
            stroke="black"
            strokeWidth="5"
          />
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;
