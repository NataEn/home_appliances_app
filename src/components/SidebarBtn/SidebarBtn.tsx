import React, { FC, useState } from "react";


const SidebarBtn: FC =() => {
    const [showSideBar, setShowSideBar]=useState(false)
return (<div onClick={()=> setShowSideBar(!showSideBar)} className={`sidebar-btn ${showSideBar && 'active'}`}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
    </div>)
}

export default SidebarBtn