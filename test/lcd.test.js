/**
 * Unit test class for lcd lib
 */
var LCD = require("../lib/lcd");

describe("LCD class", () => {
    let lcdinst = new LCD(3,3);

    describe("can show function", () => {
        it("should return true when number is between 0 and 999", () => {
            let val = lcdinst.canShow(0);
            expect(val).toBe(true);

            val = lcdinst.canShow(999);
            expect(val).toBe(true);

            val = lcdinst.canShow(45);
            expect(val).toBe(true);

        })

        it("should return false when number is negative 0", () => {
            let val = lcdinst.canShow(-10);
            expect(val).toBe(false);
        })

        it("should return false when number is above 999", () => {
            let val = lcdinst.canShow(1045);
            expect(val).toBe(false);
        })
    })

    describe("show function", () => {
        let testedLcd;
        beforeAll(() => {
            testedLcd = new LCD(3,3);
            
        })

        it("should show number expected", () => {
            
            process.stdout.write = jest.fn((data) => { return null; });

            testedLcd.show([1,2,3]);
            expect(process.stdout.write.mock.calls.length).toBe(12);
        })

        it("should raise an error", () => {
            //redeclare for having a correct count of mock called
            process.stdout.write = jest.fn((data) => { return null; });
            // the function needs to be wrap to have the error caught and asserted
            // details @ https://jestjs.io/docs/en/expect.html#tothrowerror
            expect(() => { testedLcd.show([]) }).toThrowError("input lenght should be greater than zero");
            expect(process.stdout.write.mock.calls.length).toBe(0);

            expect(() => { testedLcd.show(null) }).toThrowError("null input provided");
            expect(process.stdout.write.mock.calls.length).toBe(0);
        })
    })
})