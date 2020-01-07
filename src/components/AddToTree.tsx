import React from 'react';

interface AddToTreeProps {
    onClick: () => void;
}

export default class AddToTree extends React.Component<AddToTreeProps> {
    componentDidMount() {
        const input = document.querySelector('input') as HTMLInputElement;
        const button = document.querySelector('button') as HTMLButtonElement;
        input.addEventListener('keyup', function(event) {
            if ((event as KeyboardEvent).keyCode === 13) {
                button.click();
            }
        });
    }

    render() {
        return (
            <div className="add-to-tree">
                <h1>Добавить ноды в дерево (символ пробела - разделитель)</h1>
                <input type="text" placeholder="78 1 23" />
                <button onClick={this.props.onClick}>Добавить</button>
            </div>
        )
    }
}