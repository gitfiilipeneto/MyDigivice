import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/digivice.png'

import '../../node_modules/bootstrap/dist/js/bootstrap.min.js'


const NavBar = () => {


    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <img src={Logo} alt="digiviceLogo" width="30" height="24" lass="d-inline-block align-text-top"></img>
                <Link class="navbar-brand" to="/">My Digivice</Link>
                <button class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to='/qualquercoisa'>to 404</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">teste 2</a>
                            </li>
                        </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar