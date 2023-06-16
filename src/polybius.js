// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

const matches = [["a","f","l","q","v"],["b","g","m","r","w"],["c","h","n","s","x"],["d","%","o","t","y"],["e","k","p","u","z"]]
let special = ["i","j"]
const alphabetWithoutIAndJ = ["a","b","c","d","e","f","g","h","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

  function polybius(input, encode = true) {
    // your solution code here

    let newMessage = "";
    const lowerCase = input.toLowerCase();

    //ENCODING
    if (encode) {
      for (let i = 0; i < lowerCase.length; i++) {
        let letter = lowerCase[i];
        if (alphabetWithoutIAndJ.includes(letter)) {
        for (let j = 0; j < matches.length; j++) {
          let match = matches[j];
          for (let k = 0; k < match.length; k++) {
            if (letter === match[k]) {
              let firstNumber = (j+1);
              let secondNumber = (k+1);
              newMessage = newMessage + firstNumber.toString() + secondNumber.toString();
            }
          }
        }
      } else if (special.includes(letter)) {
          newMessage = newMessage + "42"
      } else {
        newMessage = newMessage + letter;
      }
    }
  }
    
      //DECODING
  if (!encode) {
    let removeSpaces = input.replace(" ", "99");
    if (removeSpaces.length % 2 == 0) {
      for (let i = 0; i < (removeSpaces.length - 1); i=i+2) {
         let firstNumber = removeSpaces[i];
         let secondNumber = removeSpaces[i+1];
         if (firstNumber + secondNumber === "42") {
          newMessage = newMessage + "(i/j)"
         } else if (firstNumber + secondNumber === "99") {
          newMessage = newMessage + " "
         } else {
           let fNumber = parseInt(firstNumber);
           let sNumber = parseInt(secondNumber)
          newMessage = newMessage + matches[fNumber - 1][sNumber - 1];
         }
      }
      
    } else {
      return false
    }
  }

  return newMessage

  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
