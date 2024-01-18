import React, {FC} from "react";
export interface CardProps{
title: string;
description: string;
image: {src: string, alt: string, [key: string]: any}
} 
const Card:FC<CardProps>=({title, description, image})=>{
    return<div className="card">
        <div className="card-img"><img src={image.src} alt={image.alt}/></div>
        <div className="card-info">
            <h3 className="card-info-title">{title}</h3>
            <p className="card-info-text">{description}</p>
        </div>
    </div>
}

export default Card;