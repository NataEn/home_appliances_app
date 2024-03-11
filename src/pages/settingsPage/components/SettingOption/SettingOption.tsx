import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Utils from "../../../../Utils/mainUtils";

export interface SettingOptionProps {
    readonly uuid: string | number,
    selectedOption: string,
    value?: string | null | undefined,
    className: string,
    onClickOption:(optionClassName:string)=>void
}
const styleClassName = (value: string | null | undefined, className: string): string => value ? "btn" : `${className} regular`;

const SettingOption: FC<SettingOptionProps> = ({ uuid, value, className, selectedOption, onClickOption }): JSX.Element => {
    return <div className={Utils.AddClassNames(["option", styleClassName(value,className)])} key={uuid} onClick={(e: React.MouseEvent)=>onClickOption(className)}>
        {value&&<span className="option-value">{value}</span>}
    {selectedOption===className && <div className="check"><FontAwesomeIcon icon={faCheck}/></div>}
</div>
}

export default SettingOption;