// Write your tests here!
const caesarModule  = require("../src/caesar");
const expect = require("chai").expect;

describe("Caesar", () => {
    it ("should return false if the shift value isn't present, is equal to 0, is less than -25, or greater than 25", () => {
        let expected = false;
        let actual = caesarModule.caesar("thinkful", 27);
        expect(actual).to.equal(expected)
    }) 
    it ("should return in all lowercase no matter what letters are inputted", () => {
        let expected = "szbo";
        let actual = caesarModule.caesar("RyAN", 1);
        expect(actual).to.equal(expected);
    })
    it ("should shift letters to the right when accepting a positive shift", () => {
        let expected = "szbo";
        let actual = caesarModule.caesar("ryan", 1);
        expect(actual).to.equal(expected);
    })
    it ("should shift letters to the left when accepting a negative shift", () => {
        let expected = "qxzm";
        let actual = caesarModule.caesar("ryan", -1);
        expect(actual).to.equal(expected);
    })
    it ("should wrap around the alphabet if a shift takes it past one of the ending letters", () => {
        let expected = "a"
        let actual = caesarModule.caesar("z", 1);
        expect(actual).to.equal(expected);
    })
    it ("should decode messages when encode is false", () => {
        let expected = "ryan";
        let actual = caesarModule.caesar("szbo", 1, false);
        expect(actual).to.equal(expected);
    })
    it ("should ignore special characters and spaces", () => {
        let expected = "szbo !";
        let actual = caesarModule.caesar("ryan !", 1);
        expect(actual).to.equal(expected);
    })
})