// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max){
  return Math.floor(Math.random()*(max - min) + min)
} //random integer

function generatePassword(){

  var userInput = window.prompt("How long would you like your password to be? (8-128 characters)") 
  var passLength = parseInt(userInput) //Creator Note: parseInt tries to turn a string into number

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
//Prompts for Number, Special Characters, UpperCase Letters and LowerCase Letter.
  var userRequestsNumber = window.confirm("Do you want Numbers in your password? (ex. 1,2,3) ")
  var userRequestsSpecialChar = window.confirm("Do you want Special Characters in your password? (ex. !,@,$) ")
  var userRequestsUpperCaseLet = window.confirm("Do you want Upper Case Letters in your password? (ex. A,B,C) ")
  var userRequestsLowerCaseLet = window.confirm("Do you want Lower Case Letters in your password? (ex. a,b,c) ")

  var speciaCharList = [ "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "~", "[", "{", "]", "}", ";", "'", ":", ",", "<", ">", ".", "/", "?"];
  var numberList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var lowerCaseLet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCaseLet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  
  // pushing the List
  var symbolsCart = []
  for (var i  = 0; i < lowerCaseLet.length; i++){
    upperCaseLet[i] = lowerCaseLet[i].toUpperCase()

  } 
  if (userRequestsNumber === true){
  symbolsCart.push(numberList)
  }
  if (userRequestsSpecialChar === true){
    symbolsCart.push(speciaCharList)
  }
  if (userRequestsUpperCaseLet === true){
      symbolsCart.push(upperCaseLet)
  }
  if (userRequestsLowerCaseLet === true){
    symbolsCart.push(lowerCaseLet)
    }
    
    console.log(symbolsCart)


    var generatePassword = ""

    for (var i = 0; i < passLength; i++){
       var randomItem = symbolsCart[randomInt(0, symbolsCart.length - 1)]
    }


}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
