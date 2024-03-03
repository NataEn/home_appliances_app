import React, { FC } from "react";
import * as Utils from "../../Utils/mainUtils"
import Image from "../Image/Image";
import Navlink, { NavlinkElement } from "../Navlink/Navlink";
export interface CardProps {
    title?: string;
    description: string | JSX.Element;
    uuid: string | number;
    image?: { src: string, alt: string, [key: string]: any }
    className?: string;
    infoDirection?: "right" | "left" | "up" | "down";
    link?:NavlinkElement | JSX.Element;
}

function instanceOfNavlinkElement(object: any): object is NavlinkElement {
    return true;
}

const Card: FC<CardProps> = ({ title, description, image, uuid, className, link, infoDirection = "right" }) => {
    const directionClass = (direction: String) => {
        switch (direction) {
            case "left": return "infoLeft"
            case "right": return "infoRight"
            case "up": return "infoUp"
            case "down": return "infoDown"
            default: return "infoRight"
        }
    }

    return (
        <div
            className={Utils.AddClassNames(["card", className, directionClass(infoDirection)])}
            key={uuid}>
            <div className="card-img">
                {image && <img src={image.src} alt={image.alt} />}
            </div>
            <div className="card-info">
                {title && <h3 className="card-info-title" >{title}</h3>}
                <p className="card-info-text">{description}</p>
                {link && instanceOfNavlinkElement(link) && <Navlink className="card-link" value={link.value} path={link.path || "#!"} name={link.name}/>}
                {!instanceOfNavlinkElement(link) && link}

            </div>
        </div>)
}

export default Card;