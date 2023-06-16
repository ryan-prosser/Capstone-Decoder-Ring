// Write your tests here!
const substitutionModule  = require("../src/substitution");
const expect = require("chai").expect;

describe("Substitution", () => {
    it("should return false if alphabet is missing", () => {
        let expected = false;
        let actual = substitutionModule.substitution("ryan");
        expect(actual).to.equal(expected);
    })
    it("should return false if the alphabet given is not exactly 26 letters", () => {
        let expected = false;
        let actual = substitutionModule.substitution("ryan", "abcdefghijklmnopqrstuvwxyz%");
        expect(actual).to.equal(expected);
    })
    it("should return false if any of the alphabet characters are duplicates", () => {
        let expected = false;
        let actual = substitutionModule.substitution("ryan", "abcdefghijklmnopqrstuvwxya");
        expect(actual).to.equal(expected);
    })
    it("should encode the message based on the substitution alphabet", () => {
        let expected = "ibzm";
        let actual = substitutionModule.substitution("ryan", "zyxwvutsrqponmlkjihgfedcba");
        expect(actual).to.equal(expected);
    })
    it("should work with any sort of key with unique characters", () => {
        let expected = "%apv";
        let actual = substitutionModule.substitution("ryan", "plkoijmnbhuygvft&%rdxsewaq");
        expect(actual).to.equal(expected);
    })
    it("should maintain spaces in the output", () => {
        let expected = "q w";
        let actual = substitutionModule.substitution("a b", "qwsazxcderfvbgtyhnmjuiklop");
        expect(actual).to.equal(expected);
    })
    it("should decode messages based on the substitute alphabet", () => {
        let expected = "ryan";
        let actual = substitutionModule.substitution("ibzm", "zyxwvutsrqponmlkjihgfedcba", false);
        expect(actual).to.equal(expected);
    })
    it("should maintain spaces when decoding", () => {
        let expected = "a b";
        let actual = substitutionModule.substitution("q w", "qwsazxcderfvbgtyhnmjuiklop", false);
        expect(actual).to.equal(expected);
    })
    it("should decode with any valid substitution alphabet", () => {
        let expected = "ryan";
        let actual = substitutionModule.substitution("%apv", "plkoijmnbhuygvft&%rdxsewaq", false);
        expect(actual).to.equal(expected);
    })
})