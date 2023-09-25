import { useEffect, useReducer, useState } from "react";
import UploadCoverImage from "../form/upload-cover-image";
import FormWrapper from "../form/form-wrapper";
import Information from "../form/information";
import SavedMode from "../form/saved-mode";
import { IAddQuestionState } from "../form/add-question";
import { GET_URL, PUT_URL } from "../../util/constants";
import { toast } from "react-toastify";
import Button from "../buttons/button";

type IStateKey = "personalInformation" | "profile" | "customisedQuestions";

interface IQuestion extends Omit<IAddQuestionState, "type"> {
  id: string;
  type: string;
  question: string;
  choices: string[];
  maxChoice: number;
  disqualify: boolean;
  other: boolean;
}

interface IState {
  id: string;
  type: string;
  coverImage: string;
  personalInformation: Record<string, IQuestion[] | { [key: string]: boolean }>;
  profile: Record<string, IQuestion[] | { [key: string]: boolean }>;
  customisedQuestions: Record<string, IQuestion[] | { [key: string]: boolean }>;
}

const ApplicationForm = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [state, setState] = useReducer(
    (prev: IState, next: Partial<IState>) => ({ ...prev, ...next }),
    {
      id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      type: "applicationForm",
      coverImage: "",
      personalInformation: {},
      profile: {},
      customisedQuestions: {},
    }
  );

  const objectKeys = (stateKey: IStateKey) => Object.keys(state[stateKey]);

  const lastKey = (stateKey: IStateKey, key: string) =>
    objectKeys(stateKey)[objectKeys(stateKey).indexOf(key) - 1];

  const getName = (key: string) => {
    const mapper: Record<string, string> = {
      firstName: "First Name",
      lastName: "Last Name",
      emailId: "Email",
      phoneNumber: "Phone Number",
      nationality: "Nationality",
      currentResidence: "Current Residence",
      idNumber: "ID Number",
      dateOfBirth: "Date of Birth",
      gender: "Gender",
    };

    return mapper[key] || key?.charAt(0).toUpperCase() + key?.slice(1);
  };

  const onToggle = (stateKey: IStateKey, key: string, mainKey: string) => {
    const obj = state[stateKey][key];
    if (Array.isArray(obj)) return;
    const result = { ...obj, [mainKey]: !obj[mainKey] };

    setState({
      [stateKey]: {
        ...state[stateKey],
        [key]: result,
      },
    });
  };

  const onEditSave = (
    item: IAddQuestionState,
    index: number,
    stateKey: IStateKey,
    key: string
  ) => {
    const arr = state[stateKey][key];
    if (!Array.isArray(arr)) return;
    const format = arr.map((o, i) =>
      i === index
        ? {
            id: i.toString(),
            type: item.type.value,
            question: item.question,
            choices: item.choices || [],
            maxChoice: item.maxChoice || 0,
            disqualify: item.disqualify || false,
            other: item.other || false,
          }
        : o
    );

    setState({
      [stateKey]: {
        ...state[stateKey],
        [key]: format,
      },
    });
  };

  const onDelete = (index: number, stateKey: IStateKey, key: string) => {
    const arr = state[stateKey][key];
    if (!Array.isArray(arr)) return;
    const format = arr.filter((_, i) => i !== index);

    setState({
      [stateKey]: {
        ...state[stateKey],
        [key]: format,
      },
    });
  };

  const onAdd = (item: IAddQuestionState, stateKey: IStateKey, key: string) => {
    const arr = state[stateKey][key];
    if (!Array.isArray(arr)) return;
    setState({
      [stateKey]: {
        ...state[stateKey],
        [key]: [
          ...(arr || []),
          {
            ...item,
            id: arr.length.toString(),
            type: item.type.value,
            question: item.question,
            choices: item.choices || [],
            maxChoice: item.maxChoice || 0,
            disqualify: item.disqualify || false,
            other: item.other || false,
          },
        ],
      },
    });
  };

  const updateData = async () => {
    try {
      setIsUpdating(true);
      const { id, type, ...attributes } = state;
      const response = await fetch(PUT_URL, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            id,
            type,
            attributes: {
              ...attributes,
              customisedQuestions: attributes?.customisedQuestions?.data,
            },
          },
        }),
      });
      if (response?.ok) {
        toast.success("Update successful");
      } else {
        toast.error("Error updating data");
      }
    } catch (error) {
      toast.error("Error updating data");
    } finally {
      setIsUpdating(false);
    }
  };

  const getData = async () => {
    try {
      setIsFetching(true);
      const response = await fetch(GET_URL);
      if (response?.ok) {
        const data = await response.json();
        setState({
          ...data?.data?.attributes,
          id: data?.data?.id,
          type: data?.data?.type,
          coverImage: data?.data?.attributes?.coverImage,
          customisedQuestions: {
            data: data?.data?.attributes?.customisedQuestions,
          },
        });
      } else {
        toast.error("Error fetching data");
      }
    } catch (error) {
      toast.error("Error fetching data");
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (isFetching)
    return (
      <div className="h-96 flex items-center justify-center">
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-salem"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
    );

  return (
    <div className="flex flex-col gap-[3.81rem]">
      <UploadCoverImage
        preview={
          state.coverImage === "http://example.com" ? "" : state.coverImage
        }
        removeImage={() => setState({ coverImage: "http://example.com" })}
        setPreview={(coverImage) => setState({ coverImage })}
      />
      <FormWrapper
        title="Personal Information"
        onSave={(question) =>
          onAdd(question, "personalInformation", "personalQuestions")
        }
      >
        {Object.entries(state.personalInformation).map((item) =>
          Array.isArray(item[1]) ? (
            item[1].map((obj, i) => (
              <SavedMode
                key={obj.id}
                question={{
                  ...obj,
                  type: {
                    value: obj.type,
                    title: obj.type,
                  },
                }}
                underline={i + 1 !== (item[1] as IQuestion[]).length}
                onDelete={() =>
                  onDelete(i, "personalInformation", "personalQuestions")
                }
                onSave={(value) =>
                  value &&
                  onEditSave(
                    value,
                    i,
                    "personalInformation",
                    "personalQuestions"
                  )
                }
              />
            ))
          ) : (
            <Information
              key={item[0]}
              title={getName(item[0])}
              check={item[1].internalUse}
              setCheck={() =>
                onToggle("personalInformation", item[0], "internalUse")
              }
              isSwitch={item[1].show}
              setIsSwitch={() =>
                onToggle("personalInformation", item[0], "show")
              }
              underline={
                (state.personalInformation?.personalQuestions as IQuestion[])
                  ?.length === 0
                  ? lastKey("personalInformation", "personalQuestions") !==
                    item[0]
                  : true
              }
              hasToggle={
                !["firstName", "lastName", "emailId"].includes(item[0])
              }
            />
          )
        )}
      </FormWrapper>
      <FormWrapper
        title="Profile"
        onSave={(question) => onAdd(question, "profile", "profileQuestions")}
      >
        {Object.entries(state.profile).map((item) =>
          Array.isArray(item[1]) ? (
            item[1].map((obj, i) => (
              <SavedMode
                key={obj.id}
                question={{
                  ...obj,
                  type: {
                    value: obj.type,
                    title: obj.type,
                  },
                }}
                underline={i + 1 !== (item[1] as IQuestion[]).length}
                onDelete={() => onDelete(i, "profile", "profileQuestions")}
                onSave={(value) =>
                  value && onEditSave(value, i, "profile", "profileQuestions")
                }
              />
            ))
          ) : (
            <Information
              key={item[0]}
              title={getName(item[0])}
              check={item[1].mandatory}
              type="profile"
              setCheck={() => onToggle("profile", item[0], "mandatory")}
              isSwitch={item[1].show}
              setIsSwitch={() => onToggle("profile", item[0], "show")}
              underline={
                (state.profile?.profileQuestions as IQuestion[])?.length === 0
                  ? lastKey("profile", "profileQuestions") !== item[0]
                  : true
              }
              hasToggle
            />
          )
        )}
      </FormWrapper>
      <FormWrapper
        title="Additional questions"
        onSave={(question) => onAdd(question, "customisedQuestions", "data")}
      >
        {Object.entries(state.customisedQuestions).map((item) =>
          Array.isArray(item[1])
            ? item[1].map((obj, i) => (
                <SavedMode
                  key={obj.id}
                  question={{
                    ...obj,
                    type: {
                      value: obj.type,
                      title: obj.type,
                    },
                  }}
                  underline={i + 1 !== (item[1] as IQuestion[]).length}
                  onDelete={() => onDelete(i, "customisedQuestions", "data")}
                  onSave={(value) =>
                    value && onEditSave(value, i, "customisedQuestions", "data")
                  }
                />
              ))
            : null
        )}
      </FormWrapper>
      <Button
        disabled={isFetching || isUpdating}
        onClick={() => updateData()}
        className="max-w-fit py-4"
      >
        {isUpdating ? "Loading..." : "Save & Continue"}
      </Button>
    </div>
  );
};

export default ApplicationForm;
