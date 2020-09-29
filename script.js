// Assignment Code
var generateBtn = document.querySelector("#generate");

var charSet1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //Variable character set 1: uppercase characters
var charSet2 = "abcdefghijklmnopqrstuvwx"; //Variable character set 2: lowercase character
var charSet3 = "0123456789"; //Variable character set 3: numeric characters
var charSet4 = "!@#$%^&*()_+{}|:<>?,./;'[]\=-`~'"; //Variable character set 4: special characters

//Function will return a random character from the string
function randomCharacter(str) { 
    var random = (parseInt(Math.random() * str.length));
    return str[random];
}

//Function will return a randomly generated password based on the user's input
function generatePassword() {  
    var password = "";
    var selectedOption = "";
    var charLength = prompt("How many characters would you like your password to be?"); //User will input the number of characters they would like the password to be and then that number will be stored

    //Loop will not allow the user to select a password length of more than 128 or less than 8
    while (charLength > 128 || charLength < 8) { 
        charLength = prompt("Password cannot be more than 128 or less than 8 characters");
    }

    //User inputs their password criteria
    var specialChar = confirm("Click OK to include a special character"); 
    if (specialChar) {                                                            
        selectedOption += charSet3;
    }
    var numChar = confirm("Click OK to include a numeric character"); 
    if (numChar) {                                                            
        selectedOption += charSet4;
    }
    var lowChar = confirm("Click OK to include a lowercase character"); 
    if (lowChar) {                                                              
        selectedOption += charSet2;
    }
    var upChar = confirm("Click OK to confirm include an uppercase character"); 
    if (upChar) {                                                              
        selectedOption += charSet1;
    }

    //Alert to let the user know that one of the options must be selected (if none of the above criteria are chosen)
    if (selectedOption == "") {                                              
        alert("Error! One of the options needs to be selected. Press OK to continue");
        return "";
    }

    //For loop which adds random characters to the string
    for (var i = 0; i < charLength; i++) {   
        password += randomCharacter(selectedOption);
    }

      //Returns password
    return password;                      
}


//Writes password to the #password input
function writePassword() {
    var passwordText = document.querySelector("#password");
    password = generatePassword();
    passwordText.value = password;
}

//Event listener to generate button
generateBtn.addEventListener("click", writePassword);