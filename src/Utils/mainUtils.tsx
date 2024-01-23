export interface AddClassNamesParams {
    classNames?: string | string[] | undefined[]
}
export function AddClassNames(classNames: AddClassNamesParams): string {
    if (!Array.isArray(classNames) && (typeof classNames === "string")) return classNames
    if (Array.isArray(classNames)) {
        const names = classNames.map(className => {
            if (!!className) {
                return className
            }
            return "" // for a falsy item
        })

        if (names.length > 1) { return names.join(" ") } return ""
    }
    else{
        // if any other type of var is given --> return empty string
        return ""
    }
}

module.exports = {
    AddClassNames,

}