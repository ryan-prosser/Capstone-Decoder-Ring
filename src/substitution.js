// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  let realAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet) {
      return false
    }

    const lowerCase = input.toLowerCase();
    let newMessage = "";

    //Setting up alphabet into array
    let alphabetArray = []
    for (let i = 0; i < alphabet.length; i++) {
      alphabetArray.push(alphabet[i])
    }
    //Checking if alphabet input is valid
    if (alphabetArray.length != 26) {
      return false
    }
    let alreadySeen = [];
    for (let i = 0; i < alphabetArray.length; i++) {
      if (alreadySeen.includes(alphabetArray[i])) {
        return false
      } else {
        alreadySeen.push(alphabetArray[i])
      }
    }

    //ENCODING
    if (encode) {
      for (let i = 0; i < lowerCase.length; i++) {
        if (realAlphabet.includes(lowerCase[i])) {
          for (let j = 0; j < realAlphabet.length; j++) {
            if (realAlphabet[j] === lowerCase[i]) {
              newMessage = newMessage + alphabetArray[j]
            }
          }
        } else {
          newMessage = newMessage + lowerCase[i]
        }
      }
    }

    //DECODING
    if (!encode) {
      for (let i = 0; i < lowerCase.length; i++) {
        if (alphabetArray.includes(lowerCase[i])) {
          for (let j = 0; j < alphabetArray.length; j++) {
            if (alphabetArray[j] === lowerCase[i]) {
              newMessage = newMessage + realAlphabet[j]
            }
          }
        } else {
          newMessage = newMessage + lowerCase[i]
        }
      }
    }

    return newMessage;

  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
