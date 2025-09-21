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
      className="node"
      style={{
        width,
        minHeight,
        ...style,
      }}
    >
      {/* Node Header */}
      <div className="node-header">
        <div className="node-header-icon" />
        {title}
      </div>

      {/* Node-Specific UI */}
      <div style={{ flex: 1 }}>{children}</div>

      {/* Input handles (left side) */}
      {inputs.map((inp, i) => (
        <Handle
          key={inp}
          type="target"
          position={Position.Left}
          id={`${id}-${inp}`}
          className="handle handle-input"
          style={{
            top: 50 + i * 25,
            left: -6,
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
          className="handle handle-output"
          style={{ 
            top: 50 + i * 25,
            right: -6,
          }}
        />
      ))}
    </div>
  );
}
