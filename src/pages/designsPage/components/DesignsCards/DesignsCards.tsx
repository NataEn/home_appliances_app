import React, { FC } from "react";
import Card from "../../../../components/Card/Card"
import { Designs } from "../../mockData"
import { topDesigners } from "../../../homePage/components/Designers/mockData";
import * as topDesignerTypes from "../../../homePage/components/Designers/types"

export interface Design{
    uuid: string,
    designerUuid: string,
    title: string,
    description: string,
    image: {src: string, alt: string}
}
export default function DesignsCards() {

    const designCardInfo = (uuid:string, designerUuid: string, title: string, description: string) => {
        const designer = topDesigners.find((designer: topDesignerTypes.TopDesigner) => designer.uuid === designerUuid)
        return <div className="design-card-info">
            <img className="author-img" src={designer?.image.src} alt={designer?.image.alt} />
            <p className="design-title">{title}</p>
            <p className="design-description">{description}</p>
        </div> 
    }

    const designLinkInfo=(uuid:string)=>{
        return {
        value:"read more",
        path:"#!",
        name:`design-card-${uuid}`
        }
    }
    return <div className="designsCards-container">
        {Designs.map((design: Design) => <Card description={designCardInfo(design.uuid, design.designerUuid,design.title, design.description)} uuid={design.uuid} image={design.image} link={designLinkInfo(design.uuid)} infoDirection={"down"}/>)}
    </div>
}