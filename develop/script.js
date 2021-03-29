// Assignment Code
//DO NOT CHANGE THIS CODE
var generateBtn = document.querySelector("#generate");

possible = ["a", "b", "c", "d","e", "f", "g", "h", "i", "j", "k", "l", 'm', "n", "o", "p", "q", "r","s", "t","u", "v", "w", "x", "y", "z"]
possibleUpper = ["A", 'B', 'C', 'D', 'E', 'F', 'H', 'I', 'J', 'K', 'L', 'M', 'N', "O", 'P', "Q", "R", "S", "T", "U", "V", "W", 'X', 'Y', "Z"]
possibleNum = ['1', '2', '3', '4', '5', '6', '7', '8', "9", "0"] 
possibleSpec = ["*", "!", "@", "#", "$", "^", "&", "+", "-", "?", "<"]
possibleAns = []
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
   var charNum = prompt("please pick a number only, between 8-129")
   var lower = confirm("Do you want lowercase?")
   var upper = confirm("Do you want uppercase?")
   var numeric = confirm("Do you want numbers?")
   var sp_char = confirm("Do you want special characters?")
   var password = ""
   
   
  
     if (lower == true)
       possibleAns = possibleAns.concat(possible)
       else if (lower == false)
        generate_SpecialC()
     if (upper == true)
       possibleAns = possibleAns.concat(possibleUpper)
       else if (upper == false)
       generate_SpecialC()
     if (numeric == true)
     possibleAns = possibleAns.concat(possibleNum)
       else if (numeric == false)
       do_nothing2()
     if (sp_char == true)
     possibleAns = possibleAns.concat(possibleSpec)
       else if (sp_char == false)
       do_nothing3()

    //var possibleJoin = possibleAns.join('')
    console.log(possibleAns)

  
    for (let i = 0; i < charNum; i++) {
      password += possibleAns[Math.floor(Math.random() * possibleAns.length)]
      console.log(password)
    }

      return password
     
     
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