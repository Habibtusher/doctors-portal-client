import React from 'react';

const Navbar = () => {
    return (

        <nav class="navbar navbar-expand-lg navbar-light text-white">
            <div class="container-fluid">

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item me-5">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link" href="/dashboard/allpatients">Patient</a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link text-white" href="/dashboard/appointment">Dashboard</a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link text-white" href="#">Admin</a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link text-white" href="#">Blogs</a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link text-white" href="#">Contact Us</a>
                        </li>
                      
                    </ul>
                </div>
            </div>
        </nav>


    );
};

export default Navbar;