import React from 'react';
import Tree from 'react-tree-graph';
import 'react-tree-graph/dist/style.css';

interface Props {
    data: object;
    width: number;
    height: number;
    svgProps: object;
    textProps: object;
    animated: boolean;
    nodeRadius: number;
}

export default function BinaryTree(props: Props) {
    return (
        <div className="binary-tree">
            <h1>Бинарное дерево поиска</h1>
            <Tree {...props} />
        </div>
    )
}
