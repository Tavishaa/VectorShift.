import { useState } from "react";
import MainNode from "../MainNode";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data?.inputType || "Text");

  return (
    <MainNode id={id} title="Input" outputs={["value"]}>
      <label>
        Name:
        <input value={currName} onChange={(e) => setCurrName(e.target.value)} className="form-input" />
      </label>
      <label>
        Type:
        <select value={inputType} onChange={(e) => setInputType(e.target.value)} className="form-select">
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>
    </MainNode>
  );
};
