import * as React from "react";
import TextareaAutosize from "@mui/base/TextareaAutosize";

interface CodeTextProps {
  code: string;
  onValueChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const CodeTextArea: React.FC<CodeTextProps> = ({ code, onValueChange }) => {
  return (
    <TextareaAutosize
      value={code}
      onChange={onValueChange}
      aria-label="CODE TEXT AREA"
      minRows={10}
      placeholder="Please enter code here"
      style={{ width: "100%" }}
    />
  );
};
export default CodeTextArea;
