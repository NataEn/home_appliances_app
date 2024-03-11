export type AddClassNamesParam = (string | undefined | null)[] | string

export function addClassNames(classNames: AddClassNamesParam): string {
    if (!Array.isArray(classNames) && (typeof classNames === "string")) return classNames
    if (Array.isArray(classNames)) {      
        const names = classNames.filter(className => (typeof className === "string"))
        if (names.length >=1) {
            return names.join(" ")
        }
    }
    // if any other type of var is given --> return empty string
    return ""
}
const Utils = {
    addClassNames,

}

export default Utils 