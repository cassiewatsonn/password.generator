// Assignment Code
let generateBtn = document.querySelector("#generate");
//Lowercase, uppercase, numbers and special character variables//
let lowercase= "abcdefghijklmnopqrstuvwxyz"; 
let uppercase= "abcdefghijklmnopqrstuvwxyz"; 
let number= "1234567890"; 
let special= "!@#$%^&*()_-+=?/.,><[]{}~"; 

// let chooseLength;
// let chooselowercase;
// let chooseuppercase;
// let choosespecial;


// PASSWORD CRITERIA PROMPTS //
//Length of Password? 8-128 characters //
function charactercheck (){
  let chooseLength = parseInt(prompt ("How many characters would you like to include (minimum: 8, maximum: 128) ")); 
  if (isNaN(chooseLength)){
    alert("Please choose a number between 8-128.");
    return;
  }
  if (chooseLength <=8 || chooseLength >=128) {
      alert("Password must be between 8-128 characters");
      return;
    }
return chooseLength
    
  }

//Include lowercase, uppercase, numeric, and/or special characters?//
function characters () {
  let chooseLowercase = window.confirm("Would you like to include lowercase letters?");
  let chooseUppercase = window.confirm("Would you like to include uppercase letters?");
  let chooseNumber = window.confirm("Would you like to include numbers?"); 
  let chooseSpecial = window.confirm("Would you like to include special characters?");
let word = "";
console.log(chooseLowercase);
  if (chooseLowercase) {
    word += lowercase;
  }
  if (chooseUppercase) {
    word += uppercase;
  }
  if (chooseNumber) {
    word += number;
  }
  if (chooseSpecial) {
    word += special;
  }

  return word;
}

function generatePassword(){
  let chooseLength = charactercheck();
  let word = characters(); 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
