import React from 'react'
import {Link} from "react-router-dom";

function Navbar() {
    return(
        <nav className="navbar  navbar-expand sticky-top navbar-light"
            style={{backgroundColor:"#3D7DCA"}}>
            <Link className="navbar-brand" to="/" style={{color: "#FFCB05", fontWeight:"bold"}}>Pokemon Ohyeaaa!</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/" style={{color: "#FFCB05"}}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/favorites" style={{color: "#FFCB05"}}>Favorites</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


export default Navbar