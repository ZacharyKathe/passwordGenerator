// Assignment Code
//DO NOT CHANGE THIS CODE
var generateBtn = document.querySelector("#generate");


function generateRandom(){
  var randomNum = Math.floor(Math.random()*25)
  return randomNum
}
function generate_under10(){
  var smallNum = Math.floor(Math.random()*10)
  return smallNum
}
function generatePassword(){
   var lower = confirm("Do you want lowercase?")
   var upper = confirm("Do you want uppercase?")
   var numeric = confirm("Do you want numbers?")
   var sp_char = confirm("Do you want special characters?")
   var len = 8
   

     if (lower == true)
       possible = ["a", "b", "c", "d","e", "f", "g", "h", "i", "j", "k", "l", 'm', "n", "o", "p", "q", "r","s", "t","u", "v", "w", "x", "y", "z"]
       lower_ans = generateRandom()
       lower_rtn = possible[lower_ans]
       lower_ans1 = generateRandom()
       lower_rtn1 = possible[lower_ans1]
       lower_return = lower_rtn + lower_rtn1
      if (upper == true)
       possibleUpper = ["A", 'B', 'C', 'D', 'E', 'F', 'H', 'I', 'J', 'K', 'L', 'M', 'N', "O", 'P', "Q", "R", "S", "T", "U", "V", "W", 'X', 'Y', "Z" ]
       upperAns = generateRandom()
       upper_rtn = possibleUpper[upperAns]
       upperAns1 = generateRandom()
       upperRtn1 = possibleUpper[upperAns1]
       upperReturn = upper_rtn + upperRtn1
      if (numeric == true)
       possibleNum = ['1', '2', '3', '4', '5', '6', '7', '8', "9", "0"]
       numAns = generate_under10()
       numRtn = possibleNum[numAns]
       numAns1 = generate_under10()
       numRtn1 = possibleNum[numAns1]
       numberReturn = numRtn + numRtn1
     return lower_return + numberReturn + upperReturn
     
     
     
}

// Write password to the #password input
/* DO NOT CHANGE THIS CODE!  This function is going to call your generatePassword() function and whatever is returned from that function will be put onto the page */
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// DO NOT CHANGE THIS CODE
generateBtn.addEventListener("click", writePassword);
