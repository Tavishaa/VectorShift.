import { useState } from "react";
import MainNode from "../MainNode";

export const EmojiNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || "");
  const [emojiText, setEmojiText] = useState("");

  const emojiMap = { happy: "😀", sad: "😢", love: "❤️", fire: "🔥", star: "⭐" };

  const handleChange = (e) => {
    const val = e.target.value;
    setText(val);
    const translated = val
      .split(" ")
      .map((w) => emojiMap[w.toLowerCase()] || w)
      .join(" ");
    setEmojiText(translated);
  };

  return (
    <MainNode id={id} title="Emoji Translator" inputs={["text"]} outputs={["emoji"]}>
      <label>
        Text:
        <input value={text} onChange={handleChange} />
      </label>
      <div>Emoji: {emojiText}</div>
    </MainNode>
  );
};
