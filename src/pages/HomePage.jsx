import React from 'react';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';

const HomePage = () =>{
    return(
        <div className="jumbotron">
            <h1 className="display-3">Veuillez vous inscrire s'il vous plaît </h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4" />
            <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
            <p className="lead">
                <Link to="/inscription" className="btn btn-primary btn-lg">Inscription</Link>
            </p>
        </div>
    )
}

export default HomePage;