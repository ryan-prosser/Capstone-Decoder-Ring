// Write your tests here!
const polybiusModule  = require("../src/polybius");
const expect = require("chai").expect;

describe("Polybius", () => {
    it("should return a set of numbers corresponding with the letters from the square", () => {
        let expected = "24451133";
        let actual = polybiusModule.polybius("ryan");
        expect(actual).to.equal(expected);
    })
    it("should leave spaces intact when encoding", () => {
        let expected = "24451133 24451133";
        let actual = polybiusModule.polybius("ryan ryan");
        expect(actual).to.equal(expected);
    })
    it("should translate i and j to 42", () => {
        let expected = "42 42";
        let actual = polybiusModule.polybius("i j");
        expect(actual).to.equal(expected);
    })
    it("should decode number pairs back to letter messages", () => {
        let expected = "ryan";
        let actual = polybiusModule.polybius("24451133", false);
        expect(actual).to.equal(expected);
    })
    it("should translate 42 to i and j", () => {
        let expected = "(i/j)";
        let actual = polybiusModule.polybius("42", false);
        expect(actual).to.equal(expected);
    })
    it("should leave spaces intact when decoding", () => {
        let expected = "ryan ryan";
        let actual = polybiusModule.polybius("24451133 24451133", false);
        expect(actual).to.equal(expected);
    })
    it("should return false if the length of all numbers is odd", () => {
        let expected = false;
        let actual = polybiusModule.polybius("12345", false);
        expect(actual).to.equal(expected);
    })
})