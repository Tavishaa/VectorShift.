import { useState } from "react";
import MainNode from "../MainNode";

export const TextTransformNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || "");
  const [caseType, setCaseType] = useState(data?.case || "upper");

  const transformText = (inputText, transformCase) => {
    if (!inputText) return "No text entered";
    
    switch (transformCase) {
      case "upper":
        return inputText.toUpperCase();
      case "lower":
        return inputText.toLowerCase();
      case "title":
        return inputText.replace(/\w\S*/g, (txt) => 
          txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        );
      case "camel":
        return inputText.replace(/\s+(.)/g, (match, group) => group.toUpperCase());
      default:
        return inputText;
    }
  };

  return (
    <MainNode id={id} title="Text Transformer" inputs={["text"]} outputs={["transformed"]}>
      <label>
        Text:
        <input 
          value={text} 
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text to transform"
        />
      </label>
      <label>
        Case:
        <select value={caseType} onChange={(e) => setCaseType(e.target.value)}>
          <option value="upper">UPPERCASE</option>
          <option value="lower">lowercase</option>
          <option value="title">Title Case</option>
          <option value="camel">camelCase</option>
        </select>
      </label>
      <div style={{ 
        backgroundColor: "#f5f5f5", 
        padding: "4px 8px", 
        borderRadius: "4px",
        fontFamily: "monospace",
        marginTop: "6px"
      }}>
        Transformed Text: {transformText(text, caseType)}
      </div>
    </MainNode>
  );
};
