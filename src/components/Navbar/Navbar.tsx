import React, { FC, useEffect, useRef, useState } from "react";
import SidebarBtn from "../SidebarBtn/SidebarBtn"
import Sidebar from "../Sidebar/Sidebar";
import Navlink, { NavlinkElement} from "../Navlink/Navlink";
import useWindowDimensions from '../../hooks/useWindowDimentions/useWindowDimantions'
import Lang from "../../pages/settingsPage/components/lang"
import {navlinks} from './const'

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
                <a href="#!" className="logo"> Home Design Hub</a>
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