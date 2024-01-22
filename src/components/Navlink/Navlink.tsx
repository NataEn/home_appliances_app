import React, { FC, JSX } from "react";
import { IconDefinition} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useLocation } from "react-router-dom";


export interface NavlinkElement {
    value: string;
    name: string;
    path?: string;
    icon?: IconDefinition;
    className?: string;
}


const Navlink :FC<NavlinkElement> = ( {value, name, path, icon, className} : NavlinkElement): JSX.Element => {
    const location = useLocation() 
    return (<Link to={path ?? "#!"} key={ name } className={location.pathname === path?`navlink ${className} active`: `navlink ${className}`}>
        {icon && <FontAwesomeIcon icon={icon}/>}
        { value } 
        </Link>
    )
}

export default Navlink