import { useState } from "react";
import MainNode from "../MainNode"; 

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  return (
    <MainNode id={id} title="Text" outputs={["output"]}>
      <label>
        Text:
        <input value={currText} onChange={(e) => setCurrText(e.target.value)} />
      </label>
    </MainNode>
  );
};
