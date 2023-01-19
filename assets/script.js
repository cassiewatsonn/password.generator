// Assignment Code
let generateBtn = document.querySelector("#generate");
//Lowercase, uppercase, numbers and special character variables//
let lowercase= "abcdefghijklmnopqrstuvwxyz"; 
let uppercase= "abcdefghijklmnopqrstuvwxyz"; 
let number= "1234567890"; 
let special= "!@#$%^&*()_-+=?/.,><[]{}~"; 

// let chooselength= number;
// let chooselowercase= lowercase;
// let chooseuppercase= uppercase;
// let choosespecial= special;



// PASSWORD CRITERIA PROMPTS //
//Length of Password? 8-128 characters //
let chooselength = prompt("How many characters would you like to include (minimum: 8, maximum: 128) "); 
  if (chooselength < 8 || chooselength >128) {
    alert("Password must be between 8-128 characters");
  } 
  //   else if (isNaN(chooselength)){
  //   alert ("You must enter a number between 8-128");
  // }
//Include lowercase, uppercase, numeric, and/or special characters?//
let chooselowercase = prompt("Would you like to include lowercase letters?");
let chooseuppercase = prompt("Would you like to include uppercase letters?"); 
let choosenumber = prompt("Would you like to include numbers?"); 
let choosespecial = prompt("Would you like to include special characters?"); 


function generatePassword(){
  // chooselength();
  // chooselowercase(); 
  // chooseuppercase();
  // choosenumber();
  // choosespecial();

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
