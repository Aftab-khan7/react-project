import React from "react";

function Header() {

    return (
        <div className="header-section">
            <nav className="navbar navbar-expand-lg bg-primary-subtle p-3 ">
                <div className="contianer-fluid">
                    <a href="#" className="navbar-brand">ToDO List</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-lg-0">
                        <li className="nav-item">
                            <a href="" className="nav-link">Home</a>
                        </li>
                        <li className="nav-itme">
                            <a href="" className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link">My list</a>
                        </li>
                    </ul>
                    <form action="" role="search" className="d-flex">
                        < input className="form-control me-2" type="search" placeholder="Search Here!" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>



            </nav>
        </div>
    );
}



export default Header