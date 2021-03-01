// need a series of prompts that ask the user for the following:
    // --password length (8-128 chars)
      //--store as a var
    // --character types (lowercase, uppercase, numeric, and/or special chars)
      //--create an object that stores all the char types sel
      //--store each selection in a variable
// --each answer should be validated
// --password should include at least one of each character type
// --when all prompts are answered, then password is generated
// --password should be displayed as an alert or written to the page
// --find edge/break cases


// global variables
var passwordLength; //stores the length of password
var includeLowercase; //stores whether or not to include lowercase chars
var includeUppercase; //stores whether or not to include uppercase chars
var includeNumeric; //stores whether or not to include numeric chars
var includeSpecial; //stores whether or not to include special chars
var charTypesSelected; //stores the character types the user selected 
var passwordArray; //stores an array of the selected password characters 

// Assignment Code
var generateBtn = document.querySelector("#generate");

// ASCII Character Code arrays
var lowercaseCodes = charCodeArray(97, 122);
var uppercaseCodes = charCodeArray(65, 90);
var numericCodes = charCodeArray(48, 57);
var specialCodes = charCodeArray(32, 47).concat(58, 64).concat(91, 96).concat(123, 126);

function charCodeArray(min, max) {
  var array = [];
  for (var i = min; i <= max; i++) {
    array.push(i);
  }
  return array;
}

// Prompts to let user determine password requirements
function generatePassword() {

  // prompt for password length
  passwordLength = window.prompt("How long would you like your password to be? Select a length from 8 to 128.");

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Your password length must be more than 7 and less than 129 characters. Please enter a new length.")
    generatePassword();
  }

  // confirm to include lowercase characters
  includeLowercase = window.confirm("Select OK if you want to include lowercase characters.");
  
  // confirm to include uppercase characters
  includeUppercase = window.confirm("Select OK if you want to include uppercase characters.");
  
  // confirm to include numeric characters    
  includeNumeric = window.confirm("Select OK if you want to include numeric characters.");

  // confirm to include special characters
  includeSpecial = window.confirm("Select OK if you want to include special characters.");

  // no answer selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    charTypesSelected = alert('You must select at least one character type for the password');
    generatePassword();
  } 

  // 4 types selected
    else if (includeLowercase && includeUppercase && includeNumeric && includeSpecial) {
      charTypesSelected = (lowercaseCodes.concat(uppercaseCodes).concat(numericCodes).concat(specialCodes));
    }

  // 3 types selected
    else if (includeLowercase && includeUppercase && includeNumeric) {
      charTypesSelected = (lowercaseCodes.concat(uppercaseCodes).concat(numericCodes));
    }

    else if (includeLowercase && includeUppercase && includeSpecial) {
      charTypesSelected = (lowercaseCodes.concat(uppercaseCodes).concat(specialCodes));
    }

    else if (includeLowercase && includeNumeric && includeSpecial) {
      charTypesSelected = (lowercaseCodes.concat(numericCodes).concat(specialCodes));
    }

    else if (includeUppercase && includeNumeric && includeSpecial) {
      charTypesSelected = (uppercaseCodes.concat(numericCodes).concat(specialCodes));
    }

  // 2 types selected
    else if (includeLowercase && includeUppercase) {
      charTypesSelected = (lowercaseCodes.concat(uppercaseCodes));
    }

    else if (includeNumeric && includeSpecial) {
      charTypesSelected = (numericCodes.concat(specialCodes));
    }

    else if (includeLowercase && includeSpecial) {
      charTypesSelected = (lowercaseCodes.concat(specialCodes));
    } 

    else if (includeUppercase && includeNumeric) {
      charTypesSelected = (uppercaseCodes.concat(numericCodes));
    }

    else if (includeLowercase && includeNumeric) {
      charTypesSelected = (lowercaseCodes.concat(numericCodes));
    }

    else if (includeUppercase && includeSpecial) {
      charTypesSelected = (uppercaseCodes.concat(specialCodes));
    }

  // 1 types selected
    else if (includeLowercase) {
      charTypesSelected = (lowercaseCodes);
    }

    else if (includeUppercase) {
      charTypesSelected = (uppercaseCodes);
    }

    else if (includeNumeric) {
      charTypesSelected = (numericCodes);
    }

    else if (includeSpecial) {
      charTypesSelected = (specialCodes);
    };

  var passwordArray = [];

  for (var i = 0; i < passwordLength; i++) {
    var characterSelections = charTypesSelected[Math.floor(Math.random() * charTypesSelected.length)];
    passwordArray.push(String.fromCharCode(characterSelections));
  }

  // join array and return password
  var password = passwordArray.join("");
  console.log("Your Password is: " + password);
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


