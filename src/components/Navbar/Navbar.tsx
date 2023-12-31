import React, { FC } from "react";

const Navbar: FC =() => {
return (<div className="navbar container">
    <a href="#!" className="logo"> Home Appliances Hub</a>
    <div className="nav-links">
        <a href="#!" className="active">Home</a>
        <a href="#!">Designs</a>
        <a href="#!">Settings</a>
    </div>
    <div className="sidebar-btn">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
    </div>
    </div>)
}

export default Navbar