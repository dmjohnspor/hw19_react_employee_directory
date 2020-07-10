import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

function Table(props) {
    return (
        <table className="striped" >
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
                </tr>
            </thead>

            <tbody>
                {props.tableRow}
            </tbody>
        </table>
    )
};

export default Table;
