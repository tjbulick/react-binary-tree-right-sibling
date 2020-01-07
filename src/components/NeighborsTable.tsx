import React from 'react';

interface NeighborsProps {
    rightNeighbors: any;
}

export default function NeighborsTable(props: NeighborsProps) {
    return (
        <div className="neighbors-table">
            <h1>Таблица найденных соседей (обновляется автоматически):</h1>
            <table>
                <tbody>
                    {props.rightNeighbors.map((item: any, index: number) => {
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
        </div>
    )
}