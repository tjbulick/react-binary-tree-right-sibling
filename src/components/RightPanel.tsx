import React from 'react';
import NeighborsTable from './NeighborsTable';
import AddToTree from './AddToTree';

export interface RightPanelProps {
    neighborsTableProps: {
        rightNeighbors: any;
    };
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