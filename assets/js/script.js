//alert("Welcome to the password generator.");
var numbers = "0123456789";
var letters = "abcdefghijklmnopqrstuvwxyz";
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

var charPool =[];
var userPassword = [];



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");



// }

function generatePassword(){
    var passwordLength = prompt('How long should the password be?');
    var includeSpecialChars = confirm("Should the password include special characters?")
    if(includeSpecialChars){
      charPool.push(...specialCharacters);
    }
    var includeLetters = confirm("Should the password include letters?");
    if(includeLetters){
      charPool.push(...letters);
    }
    var includeNumbers = confirm("Should the password include numbers?")
    if(includeNumbers){
      charPool.push(...numbers);
      console.log(charPool)
    }

    for(let i = 0; i < passwordLength; i++) {
         userPassword.push(charPool[Math.floor(Math.random() * charPool.length)]);
    console.log(userPassword.join(''))
    }
   //return userPassword;
  
  } 
  document.querySelector("#password").value = userPassword.join("")
// Add event listener to generate button

generateBtn.addEventListener("click", generatePassword);