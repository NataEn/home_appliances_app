import * as mainUtils from "./mainUtils"

describe('addClassNames function', () => {
    it('returns empty string for empty string', () => {
        const className : mainUtils.AddClassNamesParam=""
        expect(mainUtils.addClassNames(className)).toBe("")
    });
    
    it('returns one class name for one class name', () => {
        const className : mainUtils.AddClassNamesParam="test"
        expect(mainUtils.addClassNames(className)).toBe("test")
    });

    it('returns empty string for array of strings', () => {
        const className : mainUtils.AddClassNamesParam=["test", "test_two"]
        expect(mainUtils.addClassNames(className)).toBe("test test_two")
    });
    
    it('returns empty string for array of strings and undefined', () => {
        const className : mainUtils.AddClassNamesParam=["test", undefined, "test_two"]
        expect(mainUtils.addClassNames(className)).toBe("test test_two")
    });

  });