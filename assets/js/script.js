// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare variables for password character types
var upperCaseLet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseLet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberChar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var  specialChar= [ "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "'", '"', "\\" ];


// User selects password length
var generatePassword = function() {
var lengthPmt = 0;
lengthPmt = window.prompt("Desired password length? 8 - 128 characters");
 // Exits function if CANCEL is pressed
 if (lengthPmt === null) {
  return null
}
