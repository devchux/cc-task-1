import { FC, ReactNode, useState } from "react";
import AddQuestion from "./add-question";
import Button from "../buttons/button";

interface FormWrapperProps {
  title: string;
  children?: ReactNode;
  hideAddButton?: boolean;
}

const FormWrapper: FC<FormWrapperProps> = ({
  title,
  children,
  hideAddButton,
}) => {
  const [showAddQuestion, setShowAddQuestion] = useState<boolean>(false);

  return (
    <section className="max-w-[37.1875rem]">
      <div className="font-semibold text-2xl pt-8 px-7 h-[5.8125rem] bg-[#D0F7FA] rounded-tr-[1.25rem] rounded-tl-[1.25rem]">
        {title}
      </div>
      <div className="px-7 pt-12 pb-8 bg-white shadow-[3px_3px_14px_0px_rgba(190,190,190,0.30)] rounded-bl-[1.25rem] rounded-br-[1.25rem]">
        {children}
        {showAddQuestion && (
          <AddQuestion onDelete={() => setShowAddQuestion(false)} />
        )}
        {!hideAddButton && (
          <Button variant="text" onClick={() => setShowAddQuestion(true)}>
            Add a question
          </Button>
        )}
      </div>
    </section>
  );
};

export default FormWrapper;
