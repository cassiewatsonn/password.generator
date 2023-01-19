// Assignment Code
let generateBtn = document.querySelector("#generate");
//Lowercase, uppercase, numbers and special character variables//
let lowercase= "abcdefghijklmnopqrstuvwxyz"; 
let uppercase= "abcdefghijklmnopqrstuvwxyz"; 
let number= "1234567890"; 
let special= "!@#$%^&*()_-+=?/.,><[]{}~"; 

let chooselength= 0;
// let chooselowercase= false;
// let chooseuppercase= false;
// let choosespecial= false;



// PASSWORD CRITERIA PROMPTS //
//Length of Password? 8-128 characters //
function charactercheck (){
  let chooselength = prompt ("How many characters would you like to include (minimum: 8, maximum: 128) "); 
}
  if (chooselength >= 8 || chooselength <=128) {
    alert("Password must be between 8-128 characters");
    charactercheck();
    // console.log(chooselength);
  } 
  else if (chooselength = ""){
    alert("You must answer with a number between 8-128.");
    charactercheck();
  }
  //   else if (isNaN(chooselength)){
  //   alert ("You must enter a number between 8-128");
  // }

//Include lowercase, uppercase, numeric, and/or special characters?//
function confirmlowercase () {
  let chooselowercase = window.confirm("Would you like to include lowercase letters?");
}
  // if (chooselowercase === ""){
  //   alert("You must answer yes or no.");
  // }
  // else if (chooselowercase = "yes"){
  //   chooselowercase = true; 
  // }
  // else if (chooselowercase = "no"){
  //   chooselowercase = false; 
  // }
function confirmUppercase (){
  let chooseuppercase = window.confirm("Would you like to include uppercase letters?");
}
  //   if (chooseuppercase = ""){
  //   alert("You must answer yes or no.");
  // } 
  //   else if (chooseuppercase = "yes"){
  //   chooseuppercase = true; 
  // }
  //   else if (chooseuppercase = "no"){
  //   chooseuppercase = false; 
  
function confirmNumber(){
  let choosenumber = window.confirm("Would you like to include numbers?"); 
}
  //   if (choosenumber = ""){
  //     alert("You must answer yes or no.");
  // }
  // let choosespecial = window.confirm("Would you like to include special characters?"); 
  //   if (choosespecial = ""){
  //     alert("You must answer yes or no.");


// function generatePassword(){
//   chooselength();
//     console.log(chooselength);
//   chooselowercase(); 
//     console.log(chooselowercase);
//   chooseuppercase();
//     console.log(chooseuppercase);
//   choosenumber();
//     console.log(choosenumber);
//   choosespecial();
//     console.log(choosespecial);
// }



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
