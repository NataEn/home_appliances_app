import * as mainUtils from "./mainUtils"

describe('AddClassNames function', () => {
    it('returns empty string for empty string', () => {
        const classNames_1 : mainUtils.AddClassNamesParam=""
        expect(mainUtils.AddClassNames(classNames_1)).toBe("")
    });

    it('returns empty string for a number', () => {
        const classNames_2 : mainUtils.AddClassNamesParam=2
        expect(mainUtils.AddClassNames(classNames_2)).toBe("")
    });

    it('returns empty string for a boolean', () => {
        const classNames_3 : mainUtils.AddClassNamesParam=true
        expect(mainUtils.AddClassNames(classNames_3)).toBe("")
    });

    it('returns empty string for a function', () => {
        const emptyFunction=()=>false
        const classNames_4 : mainUtils.AddClassNamesParam=emptyFunction
        expect(mainUtils.AddClassNames(classNames_4)).toBe("")
    });
    
    it('returns empty string for one class name', () => {
        const classNames_6 : mainUtils.AddClassNamesParam="test"
        expect(mainUtils.AddClassNames(classNames_6)).toBe("test")
    });

    it('returns empty string for array of strings', () => {
        const classNames_7 : mainUtils.AddClassNamesParam=["test", "test_two"]
        expect(mainUtils.AddClassNames(classNames_7)).toBe("test test_two")
    });
    
    it('returns empty string for array of strings and undefined', () => {
        const classNames_7 : mainUtils.AddClassNamesParam=["test", undefined, "test_two"]
        expect(mainUtils.AddClassNames(classNames_7)).toBe("test test_two")
    });

  });