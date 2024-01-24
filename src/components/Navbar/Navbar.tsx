import React, { FC, useEffect, useRef, useState } from "react";
import {Link} from "react-router-dom"
import SidebarBtn from "../SidebarBtn/SidebarBtn"
import Sidebar from "../Sidebar/Sidebar";
import Navlink, { NavlinkElement} from "../Navlink/Navlink";
import useWindowDimensions from '../../hooks/useWindowDimentions/useWindowDimantions'
import Lang from "../../pages/settingsPage/components/lang"
import {navlinks} from './navlinks'

const Navbar: FC = () => {
    const [showSideBar, setShowSideBar] = useState(false)

    const [ width, height ] = useWindowDimensions();

    useEffect(()=>{
        if(showSideBar && width > 748){
            setShowSideBar(!showSideBar)
        }
    },[width, showSideBar])

    return (
        <>
            <div className="navbar container">
                <Navlink path={"/"} value={"Home Design Hub"} key={"Home Design Hub"} className="logo" name={"logo"}/> 
                <div className="nav-links">
                    {navlinks.map((link: NavlinkElement )=>< Navlink name={link.name} path={link.path} value={link.value} key={link.name}/>)}
                    <Lang/>
                </div>
                <SidebarBtn showSideBar={showSideBar} setShowSideBar={setShowSideBar}/>
            </div>
            {showSideBar && <Sidebar />}
            <div>
    	</div>
        </>
    )
}

export default Navbar