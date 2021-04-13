import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () =>{
    return(
        <div className="jumbotron">
            <h1 className="display-3 col-sm-6">Veuillez vous inscrire s'il vous plaît </h1>
            <span className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</span>
            <hr className="my-4" />
            <span>It uses utility classNamees for typography and spacing to space content out within the larger container.</span>
            <span className="lead col-sm-4">
                <Link to="/inscription" className="btn btn-primary btn-lg">Inscription</Link>
            </span>
        </div>
    )
}

export default HomePage;