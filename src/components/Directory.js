import React, { Component } from 'react';
import API from '../utils/API'
import Jumbotron from './Jumbotron';
import Table from './Table'


class Directory extends Component {
    state = {
        employees: []
    }

    componentDidMount() {
        API.getEmployees()
            .then(res => this.setState({ employees: res.data.results }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <>
                <Jumbotron />,
                <Table />
            </>
        )
    }
}

export default Directory;