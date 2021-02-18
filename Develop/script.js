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
// --find edge/break cases

// Output - a mix of user defined, random characters, at least one from each type, in the user specified length
// Input - user determines password length and up to 4 different character types
// Code - 
// Edge cases - 


//=======================================================================================

// global variables

var passwordLength; //stores the length of password
var includeLowercase; //
var includeUppercase;
var includeNumeric;
var includeSpecial;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // prompt for password length
  passwordLength = window.prompt("How long would you like your password to be? Select a length from 8 to 128.");
  console.log(passwordLength);
  // confirm to include lowercase characters
  includeLowercase = window.confirm("Select OK if you want to include lowercase characters.");
  console.log(includeLowercase);

  //TODO: need to account for numbers outside of 8 to 128
  
  // confirm to include uppercase characters
  includeUppercase = window.confirm("Select OK if you want to include uppercase characters.");
  console.log(includeUppercase);
  
  // confirm to include numeric characters    
  includeNumeric = window.confirm("Select OK if you want to include numeric characters.");
  console.log(includeNumeric);

  // confirm to include special characters
  includeSpecial = window.confirm("Select OK if you want to include special characters.");
  console.log(includeSpecial);
    
    
  
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
