import React from 'react';
import './App.css';
import BinaryTree from './components/BinaryTree';
import RightPanel from './components/RightPanel';
import { NeighborsTableProps } from './components/NeighborsTable';

export class Node {
  data: number;
  right: Node | null;
  left: Node | null;
	constructor(data: number) {
		this.data = data;
		this.right = null;
		this.left = null;
	}
}

interface D3Hierarchy {
    name: string;
    children: [];
}

class BinarySearchTree {
    root: Node | null;
	constructor() {
		this.root = null;
	}

	insert(data: number) {
		const newNode = new Node(data);

		if (this.root === null) {
			this.root = newNode;
		} else {
			this.insertNode(this.root, newNode);
		}
	}

	insertNode(root: Node, newNode: Node) {
		if (newNode.data < root.data) {
			if (root.left === null) {
				root.left = newNode;
			} else {
				this.insertNode(root.left, newNode);
			}
		} else {
			if (root.right === null) {
				root.right = newNode;
			} else {
				this.insertNode(root.right, newNode);
			}
		}
	}

	getAllRightNeighbors() {
		let currentNodes = [this.root];
		let nodesToVisit = [];
		const neighborsTable = [];

		while (currentNodes.length !== 0) {
			for (let i = 0; i < currentNodes.length; i++) {
				if ((currentNodes[i] as Node).left !== null) {
					nodesToVisit.push((currentNodes[i] as Node).left);
				}
				if ((currentNodes[i] as Node).right !== null) {
					nodesToVisit.push((currentNodes[i] as Node).right);
				}
				if (i !== 0) {
					neighborsTable.push([currentNodes[i - 1], currentNodes[i]])
				}
			}
			currentNodes = nodesToVisit;
			nodesToVisit = [];
		}

		return (neighborsTable as Node[][])
    }
  
    transformToD3Hierarchy() {
        function dfs(node: Node | null, output: any = {}) {
            if (node !== null) {
                output.name = String(node.data);
                if (node.left !== null) {
                    output.children = [];
                    output.children.push(dfs(node.left));
                }
                if (node.right !== null) {
                    if (!output.children) {
                        output.children = [];
                    }
                    output.children.unshift(dfs(node.right));
                }
            }
		    return output
	    }
	    return dfs(this.root)
    }
}

interface AppState {
    tree: BinarySearchTree;
}

class App extends React.Component<{}, AppState> {
    constructor(props: any) {
        super(props);
        // создаем дерево и вставляем в него несколько нод
        const binaryTree = new BinarySearchTree();
        binaryTree.insert(9)
        binaryTree.insert(5)
        binaryTree.insert(7)
        binaryTree.insert(6)
        binaryTree.insert(8)
        binaryTree.insert(11)
        binaryTree.insert(10)
        binaryTree.insert(2)
        binaryTree.insert(12)
        this.state = {
            tree: binaryTree
        };
    }

    handleAdditionToTree() {
        const input = document.querySelector('input') as HTMLInputElement;
        const inputData = input.value;
        if (inputData.length === 0) {
            return
        }
        input.value = '';
        const data: string[] = inputData.split(' ');

        // копируем текущее дерево чтобы не мутировать this.state
        // копируем вместе с прототипом, чтобы были доступны методы класса
        const copiedTree = Object.assign(Object.create(Object.getPrototypeOf(this.state.tree)), this.state.tree);
        for (let item of data) {
            copiedTree.insert(Number(item));
        }
        this.setState({
            tree: copiedTree
        });
    }

    render() {
        const addToTreeProps = {
            onClick: () => {this.handleAdditionToTree()}
        };

        const treeData = this.state.tree.transformToD3Hierarchy();

        const neighborsTableProps: NeighborsTableProps = {
            rightNeighbors: this.state.tree.getAllRightNeighbors()
        };

        return (
            <div className="App">
                <h1>Найти всех правых соседей в бинарном дереве</h1>
                <div className="row">
                    <BinaryTree 
                    data={treeData} 
                    width={800} 
                    height={800} 
                    svgProps={{
                    transform: "rotate(90)"
                    }} 
                    textProps={{
                    transform: "rotate(270)"
                    }} 
                    animated={true} 
                    nodeRadius={10} 
                    />
                    <RightPanel 
                    neighborsTableProps={neighborsTableProps} 
                    addToTreeProps={addToTreeProps} 
                    />
                </div>
            </div>
        )
  }
}

export default App;
