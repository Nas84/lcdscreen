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
        
    })
})