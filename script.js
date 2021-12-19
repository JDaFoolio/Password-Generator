var specialCharacter = "@#$%^&*())_+=?><~`";

var lower_chars = "abcdefghijklmnopqrstuvwxyz";

var upper_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var numbers = "1234567890";

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePassword);

//Strings of data for specific characters


var password = ""; //Password for what is displayed in the box

function writePassword(word) {

  var passwordText = document.querySelector("#password");
  passwordText.value = word; //Placeholder for the password value
}

function generatePassword() {
  var userChoice = ""; // User input for character selections

  var passLength = parseInt(window.prompt("How many characters would you like the password to be?")); 

  //Conversion from string to integer
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  console.log(passLength);

  if (!passLength) {
    
    return;
}
else if (passLength > 128) {
  //Highest number of characters for password
  alert("Password cannot be more than 128 characters");
  return;

}
else if (passLength < 8 ) {
  //Lowest number of characters for password
  alert("Password requires a minimum of 8 characters");
  return;
}

//User's window prompt for password specification

else {
  var specialChar = window.confirm("click OK to confirm special characters");
  console.log(specialChar);

  var lowerChar = window.confirm("click OK to confirm lowercase characters");
  console.log(lowerChar);

  var upperChar = window.confirm("click OK to confirm uppercase characters");
  console.log(upperChar);

  var number = window.confirm("click OK to confirm numeric characters");
} 
// The line below is alerting the user if they did not choose any special characters. 

if (!specialChar && !lowerChar && !upperChar && !number) { 
  alert("Please select a character type.");
  return;

//If the user clicks OK for confirmation, the characters selected will concatinate; however, if cancel is selected then it will not run the line.

}
if (specialChar) {
  userChoice = userChoice.concat(specialCharacter);
}
if (lowerChar) {
  userChoice = userChoice.concat(lower_chars);
}
if (upperChar) {
  userChoice = userChoice.concat(upper_chars);
}
if (number) {
  userChoice = userChoice.concat(numbers);
}

console.log(userChoice);
passPhrase(passLength, userChoice)
}

function passPhrase(length, choice) { //Loops the users choices and randomizes them
  console.log("Goodnight", length, choice)
  
  var password = "";
  for ( var i = 0; i < length; i++) { //Loop is made off of the selected choices for password specification
  password += choice.charAt(Math.floor(Math.random() * choice.length));
  console.log(password);
  }
  writePassword(password)
}
