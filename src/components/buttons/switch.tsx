import { cn } from "../../util/lib";

const Switch = ({
  isOpen,
  toggle,
}: {
  isOpen?: boolean;
  toggle?: () => void;
}) => {
  return (
    <div className="inline-flex items-center gap-2">
      <button
        type="button"
        onClick={toggle}
        className={cn(
          "h-6 w-12 border border-silver rounded-full relative before:absolute before:content-[''] before:w-5 before:h-5 before:rounded-full before:border before:border-silver before:top-[0.0625rem]",
          {
            "before:left-[0.0625rem] before:bg-wild-sand": !isOpen,
            "bg-salem before:right-[0.0625rem] before:bg-white": isOpen,
          }
        )}
      />
      <small className="text-dove-gray text-[0.9375rem]">{isOpen ? "Show" : "Hide"}</small>
    </div>
  );
};

export default Switch;
