// Assignment code here

var generatePassword = function() {
  var promptLength = window.prompt("How long would you like your password?");
  var promptLowercase = window.confirm("Would you like lowercase letters in your password?");
  var promptUppercase = window.confirm("Would you like uppercase letters in your password?");
  var promptNumbers = window.confirm("Would you like numbers in your password?");
  var promptSpecial = window.confirm("Would you like special characters in your password?");
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
