import React, {FC} from "react";
import SettingBox from "./components/SettingBox/SettingBox";

export default function Settings(){
    const mockOptions=["1","2","3","4"]
    return <div className="settings">
        <div className="options-container">
            <SettingBox title={"Preffered Theme"} options={mockOptions}/>
            <SettingBox title={"Primary Color"} options={mockOptions}/>
            <SettingBox title={"Font Size"} options={mockOptions}/>
            <SettingBox title={"Animation Speed"} options={mockOptions}/>
            <SettingBox title={"Language"} options={mockOptions}/>
        </div>
    </div>
}