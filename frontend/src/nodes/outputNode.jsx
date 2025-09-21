import { useState } from "react";
import MainNode from "../MainNode";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data?.outputType || "Text");

  return (
    <MainNode id={id} title="Output" inputs={["value"]}>
      <label>
        Name:
        <input value={currName} onChange={(e) => setCurrName(e.target.value)} className="form-input" />
      </label>
      <label>
        Type:
        <select
          value={outputType}
          onChange={(e) => setOutputType(e.target.value)}
          className="form-select"
        >
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </label>
    </MainNode>
  );
};
