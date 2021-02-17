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




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
