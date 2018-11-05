/**
 * Unit test for the ascii number representation
 */
var numbers = require("../lib/ascii-art-numbers");

 describe("Ascii Number ", () => {

    it("should containts ten values", () => {
        expect(numbers).toMatchSnapshot();
    })
 })