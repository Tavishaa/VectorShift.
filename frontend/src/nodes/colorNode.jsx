import { useState } from "react";
import MainNode from "../MainNode";

export const ColorNode = ({ id, data }) => {
  const [color, setColor] = useState(data?.color || "#ff0000");

  return (
    <MainNode id={id} title="Color Picker" outputs={["color"]}>
      <label>
        Color:
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
      </label>
      <div style={{ marginTop: 4, color: color }}>Selected Color: {color}</div>
    </MainNode>
  );
};
