import React, { FC } from "react";
import Utils from "../../../../Utils/mainUtils";
import SettingOption from "../SettingOption/SettingOption";
import {StyleSetting, StyleSettingOption} from "../../Settings"

export interface SettingBoxProps {
    title: string,
    options: StyleSetting[],
    className?: string
}

const SettingBox: FC<SettingBoxProps> = ({ title, options, className }): JSX.Element => {
    return <div className={Utils.AddClassNames(["setting-box", className])}>
        <h2>{title}</h2>
        <div className="options-container">{options.map((option: StyleSettingOption, index) => <SettingOption uuid={index} value={option.value} className={option.className}/>)}</div>
    </div>
}

export default SettingBox;