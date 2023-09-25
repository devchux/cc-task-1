import { cn } from "../../util/lib";

const Checkbox = ({
  label,
  checked,
  toggle,
}: {
  label: string;
  checked?: boolean;
  toggle?: () => void;
}) => {
  return (
    <div className="flex items-center mr-4">
      <div
        onClick={toggle}
        className={cn(
          "text-white w-4 h-4 flex justify-center items-center  rounded cursor-pointer border border-geyser",
          { "bg-salem": checked }
        )}
      >
        {checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="1"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        )}
      </div>
      <label htmlFor="green-checkbox" className="ml-2 text-[0.9375rem]">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
