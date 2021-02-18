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
var includeLowercase; //stores whether or not to include lowercase chars
var includeUppercase; //stores whether or not to include uppercase chars
var includeNumeric; //stores whether or not to include numeric chars
var includeSpecial; //stores whether or not to include special chars
var charTypesSelected; //stores the character types the user selected 

function charCodeArray(min, max) {
  var array = [];
  console.log(array);
  for (var i = min; i <= max; i++) {
    array.push(i);
  }
  return array;
}

  // ASCII Character Code arrays
  var lowercaseCodes = charCodeArray(97, 122);
  var uppercaseCodes = charCodeArray(65, 90);
  var numericCodes = charCodeArray(48, 57);
  var specialCodes = charCodeArray(32, 47).concat(58, 64).concat(91, 96).concat(123, 126);

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Prompts to let user determine password requirements
function generatePassword() {

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



// no answer selected
if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
  charTypesSelected = alert('You must select at least one character type for the password');
} 

// 4 types selected
  else if (includeLowercase && includeUppercase && includeNumeric && includeSpecial) {
    charTypesSelected = (lowercaseCodes.concat(uppercaseCodes).concat(numericCodes).concat(specialCodes));
    console.log(charTypesSelected);
  }

// 3 types selected
  else if (includeLowercase && includeUppercase && includeNumeric) {
    charTypesSelected = (lowercaseCodes.concat(uppercaseCodes).concat(numericCodes));
    console.log(charTypesSelected);
  }

  else if (includeLowercase && includeUppercase && includeSpecial) {
    charTypesSelected = (lowercaseCodes.concat(uppercaseCodes).concat(specialCodes));
    console.log(charTypesSelected);
  }

  else if (includeLowercase && includeNumeric && includeSpecial) {
    charTypesSelected = (lowercaseCodes.concat(numericCodes).concat(specialCodes));
    console.log(charTypesSelected);
  }

  else if (includeUppercase && includeNumeric && includeSpecial) {
    charTypesSelected = (uppercaseCodes.concat(numericCodes).concat(specialCodes));
    console.log(charTypesSelected);
  }

// 2 types selected
  else if (includeLowercase && includeUppercase) {
    charTypesSelected = (lowercaseCodes.concat(uppercaseCodes));
    console.log(charTypesSelected);
  }

  else if (includeNumeric && includeSpecial) {
    charTypesSelected = (numericCodes.concat(specialCodes));
    console.log(charTypesSelected);
  }

  else if (includeLowercase && includeSpecial) {
    charTypesSelected = (lowercaseCodes.concat(specialCodes));
    console.log(charTypesSelected);
  } 

  else if (includeUppercase && includeNumeric) {
    charTypesSelected = (uppercaseCodes.concat(numericCodes));
    console.log(charTypesSelected);
  }

  else if (includeLowercase && includeNumeric) {
    charTypesSelected = (lowercaseCodes.concat(numericCodes));
    console.log(charTypesSelected);
  }

  else if (includeUppercase && includeSpecial) {
    charTypesSelected = (uppercaseCodes.concat(specialCodes));
    console.log(charTypesSelected);
  }

// 1 types selected
  else if (includeLowercase) {
    charTypesSelected = (lowercaseCodes);
    console.log(charTypesSelected);
  }

  else if (includeUppercase) {
    charTypesSelected = (uppercaseCodes);
    console.log(charTypesSelected);
  }

  else if (includeNumeric) {
    charTypesSelected = (numericCodes);
    console.log(charTypesSelected);
  }

  else if (includeSpecial) {
    charTypesSelected = (specialCodes);
    console.log(charTypesSelected);
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


