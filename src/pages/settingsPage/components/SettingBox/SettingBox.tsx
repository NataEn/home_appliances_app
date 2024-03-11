import React, { FC, useContext, useState } from "react";
import Utils from "../../../../Utils/mainUtils";
import SettingOption from "../SettingOption/SettingOption";
import { StyleSettingOption } from "../../Settings"
import { SettingsContext } from "../../../../Contexts";

export interface SettingBoxProps {
    key: string | number,
    title: string,
    options: StyleSettingOption[],
    className?: string | undefined
}

const SettingBox: FC<SettingBoxProps> = ({ key, title, options, className }): JSX.Element => {
    const [settingType, setSettingType] = useState(title)
    const [settingOption, setSettingOption] = useState(options[0].className)

    const { settings, setSettings } = useContext(SettingsContext);

    const updateSettingsContext=(title: string, value: string)=>{
          const newSettings={...settings, [title]:value}
          setSettings({...newSettings})
    }
    const onClickSettingOption = (className: string, value: string): void => {
        console.log("from setting box", className)
        setSettingOption(className)
        updateSettingsContext(className, value)
    }

    return <div className={Utils.AddClassNames(["setting-box", className])} key={key}>
        <h2>{title}</h2>
        <div className="options-container">{options.map((option: StyleSettingOption) => <SettingOption onClickOption={onClickSettingOption} selectedOption={settingOption} uuid={option.uuid} value={option.value} className={option.className} />)}</div>
    </div>
}

export default SettingBox;