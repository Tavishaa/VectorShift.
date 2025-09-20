import { useState } from "react";
import MainNode from "../MainNode";

export const ConditionNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || "");
  const [result, setResult] = useState(null);

  const evaluateCondition = (cond) => {
    if (!cond.trim()) return "Invalid";
    try {
      const func = new Function(`return (${cond});`);
      return Boolean(func());
    } catch {
      return "Invalid";
    }
  };

  const handleEvaluate = () => {
    setResult(evaluateCondition(condition));
  };

  return (
    <MainNode
      id={id}
      title="Condition"
      inputs={["condition"]}
      outputs={["true", "false"]}
    >
      <label style={{ display: "block", marginBottom: "6px" }}>
        Condition:
        <input
          type="text"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          style={{ marginLeft: 6 }}
        />
      </label>
      <button
        onClick={handleEvaluate} >
        Evaluate
      </button>
      {result !== null && (
        <div style={{ marginTop: 6 }}>
          Result: {result === "Invalid" ? "Invalid Expression" : result ? "True" : "False"}
        </div>
      )}
    </MainNode>
  );
};
