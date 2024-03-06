import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Utils from "../../../../Utils/mainUtils";

export interface SettingOptionProps {
    readonly uuid: string | number,
    value?: string | null,
    className?: string | null
}


const SettingOption: FC<SettingOptionProps> = ({ uuid, value, className }): JSX.Element => {

    return <div className={Utils.AddClassNames(["option", className])} key={uuid}>
        {value&&<span className="option-value">{value}</span>}
    <div className="check"><FontAwesomeIcon icon={faCheck}/></div>
</div>
}

export default SettingOption;