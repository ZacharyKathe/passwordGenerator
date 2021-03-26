// Assignment Code
//DO NOT CHANGE THIS CODE
var generateBtn = document.querySelector("#generate");

function do_nothing(){
  lower_return = ""
  return lower_return
}
function do_nothing1(){
  upperReturn = ""
  return upperReturn
}
function do_nothing2(){
  numberReturn = ""
  return numberReturn
}
function do_nothing3(){
  specRtn = ""
  specRtn1 = ""
  return specRtn + specRtn1
}

function generateRandom(){
  var randomNum = Math.floor(Math.random()*25)
  return randomNum
}
function generate_under10(){
  var smallNum = Math.floor(Math.random()*10)
  return smallNum
}
function generate_lower(){
  possible = ["a", "b", "c", "d","e", "f", "g", "h", "i", "j", "k", "l", 'm', "n", "o", "p", "q", "r","s", "t","u", "v", "w", "x", "y", "z"]
       lower_ans = generateRandom()
       lower_rtn = possible[lower_ans]
       lower_ans1 = generateRandom()
       lower_rtn1 = possible[lower_ans1]
       lower_return = lower_rtn + lower_rtn1
       return lower_return
}
function generate_Upper(){
  possibleUpper = ["A", 'B', 'C', 'D', 'E', 'F', 'H', 'I', 'J', 'K', 'L', 'M', 'N', "O", 'P', "Q", "R", "S", "T", "U", "V", "W", 'X', 'Y', "Z" ]
       upperAns = generateRandom()
       upper_rtn = possibleUpper[upperAns]
       upperAns1 = generateRandom()
       upperRtn1 = possibleUpper[upperAns1]
       upperReturn = upper_rtn + upperRtn1
       return upperReturn
}
function generate_Num(){
  possibleNum = ['1', '2', '3', '4', '5', '6', '7', '8', "9", "0"]
       numAns = generate_under10()
       numRtn = possibleNum[numAns]
       numAns1 = generate_under10()
       numRtn1 = possibleNum[numAns1]
       numberReturn = numRtn + numRtn1
       return numberReturn
}
function generate_SpecialC(){
  possibleSpec = ["*", "!", "@", "#", "$", "^", "&", "+", "-", "?", "<"]
       specAns = generate_under10()
       specRtn = possibleSpec[specAns]
       specAns1 = generate_under10()
       specRtn1 = possibleSpec[specAns1]
       specialReturn = specRtn + specRtn1
       return specRtn + specRtn1
}

function generatePassword(){
   var lower = confirm("Do you want lowercase?")
   var upper = confirm("Do you want uppercase?")
   var numeric = confirm("Do you want numbers?")
   var sp_char = confirm("Do you want special characters?")
   var len = 8
   
  
     if (lower == true)
       generate_lower()
       else if (lower == false)
        generate_SpecialC()
     if (upper == true)
       generate_Upper()
       else if (upper == false)
       generate_SpecialC()
     if (numeric == true)
       generate_Num()
       else if (numeric == false)
       do_nothing2()
     if (sp_char == true)
       generate_SpecialC()
       else if (sp_char == false)
       do_nothing3()
      return lower_return + specRtn + numberReturn + upperReturn + specRtn1
     
     
     
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
