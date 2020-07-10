import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import TableRow from './TableRow';
import employee from '../mockData.json';
function Table() {
    console.log(employee);
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
                <TableRow
                    image= <img src={employee.results[0].picture.thumbnail} alt={`${employee.results[0].name.first} ${employee.results[0].name.last}`}/>
                    name={`${employee.results[0].name.first} ${employee.results[0].name.last}`}
                    phone={employee.results[0].cell}
                    email={employee.results[0].email}
                dob={employee.results[0].dob.date}
                />
            </tbody>
        </table>
    )
};

export default Table;
