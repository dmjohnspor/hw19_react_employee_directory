import React, { useState, useEffect } from 'react';
import { forwardRef } from 'react';
import Grid from '@material-ui/core/Grid'

import MaterialTable from "material-table";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Alert from '@material-ui/lab/Alert';

import axios from 'axios'
import Moment from 'moment';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const api = axios.create({
    baseURL: `https://randomuser.me/api/?results=20&nat=us&exc=gender,location,registered,nat&noinfo`
})

function SmartTable() {
    let columns = [
        { title: "id", field: "id.value", hidden: true },
        {
            title: "Image", field: "picture.thumbnail",
            render: rowData => <img src={rowData.picture.thumbnail} style={{ borderRadius: "50%" }} alt={rowData.name.first} />
        },
        { title: "Fisrt Name", field: "name.first" },
        { title: "Last Name", field: "name.last" },
        { title: "Email", field: "email" },
        { title: "Phone", field: "cell" },
        { title: "DOB", field: "dob.date", render: rowData => Moment(rowData.dob.date).format("LL") }
    ]
    const [data, setData] = useState([]); //table data

    //for error handling
    const [iserror] = useState(false)
    const [errorMessages] = useState([])

    useEffect(() => {
        api.get("/employees")
            .then(res => { setData(res.data.results) })
            .catch(error => { console.log(error) })
    }, [])

    return (
        <div className="App">

            <Grid container spacing={1}>
                <Grid item xs={3}></Grid>
                <Grid item xs={12}>
                    <div>
                        {iserror &&
                            <Alert severity="error">
                                {errorMessages.map((msg, i) => {
                                    return <div key={i}>{msg}</div>
                                })}
                            </Alert>
                        }
                    </div>
                    <MaterialTable
                        title="Your Employee Directory:"
                        columns={columns}
                        data={data}
                        icons={tableIcons}
                        options={{
                            headerStyle: {
                                backgroundColor: '#2196f3'
                            },
                            rowStyle: rowData => (rowData.tableData.id % 2 === 0) ? { backgroundColor: '#90caf9' } : { backgroundColor: '#e3f2fd' }
                            // rowStyle: rowData => console.log(rowData.tableData.id)
                        }}
                    />
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
        </div>
    );
}

export default SmartTable;