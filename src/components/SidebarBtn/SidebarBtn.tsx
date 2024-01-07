import React, { FC, JSX } from "react";


export interface SidebarBtnProps {
    showSideBar: boolean;
    setShowSideBar: Function;
}



const SidebarBtn:FC<SidebarBtnProps> = ({showSideBar, setShowSideBar}): JSX.Element => {

    const openSideBar=(): void => {
        setShowSideBar(!showSideBar)
    }

    return (<div onClick={openSideBar} className={`sidebar-btn ${showSideBar && 'active'}`}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
    </div>)
}

export default SidebarBtn