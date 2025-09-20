import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                {/* <DraggableNode type='sentiment' label='Sentiment' /> */}
                <DraggableNode type='condition' label='Condition' />
                {/* <DraggableNode type='emoji' label='Emoji' /> */}
                <DraggableNode type='operations' label='Operations' />
                <DraggableNode type='color' label='Color' />
                <DraggableNode type='textTransform' label='Text Transform' />
                <DraggableNode type='timer' label='Timer' />
            </div>
        </div>
    );
};
