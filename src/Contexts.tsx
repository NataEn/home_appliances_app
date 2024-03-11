import { createContext } from 'react';

export type Settings = {
    theme: string,
    primaryColor: string,
    fontSize: string,
    animationSpeed: string
}
export type SettingsContextType = {
    settings: Settings
    setSettings: (settings: Settings) => void
}
export const initialSettings = {
    theme: 'light',
    primaryColor: 'pink',
    fontSize: 'medium',
    animationSpeed: "medium"
}

export const SettingsContext = createContext<SettingsContextType>({ settings: initialSettings, setSettings: () => { } })
