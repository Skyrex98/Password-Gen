// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 // var password = generatePassword();
 // var passwordText = document.querySelector("#password");
  //all password values
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+"
  let password = ""
  var passwordLength = 16;
//create for loop to choose password charcters/numbers/symbols

for(var i=0; i<passwordLength; i++){
var randomNumber = Math.floor(Math.random() * chars.length);
password += chars.substring(randomNumber, randomNumber+1)
}

document.getElementById("password").value = password;

//  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
