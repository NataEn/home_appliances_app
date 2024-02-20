export type AddClassNamesParam = (string | undefined)[] | string

export function AddClassNames(classNames: AddClassNamesParam): string {
    if (!Array.isArray(classNames) && (typeof classNames === "string")) return classNames
    if (Array.isArray(classNames)) {      
        const names = classNames.filter(className => (typeof className === "string"))
        console.log(names)
        if (names.length >=1) {
            return names.join(" ")
        }
    }
    // if any other type of var is given --> return empty string
    return ""
}
const Utils = {
    AddClassNames,

}

export default Utils 