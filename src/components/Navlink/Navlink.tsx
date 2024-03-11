import React, { FC, JSX } from "react";
import { IconDefinition} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useLocation } from "react-router-dom";
import * as Utils from "../../Utils/mainUtils"


export interface NavlinkElement {
    value: string | JSX.Element;
    name: string;
    path?: string;
    icon?: IconDefinition;
    className?: string;
}


const Navlink :FC<NavlinkElement> = ( {value, name, path, icon, className} : NavlinkElement): JSX.Element => {
    const location = useLocation() 
    return (<Link to={path ?? "#!"} key={ name } className={location.pathname === path? Utils.AddClassNames(["navlink", "active", className]) : Utils.AddClassNames(["navlink", className])}>
        {icon && <FontAwesomeIcon icon={icon}/>}
        { value } 
        </Link>
    )
}

export default Navlink