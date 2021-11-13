// Assignment code here

var generatePassword = function() {
  // Our criteria
  password = '';
  var passwordCharacters = '';

  // Defining the length of the password
  var promptLength = window.prompt("How long would you like your password? Please select a value between 8 and 128");
  if (!promptLength) {
    return;
  }
  else if (promptLength != parseInt(promptLength)) {
    window.alert("Non-numeric response. Please enter a valid number such as '42'");
    generatePassword();
  }
  else if (8 <= parseInt(promptLength) && parseInt(promptLength) <= 128) {
    passwordLength = parseInt(promptLength);
  }
  else {
    window.alert("Please enter a valid number between 8 and 128, such as '42'");
    generatePassword();
  }

  // Password character selection
  var promptLowercase = window.confirm("Would you like lowercase letters in your password?");
  var promptUppercase = window.confirm("Would you like uppercase letters in your password?");
  var promptNumbers = window.confirm("Would you like numbers in your password?");
  var promptSpecial = window.confirm("Would you like special characters in your password?");
  if (promptLowercase) {
    passwordCharacters = passwordCharacters + 'ascdefghijklmnopqrstuvwxyz'
  }
  if (promptUppercase) {
    passwordCharacters = passwordCharacters + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }
  if (promptNumbers) {
    passwordCharacters = passwordCharacters + '0123456789'
  }
  if (promptSpecial) {
    passwordCharacters = passwordCharacters + '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
  }
  if (passwordCharacters == '') {
    window.alert("You need to select at least 1 character type")
    generatePassword();
  }

  // Password generation
  for (let i = 0; i < passwordLength; i++) {
    password = password + passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
  }
  return password;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
