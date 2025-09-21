import { useState, useEffect } from "react";
import MainNode from "../MainNode";

export const OperationsNode = ({ id, data }) => {
  const [num1, setNum1] = useState(data?.num1 || 0);
  const [num2, setNum2] = useState(data?.num2 || 0);
  const [operation, setOperation] = useState(data?.operation || "add");
  const [result, setResult] = useState(0);

  const calculate = (a, b, op) => {
    switch (op) {
      case "add": return a + b;
      case "subtract": return a - b;
      case "multiply": return a * b;
      case "divide": return b !== 0 ? a / b : "NaN";
      default: return 0;
    }
  };

  useEffect(() => {
    setResult(calculate(num1, num2, operation));
  }, [num1, num2, operation]);

  return (
    <MainNode id={id} title="Math Operations" inputs={["num1","num2"]} outputs={["result"]}>
      <div className="form-group">
        <label className="form-label">
          Number 1:
        </label>
        <input 
          type="number" 
          value={num1} 
          onChange={(e) => setNum1(Number(e.target.value))}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">
          Number 2:
        </label>
        <input 
          type="number" 
          value={num2} 
          onChange={(e) => setNum2(Number(e.target.value))}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">
          Operation:
        </label>
        <select 
          value={operation} 
          onChange={(e) => setOperation(e.target.value)}
          className="form-select"
        >
          <option value="add">➕ Add</option>
          <option value="subtract">➖ Subtract</option>
          <option value="multiply">✖️ Multiply</option>
          <option value="divide">➗ Divide</option>
        </select>
      </div>
      <div className="result-display">
        Result: {result}
      </div>
    </MainNode>
  );
};
