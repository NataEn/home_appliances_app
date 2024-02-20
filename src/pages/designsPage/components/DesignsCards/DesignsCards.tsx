import React, {FC} from "react";
import Card from "../../../../components/Card/Card"
import {Designs} from "../../mockData"

export default function DesignsCards(){
    const designCardInfo=()=>{
        return <div className="design-card-info">

        </div>
    }
    return <div className="designsCards-container">
        {Designs.map((design: any) => <Card title={design.title} description={"design text"} uuid={design.uuid} image={design.image} infoDirection={"down"} className="sample"/>        )}
        </div>
}