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
          console.log(`updating to ${title}:${value}`)
          setSettings({...newSettings})
    }
    const onClickSettingOption = (className: string, value: string, title: string): void => {
        console.log("from setting box", className)
        updateSettingsContext(title, value)
    }



    return <div className={Utils.addClassNames(["setting-box", className])} key={key}>
        <h2>{Utils.CreateTitle(title)}</h2>
        <div className="options-container">{options.map((option: StyleSettingOption) => 
        <SettingOption onClickOption={onClickSettingOption} uuid={option.uuid} value={option.value} className={option.className} title={title} />)}
        </div>
    </div>
}

export default SettingBox;