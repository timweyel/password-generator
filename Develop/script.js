// need a series of prompts that ask the user for the following:
    // --password length (8-128 chars)
      //--store as a var
    // --character types (lowercase, uppercase, numeric, and/or special chars)
      //--create an object that stores all the char types
      //--store each selection in a variable
// --each answer should be validated
// --password should include at least one of each character type
// --when all prompts are answered, then password is generated
// --password should be displayed as an alert or written to the page

//=======================================================================================

// object used to create password criteria

var passwordCriteria = {
  
}

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
