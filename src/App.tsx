import Button from "./components/buttons/button";
import Switch from "./components/buttons/switch";
import Checkbox from "./components/inputs/checkbox";
import Choice from "./components/inputs/choice";
import Dropdown from "./components/inputs/dropdown";
import Input from "./components/inputs/input";

function App() {
  return (
    <>
      <Switch />
      <Checkbox label="Internal" />
      <Input placeholder="Type here." />
      <Button>Save</Button>
      <Button variant="danger">Delete question</Button>
      <Button variant="text">Add a question</Button>
      <Choice placeholder="Type here." />
      <Dropdown
        value={{ title: "Paragraph", value: "Paragraph" }}
        options={[
          { title: "Paragraph", value: "Paragraph" },
          { title: "Multiple Choice", value: "MultipleChoice" },
        ]}
      />
    </>
  );
}

export default App;
