import React from 'react';

const Navbar = () =>{
    return(
            <nav className="navbar navbar-expand-lg navbar-dark position-relative"  style={{backgroundColor: "#0FD711", borderStyle: "none"}}>
            <a className="navbar-brand" href="/croirec/FO/">CROI RECENSEMENT</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/croirec/FO/inscription">Inscription</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;