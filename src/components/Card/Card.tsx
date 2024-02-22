import React, { FC } from "react";
import * as Utils from "../../Utils/mainUtils"
import Image from "../Image/Image";
export interface CardProps {
    title?: string;
    description: string | JSX.Element;
    uuid: string | number;
    image?: { src: string, alt: string, [key: string]: any }
    className?: string;
    infoDirection?: "right" | "left" | "up" | "down";
}
const Card: FC<CardProps> = ({ title, description, image, uuid, className, infoDirection = "right" }) => {
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
                {/* {`instance of : ${<div>sample</div> instanceof Element}`} */}
                {title && <h3 className="card-info-title" >{title}</h3>}
                <p className="card-info-text">{description}</p>
            </div>
        </div>)
}

export default Card;