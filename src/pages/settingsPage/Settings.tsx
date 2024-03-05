import React, {FC} from "react";
import SettingBox from "./components/SettingBox/SettingBox";
import mockSettings from "./mockData.json"

export interface StyleSetting{
    uuid?:string,
    name:string,
    value: StyleSettingOption[],
}

export interface StyleSettingOption{
    uuid: string | number,
    value?: string | null,
    className?: string | null
}

export default function Settings(){

    return <div className="settings">
        <div className="options-container">
            {mockSettings.map((setting:StyleSetting)=><SettingBox key={setting?.uuid} title={setting.name} options={setting.value}/>)}
        </div>
    </div>
}