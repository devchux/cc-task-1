import { FC, MutableRefObject, useEffect, useRef, useState } from "react";
import { cn } from "../../util/lib";

interface DropdownValue {
  title: string;
  value: string;
}

interface DropdownProps {
  value: DropdownValue;
  options: DropdownValue[];
  onSelect?: (value: DropdownValue) => void;
}

const Dropdown: FC<DropdownProps> = ({ value, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const ref: MutableRefObject<null | HTMLDivElement> = useRef(null)


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <div
        className={cn(
          "flex items-center justify-between py-[1.44rem] px-[1.63rem] rounded-md border border-black cursor-pointer",
          { "border-salem": isOpen }
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-dusty-gray text-sm">{value?.title}</p>
        <svg
          width="12"
          height="9"
          viewBox="0 0 12 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0.172119L5.79652 0.160089L11.593 0.148059L5.80507 8.32024L0 0.172119Z"
            fill="black"
          />
        </svg>
      </div>
      <div className={cn("bg-white rounded-md shadow-[3px_3px_27px_0px_rgba(190,190,190,0.30)] py-[1.19rem] absolute top-12 w-full left-0 invisible opacity-0 transition-opacity duration-300", { "visible opacity-100": isOpen })}>
        {options.map((option) => (
          <div
            className={cn("px-6 h-11 flex items-center cursor-pointer", {
              "bg-medium-purple text-white": option.value === value.value,
              "hover:bg-gray-300": option.value !== value.value,
            })}
            key={option.title}
            onClick={() => {
              onSelect?.(option);
              setIsOpen(false);
            }}
          >
            {option.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
