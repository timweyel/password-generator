// Assignment Code
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  // prompt for password length
  var passwordLength = window.prompt("How long would you like your password to be? Select a length from 8 to 128.")
  //console.log(passwordLength);

  var
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
