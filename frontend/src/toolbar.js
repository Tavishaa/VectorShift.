import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div className="header">
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
                <h2 className="header-title">
                    VectorShift Pipeline Builder
                </h2>
                <p className="header-subtitle">
                    Drag nodes to build your pipeline
                </p>
                <div className="toolbar">
                    <DraggableNode type='customInput' label='Input' />
                    <DraggableNode type='llm' label='LLM' />
                    <DraggableNode type='customOutput' label='Output' />
                    <DraggableNode type='text' label='Text' />
                    <DraggableNode type='condition' label='Condition' />
                    <DraggableNode type='operations' label='Operations' />
                    <DraggableNode type='color' label='Color' />
                    <DraggableNode type='textTransform' label='Text Transform' />
                    <DraggableNode type='timer' label='Timer' />
                </div>
            </div>
        </div>
    );
};
