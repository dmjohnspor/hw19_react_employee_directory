import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'

function Jumbotron(props) {
    return (
        <div className="row">
            <div className="col s12">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text center-align">
                        <h2>Employee Directory</h2>
                        <p>Narrow down your search by typing in the search box bellow</p>
                    </div>
                    <div className="card-action center-align">
                        {props.searchBox}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Jumbotron;