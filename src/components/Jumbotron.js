import React from 'react';
import { Typography, Card, CardContent } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: 128,
        background: '#2196f3'
    }
}));

export default function Jumbotron() {
    const classes = useStyles();

    return (
        <Card className={classes.root} raised='true'>
            <CardContent>
                <Typography variant='h2' align='center'>
                    Employee Directory
                    </Typography>
                <Typography variant='subtitle1' align='center'>
                    Limit your search by typing in the search box.
                    </Typography>
                <Typography variant='subtitle1' align='center'>
                    Sort results by clicking on any of the headers.
                    </Typography>
            </CardContent>
        </Card>
    );
}