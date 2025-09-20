import { useState, useMemo } from "react";
import MainNode from "../MainNode";
import { Handle, Position } from "reactflow";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  const variables = useMemo(() => {
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const found = new Set();
    let match;
    while ((match = regex.exec(currText)) !== null) {
      found.add(match[1]);
    }
    return Array.from(found);
  }, [currText]);

  const dynamicWidth = Math.min(400, Math.max(200, currText.length * 8));
  const textLines = currText.split("\n").length;
  const dynamicHeight = Math.min(300, Math.max(100, textLines * 24));

  return (
    <div style={{ position: "relative", display: "flex" }}>
      {/* Left variable box */}
      {variables.length > 0 && (
        <div
          style={{
            position: "absolute",
            left: -170,                
            top: 0,
            width: 160,
            minHeight: dynamicHeight,
            background: "#f9f9ff",
            border: "1px solid #ccc",
            borderRadius: 6,
            padding: "6px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            gap: "6px",
          }}
        >
          <div
            style={{
              fontSize: "0.75em",
              fontWeight: "600",
              marginBottom: 4,
              color: "#555",
            }}
          >
            Inputs
          </div>
          {variables.map((variable) => (
            <div
              key={variable}
              style={{
                position: "relative",
                height: 28,
                background: "#fff",
                border: "1px solid #ddd",
                borderRadius: 4,
                display: "flex",
                alignItems: "center",
                padding: "0 8px",
                fontSize: "0.8em",
                fontFamily: "monospace",
                color: "#333",
              }}
            >
              {variable}
              <Handle
                type="target"                          
                position={Position.Left}
                id={`${id}-var-${variable}`} 
                style={{
                  width: 8,                  
                  height: 8,
                  background: "#555",
                  borderRadius: "50%",
                  position: "absolute",
                  left: -10,                 
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              />
            </div>
          ))}
        </div>
      )}

      <MainNode
        id={id}
        title="Text"
        outputs={["output"]}
        width={dynamicWidth}
        minHeight={dynamicHeight}
      >
        <label style={{ display: "block", width: "100%" }}>
          Text:
          <textarea
            value={currText}
            onChange={(e) => setCurrText(e.target.value)}
            style={{
              width: "100%",
              height: dynamicHeight - 40,
              resize: "none",
              border: "1px solid #ccc",
              borderRadius: 4,
              padding: 4,
              fontFamily: "monospace",
              fontSize: "0.9em",
              boxSizing: "border-box",
              overflow: "hidden",
            }}
          />
        </label>
      </MainNode>
    </div>
  );
};
