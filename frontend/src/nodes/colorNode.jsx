import { useState } from "react";
import MainNode from "../MainNode";

export const ColorNode = ({ id, data }) => {
  const [color, setColor] = useState(data?.color || "#ff0000");

  return (
    <MainNode id={id} title="Color Picker" outputs={["color"]}>
      <div className="form-group">
        <label className="form-label">
          Color:
        </label>
        <input 
          type="color" value={color} onChange={(e) => setColor(e.target.value)}
          style={{
            width: '100%', height: '40px', border: 'none', borderRadius: '8px', cursor: 'pointer',
          }}
        />
      </div>
      <div className="result-display" style={{ 
        color: color,
        border: `2px solid ${color}`,
      }}>
        Selected: {color}
      </div>
    </MainNode>
  );
};
