import { useStore } from './store';
import { shallow } from 'zustand/shallow';

export const SubmitButton = () => {
  const { nodes, edges } = useStore(
    (state) => ({ nodes: state.nodes, edges: state.edges }),
    shallow
  );

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8000/pipelines/parse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nodes, edges }),
      });

      const data = await response.json();

      alert(
        `Pipeline Info:\nNodes: ${data.num_nodes}\nEdges: ${data.num_edges}\nIs DAG: ${data.is_dag}`
      );
    } catch (err) {
      console.error(err);
      alert('Error submitting pipeline');
    }
  };

  return (
    <div className="footer">
      <button 
        type="button" 
        onClick={handleSubmit}
        className="btn btn-primary btn-lg"
      >
        🚀 Submit Pipeline
      </button>
    </div>
  );
};
