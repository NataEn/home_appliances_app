import React, { FC, useState } from "react";
import SidebarBtn from "../SidebarBtn/SidebarBtn"
import Sidebar from "../Sidebar/Sidebar";
import Navlink, { NavlinkElement} from "../Navlink/Navlink";
import {navlinks} from './const'

const Navbar: FC = () => {
    const [showSideBar, setShowSideBar] = useState(false)
    return (
        <>
            <div className="navbar container">
                <a href="#!" className="logo"> Home Appliances Hub</a>
                <div className="nav-links">
                    {navlinks.map((link: NavlinkElement )=>< Navlink name={link.name} path={link.path} value={link.value}/>)}
                </div>
                <SidebarBtn showSideBar={showSideBar} setShowSideBar={setShowSideBar}/>
            </div>
            {showSideBar && <Sidebar />}
        </>
    )
}

export default Navbar