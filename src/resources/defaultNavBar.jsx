import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const navBar = () => {

    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" >Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" >Home</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" >Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            </ul>
                        </li>


                    </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default navBar