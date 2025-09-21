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
          className="result-display"
          style={{
            position: "absolute",
            left: -170,                
            top: 0,
            width: 160,
            minHeight: dynamicHeight,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            gap: "6px",
          }}
        >
          <div className="form-label" style={{ marginBottom: 4, fontSize: "0.8em", color: "#ffffff", fontWeight: "700", textShadow: "0 0 4px rgba(255, 255, 255, 0.5)" }}>
            Variables
          </div>
          {variables.map((variable) => (
            <div
              key={variable}
              className="form-input"
              style={{
                position: "relative",
                height: 32,
                display: "flex",
                alignItems: "center",
                padding: "0 10px",
                fontSize: "0.85em",
                fontFamily: "monospace",
                marginBottom: 0,
                color: "#ffffff",
                fontWeight: "600",
                background: "rgba(255, 255, 255, 0.15)",
                border: "2px solid rgba(108, 92, 231, 0.7)",
                textShadow: "0 0 2px rgba(255, 255, 255, 0.3)",
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
        <div className="form-group">
          <label className="form-label">Text:</label>
          <textarea
            value={currText}
            onChange={(e) => setCurrText(e.target.value)}
            className="form-input"
            style={{
              height: dynamicHeight - 40,
              resize: "none",
              fontFamily: "monospace",
              fontSize: "0.95em",
              boxSizing: "border-box",
              overflow: "hidden",
              color: "#ffffff",
              fontWeight: "600",
              background: "rgba(255, 255, 255, 0.15)",
              border: "2px solid rgba(108, 92, 231, 0.7)",
              textShadow: "0 0 2px rgba(255, 255, 255, 0.3)",
            }}
          />
        </div>
      </MainNode>
    </div>
  );
};
