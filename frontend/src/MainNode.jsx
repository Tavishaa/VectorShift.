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
        border: "1px solid #333",
        borderRadius: 6,
        background: "#fff",
        padding: 8,
        display: "flex",
        flexDirection: "column",
        gap: 6,
        fontSize: "0.9em",
        ...style,
      }}
    >
      {/* Node Header */}
      <div
        style={{
          fontWeight: "bold",
          borderBottom: "1px solid #ddd",
          paddingBottom: 4,
          marginBottom: 4,
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
