import React, { FC, useState } from "react";
import Utils from "../../../../Utils/mainUtils";
import SettingOption from "../SettingOption/SettingOption";
import { StyleSettingOption } from "../../Settings"

export interface SettingBoxProps {
    key: string | number,
    title: string,
    options: StyleSettingOption[],
    className?: string | undefined
}

const SettingBox: FC<SettingBoxProps> = ({ key, title, options, className }): JSX.Element => {
    const [settingType, setSettingType] = useState(title)
    const [settingOption, setSettingOption] = useState(options[0].className)

    const onClickSettingOption = (className: string): void => {
        console.log("from setting box", className)
        setSettingOption(className)
    }

    return <div className={Utils.AddClassNames(["setting-box", className])} key={key}>
        <h2>{title}</h2>
        <div className="options-container">{options.map((option: StyleSettingOption) => <SettingOption onClickOption={onClickSettingOption} selectedOption={settingOption} uuid={option.uuid} value={option.value} className={option.className} />)}</div>
    </div>
}

export default SettingBox;