import React, { FC} from "react";
import SidebarBtn from "../SidebarBtn/SidebarBtn"


const Navbar: FC =() => {
return (<div className="navbar container">
    <a href="#!" className="logo"> Home Appliances Hub</a>
    <div className="nav-links">
        <a href="#!" className="active">Home</a>
        <a href="#!">Designs</a>
        <a href="#!">Settings</a>
    </div>
    <SidebarBtn/>
    </div>)
}

export default Navbar