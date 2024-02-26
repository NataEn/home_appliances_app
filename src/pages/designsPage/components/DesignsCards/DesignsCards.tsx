import React, { FC } from "react";
import Card from "../../../../components/Card/Card"
import { Designs } from "../../mockData"
import { topDesigners } from "../../../homePage/components/Designers/mockData";
import * as topDesignerTypes from "../../../homePage/components/Designers/types"

export default function DesignsCards() {

    const designCardInfo = (designerUuid: string, title: string) => {
        const designer = topDesigners.find((designer: topDesignerTypes.TopDesigner) => designer.uuid === designerUuid)
        return <div className="design-card-info">
            <img className="author-img" src={designer?.image.src} alt={designer?.image.alt} />
            <p className="design-title">{title}</p>
        </div>
    }
    return <div className="designsCards-container">
        {Designs.map((design: any) => <Card description={designCardInfo(design.designerUuid, design.title)} uuid={design.uuid} image={design.image} infoDirection={"down"} className="sample" />)}
    </div>
}