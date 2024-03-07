import React, { FC, useState } from "react";
import SettingBox from "./components/SettingBox/SettingBox";

export type StyleSetting = {
    readonly uuid: string | number,
    name: string,
    value: StyleSettingOption[],
}

export type StyleSettingOption = {
    readonly uuid: string | number,
    value?: string | null | undefined,
    className: string
}
export interface SettingsOwnProps {
settings:StyleSetting[],
}
export type SettingsProps = SettingsOwnProps

const Settings: FC<SettingsProps> = ({settings}): JSX.Element => {
    const [theme, setTheme] = useState("light")

    return <div className="settings">
        <div className="options-container">
            {settings.map((setting: StyleSetting) => <SettingBox key={setting.uuid} title={setting.name} options={setting.value} />)}
        </div>
    </div>
}

export default Settings;