import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="header">

            <nav class="navbar navbar-expand-lg navbar-light bg-dark " >
                <div class="container-fluid ms-5">
                    <h1 class="navbar-brand text-info">News Sect</h1>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse d-flex justify-content-end " id="navbarSupportedContent">

                        <div class="d-flex me-5">
                            <Link class="nav-link active text-info" aria-current="page" to="/">Home</Link>
                            <Link class="nav-link active text-info" aria-current="page" to="/topNews">TopNews</Link>
                            <Link class="nav-link active text-info" aria-current="page" to="/oldNews">OldNews</Link>
                            <Link class="nav-link active text-info" aria-current="page" to="/other">Other</Link>
                            <button class="btn btn-outline-info" to="/logIn">Log In</button>
                        </div>
                    </div>
                </div>
            </nav>


        </div>

    );
};

export default Navbar;