// Assignment code here

var generatePassword = function() {
  // Our criteria
  var passwordCharacters = '';

  var promptLength = window.prompt("How long would you like your password?");
  if (promptLength != parseInt(promptLength)) {
    window.alert("Non-numeric response. Please enter a valid number such as '420'");
    generatePassword();
  }
  else {
    password.length = parseInt(promptLength);
  }

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

  // for (let i = 0; i < password.length; i++) {
  //   password = password + passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
  // }
  // return;
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
