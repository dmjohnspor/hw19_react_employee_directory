import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '50ch',
        },
    },
}));

export default function SearchBox(props) {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
                id="outlined-basic"
                label="Search here"
                variant="outlined"
                value={props.value}
                name="search"
                onChange={props.onChange}
                type="text"
            />
        </form>
    );
}