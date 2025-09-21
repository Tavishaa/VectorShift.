export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.target.style.transform = 'scale(0.95)';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };

    const onDragEnd = (event) => {
      event.target.style.cursor = 'grab';
      event.target.style.transform = 'scale(1)';
    };
  
    return (
      <div
        className="draggable-node"
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={onDragEnd}
        draggable
      >

        <span className="draggable-node-label">
          {label}
        </span>
      </div>
    );
  };
  