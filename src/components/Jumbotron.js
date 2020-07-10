import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'


function Jumbotron() {
    return (
        <div className="row">
            <div className="col s12">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Employee Directory</span>
                        <p>Narrow down your search by typing in the search box bellow</p>
                    </div>
                    <div className="card-action">
                        {/* Put search bar here */}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Jumbotron;