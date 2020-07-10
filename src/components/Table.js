import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

function Table() {
    return (
        <table className="striped">
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
                <tr>
                    <td>image</td>
                    <td>Clair</td>
                    <td>222-222-2222</td>
                    <td>email@email.com</td>
                    <td>20/1/80</td>
                </tr>
                <tr>
                    <td>image</td>
                    <td>Clair</td>
                    <td>222-222-2222</td>
                    <td>email@email.com</td>
                    <td>20/1/80</td>
                </tr>
                <tr>
                    <td>image</td>
                    <td>Clair</td>
                    <td>222-222-2222</td>
                    <td>email@email.com</td>
                    <td>20/1/80</td>
                </tr>
            </tbody>
        </table>
    )
};

export default Table;
