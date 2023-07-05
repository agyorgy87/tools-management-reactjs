import '../css/Table.css';
import React from 'react';

export default function Table (props) {
    
    return (
        <div className="table-container"> 
            <table>
                <thead>
                    <tr className="mainBoardTitle">
                        <th id="name">Name</th>
                        <th id="description">Explanation</th>
                        <th id="quantity">Stock Of Store</th>
                        <th id="price">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((row, index) => (
                            <tr key={"tools" + index}>
                                <td>{row.Name}</td>
                                <td>{row.Description}</td>
                                <td>{row.Quantity}</td>
                                <td>{row.Price}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}