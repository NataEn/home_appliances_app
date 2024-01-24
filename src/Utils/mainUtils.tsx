export type AddClassNamesParam= string | (string | undefined)[]

export function AddClassNames(classNames: AddClassNamesParam): string {
    if (!Array.isArray(classNames) && (typeof classNames === "string")) return classNames
    if (Array.isArray(classNames)) {
        const names = classNames.filter(className => (typeof className === "string"))
        if (names.length > 1) {
            return names.join(" ")   
        }
    }
        // if any other type of var is given --> return empty string
        return ""
}

module.exports = {
    AddClassNames,

}