import { FC, useState } from "react";
import penIcon from "../../assets/pen.svg";
import AddQuestion, { IAddQuestionState } from "./add-question";

const SavedMode: FC<{
  question: IAddQuestionState;
  underline?: boolean;
  onSave?: (value?: IAddQuestionState) => void;
  onDelete?: () => void;
}> = ({ question, onSave, onDelete, underline = true }) => {
  const [showAddQuestion, setShowAddQuestion] = useState<boolean>(false);

  return (
    <div>
      <small className="text-sm font-medium text-dusty-gray">
        {question.type.title}
      </small>
      <div className="flex items-center justify-between">
        <p className="font-semibold max-w-[27.44rem] w-full text-xl">{question.question}</p>
        <button type="button" onClick={() => setShowAddQuestion(true)}>
          <img src={penIcon} alt="" />
        </button>
      </div>
      {showAddQuestion && (
        <AddQuestion
          isEdit
          defaultState={question}
          onDelete={() => {
            setShowAddQuestion(false);
            onDelete?.();
          }}
          onSave={(value) => {
            onSave?.(value)
            setShowAddQuestion(false);
          }}
        />
      )}
      {underline && <hr className="my-7" />}
    </div>
  );
};

export default SavedMode;
