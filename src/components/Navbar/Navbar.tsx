import React, { FC, useState } from "react";


const Navbar: FC =() => {
    const [showSideBar, setShowSideBar]=useState(false)
return (<div className="navbar container">
    <a href="#!" className="logo"> Home Appliances Hub</a>
    <div className="nav-links">
        <a href="#!" className="active">Home</a>
        <a href="#!">Designs</a>
        <a href="#!">Settings</a>
    </div>
    <div onClick={()=> setShowSideBar(!showSideBar)} className={`sidebar-btn ${showSideBar && 'active'}`}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
    </div>
    </div>)
}

export default Navbar