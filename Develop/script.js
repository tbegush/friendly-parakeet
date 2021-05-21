// Assignment code here

//Global variables
var passLength;
var incLowercase;
var incUppercase;
var incNumbers;
var incSpecials;
var password = [];


// function to prompt for a password, check the input.
function passPrompt() {
  passLength = prompt("Enter A NUMBER between 8 - 128 for password length.");
  if (passLength === null || passLength < 8 || passLength > 128) {
    alert("Seriously?! Try one more time.  Read the directions carefully. ");
    passPrompt();
  } 
  // else  if (    incLowercase === null &&     incUppercase === null &&     incNumbers === null &&    incSpecials === null  ) 
  // {
  //   console.log("WTFBRO line 18");
  //   alert("Well then, what would you like your password to include???");
  //   passPrompt();
  // }
  else if (typeof int != true){
alert("Input MUST be a NUMBER. Try Again.");
  }
  else {
    incLowercase = confirm("Include lowercase characters?");
    incUppercase = confirm("Inclide UPPERCASE characters?");
    incNumbers = confirm("Inc1ud3 Arab1c num3ral5?");
    incSpecials = confirm("Include !@#$%^&*()_ characters?");

   

    passwordSetup();
  }
}

var bigArray = [];

var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specials = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "+",
  "-",
  ".",
  "`",
  "~",
  "|",
  "<",
  ">",
  "=",
  "-",
  "_",
];

// else keep going
function passwordSetup() {
  bigArray = [];
  if (incLowercase == true) {
    bigArray = bigArray.concat(lowerCase);
    // console.log("lowercase" + bigArray);
  }
  // else keep going
  if (incUppercase == true) {
    bigArray = bigArray.concat(upperCase);
    // console.log("UPPERCASE" + bigArray);
  }
  // else keep going
  if (incNumbers == true) {
    bigArray = bigArray.concat(numbers);
    // console.log("Numbers" + bigArray);
  }
  // else keep going
  if (incSpecials == true) {
    bigArray = bigArray.concat(specials);
    // console.log("specials" + bigArray);
  }
  password = [];
  console.log(bigArray);
  for (var i = 0; i < passLength; i++) {
    var randomChar = bigArray[Math.floor(Math.random() * bigArray.length)];
    // console.log(randomChar)

    password.push(randomChar);
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  passPrompt();

  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
