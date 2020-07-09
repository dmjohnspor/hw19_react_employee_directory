import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

function Jumbotron() {
    return (
        <div className="container">
            <div className="col s12 m7">
                <div className="card horizontal light-blue lighten-3">
                    <div className="card-stacked">
                        <div className="card-content">
                            <h2 class="header">Employee Directory</h2>
                            <p>
                                Welcome! Please start your search by typing any keywords below:
                        </p>
                        </div>
                        {/* Put the search input here */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jumbotron;