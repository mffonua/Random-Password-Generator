// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max){
  if (!max){
    max = min
    min = 0
  }
  var rand = Math.random()
    return Math.floor(min*(1 - rand) + rand*max)
  }

  function getRandomItem(list) {
    return list[randomInt(0, list.length -1)]
  }

function generatePassword(){

  // var userInput = window.prompt("How long would you like your password to be? (8-128 characters)") 
  // var passLength = parseInt(userInput) //Creator Note: parseInt tries to turn a string into number

  // if(isNaN(passLength)) {
  //   window.alert("You did not enter a number, Please Try Again ! ")
  //   return 
  // }
  // // Creator Note : Reason why the two "if" statements were not combined because
  // // if they are false I wouldnt know which one is.

  // if (passLength < 8 || passLength > 128){
  //   window.alert("Your password length must be between 8-128 Characters")
  //   return
  // }


//Loop
  while (true){
      var userInput = window.prompt("How long would you like your password to be? (8-128 characters)") 
      
      //if User exits prompt
      if (userInput === null){
        return
      }

      var passLength = parseInt(userInput) //Creator Note: parseInt tries to turn a string into number

    if(isNaN(passLength)) {
      window.alert("You did not enter a number, Please Try Again ! ")  
    } else if (passLength < 8 || passLength > 128) {
      window.alert("Invalid password Length. Must be between 8 and 128 Characters. ")
    } else {
      break // Creator Note : break means to break out current loop.
    }

  }

//Prompts for Number, Special Characters, UpperCase Letters and LowerCase Letter.
  var userRequestsNumber = window.confirm("Do you want Numbers in your password? (ex. 1,2,3) ")
  var userRequestsSpecialChar = window.confirm("Do you want Special Characters in your password? (ex. !,@,$) ")
  var userRequestsUpperCaseLet = window.confirm("Do you want Upper Case Letters in your password? (ex. A,B,C) ")
  var userRequestsLowerCaseLet = window.confirm("Do you want Lower Case Letters in your password? (ex. a,b,c) ")

  var speciaCharList = [ "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "~", "[", "{", "]", "}", ";", "'", ":", ",", "<", ">", ".", "/", "?"]
  var numberList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList = []
  
  // pushing the List
  var optionsCart = []
  
  for (var i  = 0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList[i].toUpperCase()

  } 
    if (userRequestsNumber === true) {
        optionsCart.push(numberList)
        }
    if (userRequestsSpecialChar === true) {
        optionsCart.push(speciaCharList)
        }
    if (userRequestsUpperCaseLet === true) {
        optionsCart.push(uppercaseList)
        }
    if (userRequestsLowerCaseLet === true) {
        optionsCart.push(lowercaseList)
        }
    if (optionsCart.length === 0) {
        optionsCart.push(lowercaseList)
        }
  
    var generatedPassword = ""

    for (var i = 0; i < passLength; i++){
       var randomList = getRandomItem(optionsCart)// Reason -1 is because array starts at 0
       var randomChar= getRandomItem(randomList)
       generatedPassword += randomChar
    }
    
    return generatedPassword
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if(!password) {
    return
  }
  if(password){
  passwordText.value = password;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
