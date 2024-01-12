import React, { FC, JSX } from "react";
import { IconDefinition} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export interface NavlinkElement {
    value: string;
    name: string;
    path?: string;
    icon?: IconDefinition;
    className?: string;
}


const Navlink :FC<NavlinkElement> = ( {value, name, path, icon, className} : NavlinkElement): JSX.Element => {
    return (<a href={path ?? "#!"} key={ name } className={`navlink ${className}`}>
        {icon && <FontAwesomeIcon icon={icon}/>}
        { value } 
        </a>
    )
}

export default Navlink