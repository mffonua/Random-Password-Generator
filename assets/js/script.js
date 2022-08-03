// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare variables for password character types
var upperCaseLet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseLet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberChar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialChar = [ "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "'", '"', "\\" ];



var generatePassword = function() {
var lengthPmt = 0;
lengthPmt = window.prompt("Desired password length? 8 - 128 characters");

 
  if (lengthPmt === null) {
    return null
  }


  var pword = "";
  var allowed = [];


  if (parseInt(lengthPmt) < 8 || parseInt(lengthPmt) > 128) {
        lengthPmt = window.alert("Length must be between 8 and 128 characters.");
        generatePassword();
     };
  

  if (parseInt(lengthPmt) >= 8 || parseInt(lengthPmt) <= 128) {
      console.log(lengthPmt);
    var upperC = confirm("Do you want uppercase letters incuded in your password (ex. ABC) ?")
      if (upperC == true) {
        window.alert("Upper case characters will be included. Please continue.");
        allowed = allowed.concat(upperCaseLet);
        console.log(upperCaseLet);
      } else {
        window.alert("Upper case characters will not be used. Please continue.");
      };