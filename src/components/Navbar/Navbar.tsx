import React, { FC } from "react";

const Navbar: FC =() => {
return (<div className="navbar container">
    <a href="#!" className="logo"> Home Appliances Hub</a>
    <div className="nav-links">
        <a href="#!" className="active">Home</a>
        <a href="#!">Designs</a>
        <a href="#!">Settings</a>
    </div>
    <div className="navbar-btn"></div>
    </div>)
}

export default Navbar