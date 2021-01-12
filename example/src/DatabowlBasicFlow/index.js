import React, { useState } from 'react';

import ReactFlow, { isNode, ReactFlowProps, Background } from 'react-flow-renderer';

import './styles.css';

const initialElements = [
  { id: '1', type: 'input', data: { label: 'Lead Data' }, position: { x: 550, y: 5 }, className: 'light' },
  { id: '2', data: { label: 'Databowl Campaign' }, position: { x: 550, y: 100 }, className: 'light' },
  { id: '3', data: { label: 'Validation (Rules, Deduplication, Suppression)' }, position: { x: 550, y: 200 }, className: 'light' },
  { id: '3a', data: { label: 'Rejected Leads' }, position: { x: 450, y: 300 }, className: 'rejectedLeads'},
  { id: '3a-1', data: { label: 'Leads Stored in Databowl' }, position: { x: 250, y: 400 }, className: 'light'},
  { id: '3a-2', data: { label: 'Reprocess Leads' }, position: { x: 250, y: 200 }, className: 'light'},
  { id: '3b', data: { label: 'Accepted Leads' }, position: { x: 650, y: 300 }, className: 'acceptedLeads' },
  { id: '4', data: { label: 'Send Responders' }, position: { x: 850, y: 400 }, className: 'light' },
  { id: '5', data: { label: 'Forward out any Good Leads' }, position: { x: 650, y: 500 }, className: 'light' },
  { id: '6a', data: { label: 'Client Rejects' }, position: { x: 550, y: 600 }, className: 'rejectedLeads' },
  { id: '6b', data: { label: 'Client Accepts' }, position: { x: 750, y: 600 }, className: 'acceptedLeads' },
  { id: '7', type: 'output' ,data: { label: 'Client Database' }, position: { x: 750, y: 700 }, className: 'light' },
  { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', animated: true },
  { id: 'e1-3', source: '2', target: '3', type: 'smoothstep', animated: true },
  { id: 'e1-3a', source: '3', target: '3a', type: 'smoothstep', animated: true },
  { id: 'e1-3b', source: '3', target: '3b', type: 'smoothstep', animated: true },
  { id: 'e1-3a-1', source: '3a', target: '3a-1', type: 'smoothstep', animated: true },
  { id: 'e1-3a-2', source: '3a-1', target: '3a-2', type: 'smoothstep', animated: true },
  { id: 'e1-3a-3', source: '3a-2', target: '3', type: 'smoothstep', animated: true },
  { id: 'e1-4', source: '3b', target: '4', type: 'smoothstep', label: 'If campaign has responders on it', animated: true },
  { id: 'e1-4a', source: '3b', target: '5', type: 'smoothstep', animated: true },
  { id: 'e1-5', source: '4', target: '5', type: 'smoothstep', animated: true },
  { id: 'e1-6a', source: '5', target: '6a', type: 'smoothstep', animated: true },
  { id: 'e1-6a-1', source: '6a', target: '3a-1', type: 'smoothstep', animated: true },
  { id: 'e1-6b', source: '5', target: '6b', type: 'smoothstep', animated: true },
  { id: 'e1-7', source: '6b', target: '7', type: 'smoothstep', animated: true },
];

const BasicFlow = () => {
  const [rfInstance, setRfInstance] = useState(null);
  const [elements, setElements] = useState(initialElements);
  const onLoad = (reactFlowInstance) => setRfInstance(reactFlowInstance);

  return (
    <ReactFlow
      elements={elements}
      onLoad={onLoad}
      className="react-flow-basic-example"
      defaultZoom={1}
      minZoom={0.5}
      maxZoom={3}
      nodesDraggable={false}
      nodesConnectable={false}
    >
      <Background 
        variant="dots"
        gap = {12}
        size = {0.5}
       />
    </ReactFlow>
  );
};

export default BasicFlow;
