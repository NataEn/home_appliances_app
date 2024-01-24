import { NavlinkElement } from "../Navlink/Navlink";
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons"

export const navlinks: NavlinkElement[] = [
    {
        value: "Home",
        name: "home",
        path: "/",
        icon: faHome,
    },
    {
        value: "Designs",
        name: "designs",
        path: "/designs",
        icon: faList,
    },
    {
        value: "Settings",
        name: "settings",
        path: "/settings",
        icon: faCog,
    },
]