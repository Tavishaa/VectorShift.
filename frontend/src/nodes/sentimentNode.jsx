import { useState } from "react";
import MainNode from "../MainNode";

export const SentimentNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || "");
  const [sentiment, setSentiment] = useState("neutral");

  const analyzeSentiment = (txt) => {
    const lower = txt.toLowerCase();
    if (lower.includes("happy") || lower.includes("good")) return "positive";
    if (lower.includes("sad") || lower.includes("bad")) return "negative";
    return "neutral";
  };

  const handleChange = (e) => {
    const val = e.target.value;
    setText(val);
    setSentiment(analyzeSentiment(val));
  };

  return (
    <MainNode id={id} title="Sentiment" inputs={["text"]} outputs={["sentiment"]}>
      <label>
        Text:
        <input value={text} onChange={handleChange} />
      </label>
      <div>Sentiment: {sentiment}</div>
    </MainNode>
  );
};
