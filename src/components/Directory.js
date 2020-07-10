import React, { Component } from 'react';
import API from '../utils/API';
import Moment from 'moment';
import Jumbotron from './Jumbotron';
import Table from './Table';
import TableRow from './TableRow';
import SearchBox from './SearchBox';


class Directory extends Component {
    state = {
        employees: [],
        search: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    componentDidMount() {
        API.getEmployees()
            .then(res => this.setState({ employees: res.data.results }))
            .catch(err => console.log(err));
    }

    formatDOB = dob => {
        const newDOB = Moment(dob).format("LL");
        return newDOB;
    }

    render() {
        return (
            <div className="container">
                <Jumbotron
                    searchBox={<SearchBox onChange={this.handleInputChange} value={this.state.search} />}
                />
                <Table
                    tableRow=
                    {this.state.employees.map(employee => (
                        <TableRow
                            image=<img src={employee.picture.thumbnail} alt={`${employee.name.first} ${employee.name.last}`} />
                            name = {`${employee.name.first} ${employee.name.last}`}
                    phone={employee.cell}
                    email={employee.email}
                    dob={this.formatDOB(employee.dob.date)}
                    key={employee.id.value}
                />
                    ))}
                />
            </div>
        )
    }
}

export default Directory;