import React from 'react';
import { Node } from '../App';

export interface NeighborsTableProps {
    rightNeighbors: Node[][] | null;
}

export default function NeighborsTable(props: NeighborsTableProps) {
    return (
        <div className="neighbors-table">
            <h1>Таблица найденных соседей (обновляется автоматически):</h1>
            {
                (props.rightNeighbors !== null) ? (
                    <table>
                        <tbody>
                            {(props.rightNeighbors as Node[][]).map((item: Node[], index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item[0].data}</td>
                                        <td>→</td>
                                        <td>{item[1].data}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                ) : (
                    'Нет правых соседей'
                )
            }
        </div>
    )
}