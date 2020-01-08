import React from 'react';
import Tree from 'react-tree-graph';
import 'react-tree-graph/dist/style.css';
import { D3Hierarchy } from '../App';

interface BinaryTreeProps {
    data: D3Hierarchy | null;
    width: number;
    height: number;
    svgProps: object;
    textProps: object;
    animated: boolean;
    nodeRadius: number;
}

export default function BinaryTree(props: BinaryTreeProps) {
    return (
        <div className="binary-tree">
            <h1>Бинарное дерево поиска</h1>
            {
                (props.data !== null) ? (<Tree {...props} />) : (<h1>Ноды отсутствуют (дерево пустое)</h1>)
            }
        </div>
    )
}
