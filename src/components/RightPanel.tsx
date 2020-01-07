import React from 'react';
import NeighborsTable, { NeighborsTableProps } from './NeighborsTable';
import AddToTree from './AddToTree';

interface RightPanelProps {
    neighborsTableProps: NeighborsTableProps;
    addToTreeProps: {
        onClick: () => void;
    };
}

export default function RightPanel(props: RightPanelProps) {
    return (
        <div className="right-panel">
            <NeighborsTable rightNeighbors={props.neighborsTableProps.rightNeighbors} />
            <AddToTree onClick={props.addToTreeProps.onClick} />
        </div>
    )
}