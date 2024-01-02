import React, { FC } from "react";
import SidebarBtn from "../SidebarBtn/SidebarBtn"
import Sidebar from "../Sidebar/Sidebar";


const Navbar: FC = () => {
    return (
        <>
            <div className="navbar container">
                <a href="#!" className="logo"> Home Appliances Hub</a>
                <div className="nav-links">
                    <a href="#!" className="active">Home</a>
                    <a href="#!">Designs</a>
                    <a href="#!">Settings</a>
                </div>
                <SidebarBtn />
            </div>
            <Sidebar />
        </>
    )
}

export default Navbar