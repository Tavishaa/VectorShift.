import MainNode from "../MainNode";

export const LLMNode = ({ id }) => {
  return (
    <MainNode id={id} title="LLM" inputs={["system", "prompt"]} outputs={["response"]}>
      <span>This is an LLM.</span>
    </MainNode>
  );
};
