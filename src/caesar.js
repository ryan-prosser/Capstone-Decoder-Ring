// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  let count = 0
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  const revAlphabet =["z","y","x","w","v","u","t","s","r","q","p","o","n","m","l","k","j","i","h","g","f","e","d","c","b","a"]

  function caesar(input, shift, encode = true) {

    let newMessage = "";

    if (shift === 0) return false;
    if (shift < -25) return false;
    if (shift > 25) return false;
    if (!shift) return false;

    let lowerCase = input.toLowerCase()

// ENCODING

if (encode) {
    // for encoding a positive shift
    if (shift > 0) {
    for (let i = 0; i < lowerCase.length; i++) {
      if (alphabet.includes(lowerCase[i])) {
      for (let j = 0; j < alphabet.length; j++) {
        if (alphabet[j] === lowerCase[i]) {
          count = ((j + shift) % alphabet.length)
          newMessage = newMessage + alphabet[count]
        }
      }
    } else {
      newMessage = newMessage + lowerCase[i]
    }
  }
    }
// for encoding a negative shift
if (shift < 0) {
  for (let i = 0; i < lowerCase.length; i++) {
    if (revAlphabet.includes(lowerCase[i])) {
    for (let j = 0; j < revAlphabet.length; j++) {
      if (revAlphabet[j] === lowerCase[i]) {
        count = ((j - shift) % revAlphabet.length)
        newMessage = newMessage + revAlphabet[count]
      }
    }
  } else {
    newMessage = newMessage + lowerCase[i]
  }
}
}
return newMessage
  }

// DECODING

if (encode == false) {
  // for decoding a positive shift
  if (shift > 0) {
    for (let i = 0; i < lowerCase.length; i++) {
      if (alphabet.includes(lowerCase[i])) {
      for (let j = 0; j < revAlphabet.length; j++) {
        if (revAlphabet[j] === lowerCase[i]) {
          count = ((j + shift) % revAlphabet.length)
          newMessage = newMessage + revAlphabet[count]
        }
      }
    } else {
      newMessage = newMessage + lowerCase[i]
    }
  }
    }
// for decoding negative shift
if (shift < 0) {
    for (let i = 0; i < lowerCase.length; i++) {
      if (alphabet.includes(lowerCase[i])) {
      for (let j = 0; j < alphabet.length; j++) {
        if (alphabet[j] === lowerCase[i]) {
          count = ((j - shift) % alphabet.length)
          newMessage = newMessage + alphabet[count]
        }
      }
    } else {
      newMessage = newMessage + lowerCase[i]
    }
}
  }
return newMessage
}
}
    // your solution code here


  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
