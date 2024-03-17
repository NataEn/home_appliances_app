import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Utils from "../../../../Utils/mainUtils";

export interface SettingOptionProps {
    readonly uuid: string | number,
    selectedOption: string,
    value: string,
    className: string,
    title: string,
    onClickOption:(className: string, value: string, title: string)=>void
}

const SettingOption: FC<SettingOptionProps> = ({ uuid, value, className, title, selectedOption, onClickOption }): JSX.Element => {
    return <div className={Utils.addClassNames(["option", "btn", className])} key={uuid} onClick={(e: React.MouseEvent)=>onClickOption(className, value, title)}>
        {value&&<span className="option-value">{value}</span>}
    {selectedOption===className && <div className="check"><FontAwesomeIcon icon={faCheck}/></div>}
</div>
}

export default SettingOption;