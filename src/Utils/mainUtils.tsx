import { Tuple } from "@reduxjs/toolkit"

export type AddClassNamesParam = (string | undefined | null)[] | string

export function addClassNames(classNames: AddClassNamesParam): string {
    if (!Array.isArray(classNames) && (typeof classNames === "string")) return classNames
    if (Array.isArray(classNames)) {
        const names = classNames.filter(className => (typeof className === "string"))
        if (names.length >= 1) {
            return names.join(" ")
        }
    }
    // if any other type of var is given --> return empty string
    return ""
}

export function titleCase(str:string):string{
    return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase()
}

export type CreateTitleParam = string | undefined | null

export function CreateTitle(str: CreateTitleParam): string {
    if (!!str) {
        const titleArr = str.split(/(?=[A-Z])/)
        return titleArr.map(word=>titleCase(word)).join(" ")
    }
    return ""
}

// export type CaseString = string | undefined | null

// export function isUpperCase(str: IsUpperCaseString,index:number=0):Tuple<[boolean,number]> | number{
//     if (!!str) {

//         if (str.length === 1) {
//             return (/^[A-Z]+$/.test(str),index)
//         }
//         else return isUpperCase(str, )

//     }
//     return -1
// }

const Utils = {
    addClassNames,
    titleCase,
    CreateTitle,

}

export default Utils 