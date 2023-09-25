import { useState } from "react";
import FormWrapper from "./components/form/form-wrapper";
import SavedMode from "./components/form/saved-mode";
import UploadCoverImage from "./components/form/upload-cover-image";

function App() {
  const [preview, setPreview] = useState("");
  return (
    <>
      <UploadCoverImage
        preview={preview}
        removeImage={() => setPreview("")}
        setPreview={(link) => setPreview(link)}
      />
      <br />
      <br />
      <FormWrapper title="Additional questions">
        <SavedMode
          type={{ value: "Paragraph", title: "Paragraph" }}
          title="Please tell me about yourself in less than 500 words"
        />
      </FormWrapper>
    </>
  );
}

export default App;
