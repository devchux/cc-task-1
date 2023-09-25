import { FC, useReducer } from "react";
import Label from "./label";
import Dropdown, { DropdownValue } from "../inputs/dropdown";
import Input from "../inputs/input";
import Button from "../buttons/button";
import Choice from "../inputs/choice";
import Checkbox from "../inputs/checkbox";

export interface IAddQuestionState {
  type: DropdownValue;
  question: string;
  choices?: string[];
  maxChoice?: number;
  other?: boolean;
  disqualify?: boolean;
  info?: string;
  duration?: number | string;
  videoUnit?: DropdownValue;
}

interface AddQuestionProps {
  onSave?: (value: IAddQuestionState) => void;
  onDelete?: () => void;
  defaultState?: IAddQuestionState;
  isEdit?: boolean;
}

const AddQuestion: FC<AddQuestionProps> = ({
  onDelete,
  onSave,
  isEdit,
  defaultState,
}) => {
  const initialState = {
    question: "",
    info: "",
    duration: "",
    choices: [""],
    maxChoice: 0,
    other: false,
    disqualify: false,
    videoUnit: {
      value: "",
      title: "",
    },
    type: {
      value: "Paragraph",
      title: "Paragraph",
    },
  };
  const [state, setState] = useReducer(
    (prev: IAddQuestionState, next: Partial<IAddQuestionState>) => ({
      ...prev,
      ...next,
    }),
    { ...initialState, ...(defaultState || {}) }
  );

  const onRemoveChoice = (index: number) => {
    if (state.choices && state.choices?.length > 1) {
      const filtered = state?.choices?.filter((_, i) => i !== index) || [];
      setState({ choices: filtered });
    }
  };

  const onChoiceChange = (value: string, index: number) => {
    const filtered =
      state?.choices?.map((c, i) => (i === index ? value : c)) || [];
    setState({ choices: filtered });
  };

  return (
    <div className="my-7">
      {!isEdit && (
        <div className="mb-7">
          <Label>Type</Label>
          <Dropdown
            value={state.type}
            onSelect={(type) => setState({ type })}
            options={[
              {
                value: "Paragraph",
                title: "Paragraph",
              },
              {
                value: "Short answer",
                title: "Short answer",
              },
              {
                value: "Yes/No",
                title: "Yes/No",
              },
              {
                value: "Dropdown",
                title: "Dropdown",
              },
              {
                value: "Multiple Choice",
                title: "Multiple Choice",
              },
              {
                value: "Date",
                title: "Date",
              },
              {
                value: "Number",
                title: "Number",
              },
              {
                value: "File upload",
                title: "File upload",
              },
              {
                value: "Video",
                title: "Video question",
              },
            ]}
          />
        </div>
      )}
      <div className="mb-7">
        <Label>Question</Label>
        <Input
          placeholder="Type here"
          value={state.question}
          onChange={({ target: { value } }) => setState({ question: value })}
        />
      </div>
      {["Multiple Choice", "Dropdown"].includes(state.type.value) && (
        <div>
          <div className="mb-7 flex flex-col gap-7">
            {state.choices?.map((c, i) => (
              <Choice
                key={i}
                value={c}
                onAdd={() =>
                  setState({ choices: [...(state.choices || []), ""] })
                }
                onClear={() => onRemoveChoice(i)}
                onChange={({ target: { value } }) => onChoiceChange(value, i)}
              />
            ))}
          </div>
          <div className="mb-7">
            <Checkbox
              checked={state.other}
              toggle={() => setState({ other: !state.other })}
              label="Enable “Other” option"
            />
          </div>
          {state.type.value === "Multiple Choice" && (
            <div className="mb-7">
              <Label>Max choice allowed</Label>
              <Input
                placeholder="Enter number of choice allowed here"
                value={state.maxChoice}
                onChange={({ target: { value } }) =>
                  setState({ maxChoice: Number(value) })
                }
              />
            </div>
          )}
        </div>
      )}
      {state.type.value === "Yes/No" && (
        <div className="mb-7">
          <Checkbox
            checked={state.other}
            toggle={() => setState({ other: !state.other })}
            label="Disqualify candidate if the answer is no"
          />
        </div>
      )}
      {state.type.value === "Video" && (
        <div>
          <div className="mb-7">
            <Input
              placeholder="Additional information"
              value={state.info}
              onChange={({ target: { value } }) => setState({ info: value })}
            />
          </div>
          <div className="flex gap-7 mb-7">
            <div className="w-full">
              <Input
                type="number"
                placeholder="Max duration of video"
                value={state.duration}
                onChange={({ target: { value } }) =>
                  setState({ duration: Number(value) })
                }
              />
            </div>
            {state.videoUnit && (
              <div className="w-full">
                <Dropdown
                  placeholder="in (sec/min)"
                  value={state.videoUnit}
                  onSelect={(videoUnit) => setState({ videoUnit })}
                  options={[
                    { title: "Minutes", value: "Minutes" },
                    { title: "Seconds", value: "Seconds" },
                  ]}
                />
              </div>
            )}
          </div>
        </div>
      )}
      <div className="flex justify-between">
        <Button variant="danger" onClick={onDelete}>
          Delete question
        </Button>
        <Button onClick={() => onSave?.(state)}>Save</Button>
      </div>
    </div>
  );
};

export default AddQuestion;
