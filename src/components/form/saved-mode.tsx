import { FC, useState } from "react";
import penIcon from "../../assets/pen.svg";
import { DropdownValue } from "../inputs/dropdown";
import AddQuestion, { IAddQuestionState } from "./add-question";

const SavedMode: FC<{
  type: DropdownValue;
  title: string;
  underline?: boolean;
  onSave?: (value?: IAddQuestionState) => void;
}> = ({ type, title, onSave, underline = true }) => {
  const [showAddQuestion, setShowAddQuestion] = useState<boolean>(false);

  return (
    <div>
      <small className="text-sm font-medium text-dusty-gray">
        {type.title}
      </small>
      <div className="flex items-center justify-between">
        <p className="font-semibold max-w-[27.44rem] w-full text-xl">{title}</p>
        <button type="button" onClick={() => setShowAddQuestion(true)}>
          <img src={penIcon} alt="" />
        </button>
      </div>
      {showAddQuestion && (
        <AddQuestion
          isEdit
          defaultState={{ type, question: title }}
          onDelete={() => setShowAddQuestion(false)}
          onSave={onSave}
        />
      )}
      {underline && <hr className="mt-7" />}
    </div>
  );
};

export default SavedMode;
