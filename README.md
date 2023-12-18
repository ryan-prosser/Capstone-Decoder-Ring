# Decoder Ring Capstone
This is an application that takes in user messages and encodes them in one of three different ways. There is also a feature allowing for users to decode the messages they recieved. This was a basic front-end application created to work on JavaScript logic.

## Languages used

- JavaScript
- CSS

## Coders

### Caesar Shift

   The Caesar Shift encodes messages by taking the message and moving each letter forward through the alphabet a predetermined amount of times. For example, "a" with a shift of 2 would return "c" when encoding.
   
![Caesar Shift Encode](https://github.com/ryan-prosser/Capstone-Decoder-Ring/assets/133927475/ee72265b-ea55-440c-b5b5-39af99bd7dab)

   The decode option would output messages in the reverse by moving backwards through the alphabet a predetermined amount of times. For example, "c" with a shift of 2 would return "a" when decoding.
   
![Caesar Shift Decode](https://github.com/ryan-prosser/Capstone-Decoder-Ring/assets/133927475/efc35b1a-18e0-4682-b572-40f37aeaaaf8)

### Polybius Square

   The Polybius Square encodes messages by giving a letter a numerical pair indicating it's position on a grid. The alphabet is broken down into a 5x5 grid with each letter filling in a spot from left to right starting a through z but i and j share a spot on the grid. The first number indicates how many spots to move across and the second number indicates how many spots to go down. For example, the letter "b" would be encoded into 21.
   
![Polybius Sqaure Encode](https://github.com/ryan-prosser/Capstone-Decoder-Ring/assets/133927475/51a6fc02-6a85-4490-89f9-777d902aba5b)

   When decoding, the numbers are transformed back into letters based on the number pairings provided. It does not accept spaces and if the number pair 42 is put in it will output "(i/j)" because of the shared space.
   
   ![Polybius Square Decode](https://github.com/ryan-prosser/Capstone-Decoder-Ring/assets/133927475/f96aaa59-a11a-4636-badb-5ef2fcaaacc9)
   
### Substitution Cipher

   The Substitution Cipher encodes messages by taking another set of 26 unique letters or symbols and outputs the original message with each letter matched up in order with it's order in the origial alphabet. For example, becuase the letter "a" is first in the actual alphabet, it would be outputted as the first letter or symbol in the substitution alphabet.
   
![Substitution Cipher Encode](https://github.com/ryan-prosser/Capstone-Decoder-Ring/assets/133927475/8b601d18-bb08-487b-a11c-55275fd8f426)

   When decoding, a subsitution alphabet it still required and the location of the letters or symbols from the message within the substitution alphabet will output as the corresponding location in the regular alphabet. For example, if the first piece of the substitution alphabet was "%" it would output as "a" when decoded.
   
   ![Substitution Cipher Decode](https://github.com/ryan-prosser/Capstone-Decoder-Ring/assets/133927475/5b157fd6-e4d8-44cd-ab8c-d6827dfe24ab)
   
