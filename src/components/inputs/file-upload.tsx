import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import uploadIcon from "../../assets/upload.svg";

interface FileUploadProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const FileUpload: FC<FileUploadProps> = (props) => {
  return (
    <label
      htmlFor="file"
      className="flex flex-col items-center justify-center h-[13.125rem] border border-black border-dashed rounded-md w-full cursor-pointer"
    >
      <img src={uploadIcon} alt="" />
      <h5 className="text-sm font-semibold my-2">Upload cover image</h5>
      <p className="text-sm text-dusty-gray">
        16:9 ratio is recommended. Max image size 1mb
      </p>

      <input
        type="file"
        id="file"
        accept=".jpeg, .jpg, .png"
        className="hidden"
        {...props}
      />
    </label>
  );
};

export default FileUpload;
