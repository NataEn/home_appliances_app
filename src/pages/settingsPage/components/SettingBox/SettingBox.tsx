import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export interface SettingBoxProps {
    title: string,
    options: any[]
}

// const Option=(value:any, optionIndex:number):JSX.Element=>{
//     return <div className="option" key={optionIndex}>{value}
//     <div className="check"></div>
//     </div>;
// }

const SettingBox: FC<SettingBoxProps> = ({ title, options }): JSX.Element => {
    return <div className="setting-box">
        <h2>{title}</h2>
        <div className="options-container">{options.map((option, index) => <div className="option" key={index}>{option}
            <div className="check"><FontAwesomeIcon icon={faCheck}/></div>
        </div>)}</div>
    </div>
}

export default SettingBox;