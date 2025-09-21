import React from "react";
import { Handle, Position } from "reactflow";

export default function MainNode({
  id,
  title,
  inputs = [],
  outputs = [],
  children,
  width = 200,
  minHeight = 80,
  style = {},
}) {
  return (
    <div
      style={{
        width,
        minHeight,
        background: "rgba(255, 255, 255, 0.1)",
        border: "1px solid rgba(108, 92, 231, 0.4)",
        borderRadius: 8,
        padding: 12,
        display: "flex",
        flexDirection: "column",
        gap: 8,
        fontSize: "1.1em",
        ...style,
      }}
    >
      {/* Node Header */}
      <div
        style={{
          fontWeight: "bold",
          fontSize: "1.1em",
          color: "#6c5ce7",
          borderBottom: "1px solid rgba(108, 92, 231, 0.2)",
          paddingBottom: 6,
          marginBottom: 6,
        }}
      >
        {title}
      </div>

      {/* Node-Specific UI */}
      <div>{children}</div>

      {/* Input handles (left side) */}
      {inputs.map((inp, i) => (
        <Handle
          key={inp}
          type="target"
          position={Position.Left}
          id={`${id}-${inp}`}
          style={{
            position: "absolute",
            top: 40 + i * 20,
            left: -8,
            background: "#555",
            width: 8,
            height: 8,
          }}
        />
      ))}

      {/* Output handles (right side) */}
      {outputs.map((out, i) => (
        <Handle
          key={out}
          type="source"
          position={Position.Right}
          id={`${id}-${out}`}          
          style={{ 
            position: "absolute",
            top: 40 + i * 20,
            right: -8,
            background: "#555",
            width: 8,
            height: 8,
          }}
        />
      ))}
    </div>
  );
}
