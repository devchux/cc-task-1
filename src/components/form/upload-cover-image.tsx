import { FC } from "react";
import FormWrapper from "./form-wrapper";
import FileUpload from "../inputs/file-upload";
import Button from "../buttons/button";

interface UploadCoverImageProps {
  preview?: string;
  removeImage?: () => void;
  setPreview?: (link: string) => void;
}

const UploadCoverImage: FC<UploadCoverImageProps> = ({
  preview,
  removeImage,
  setPreview,
}) => {
  return preview ? (
    <div className="h-[25rem] rounded-[1.25rem] shadow-[3px_3px_14px_0px_rgba(190,190,190,0.30)] max-w-[37.1875rem] overflow-hidden">
      <div className="h-80">
        <img src={preview} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="bg-white px-[1.63rem] py-[1.39rem]">
        <Button variant="danger" onClick={removeImage}>
          Delete & re-upload
        </Button>
      </div>
    </div>
  ) : (
    <FormWrapper hideAddButton title="Upload cover image">
      <FileUpload
        onChange={({ target: { files } }) => {
          if (!files?.[0]) return;
          setPreview?.(URL.createObjectURL(files[0]));
        }}
      />
    </FormWrapper>
  );
};

export default UploadCoverImage;
