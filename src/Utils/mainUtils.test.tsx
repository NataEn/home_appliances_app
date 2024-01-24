import * as mainUtils from "./mainUtils"

describe('AddClassNames function', () => {
    it('returns empty string for empty string', () => {
        const className : mainUtils.AddClassNamesParam=""
        expect(mainUtils.AddClassNames(className)).toBe("")
    });
    
    it('returns empty string for one class name', () => {
        const className : mainUtils.AddClassNamesParam="test"
        expect(mainUtils.AddClassNames(className)).toBe("test")
    });

    it('returns empty string for array of strings', () => {
        const className : mainUtils.AddClassNamesParam=["test", "test_two"]
        expect(mainUtils.AddClassNames(className)).toBe("test test_two")
    });
    
    it('returns empty string for array of strings and undefined', () => {
        const className : mainUtils.AddClassNamesParam=["test", undefined, "test_two"]
        expect(mainUtils.AddClassNames(className)).toBe("test test_two")
    });

  });