// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){

  var userInput = window.prompt("How long would you like your password to be?") 
  var passLength = parseInt(userInput)

  if(isNaN(passLength)) {
    window.alert("You did not enter a number, Please Try Again ! ")
    return 
  }
  // Creator Note : Reason why the two "if" statements were not combined because
  // if they are false I wouldnt know which one is.

  if (passLength < 8 || passLength > 128){
    window.alert("Your password length must be between 8-128 Characters")
    return
  }

}
//Creator Note: parseInt tries to turn a string into number



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
