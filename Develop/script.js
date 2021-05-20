// Assignment code here

var passLength = prompt("Enter between 8 - 128 for password length.");
var incLowercase = confirm("Include lowercase characters?");
var incUppercase = confirm("Inclide UPPERCASE characters?");
var incNumbers = confirm("Inc1ud3 Arab1c num3ral5?");
var incSpecials = confirm("Include !@#$%^&*()_ characters?");

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
  "z"
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
  "Z"
];
var numbers = [
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"0"
];
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
  "_"
];

if (passLength === null || passLength < 8 || passLength > 128) {
  passLength = prompt("Enter between 8 - 128 for password length.");
}

// else keep going

if (incLowercase == true) {
  bigArray = bigArray.concat(incLowercase);
}
// else keep going
if (incUppercase == true) {
  bigArray = bigArray.concat(incUppercase);
}
// else keep going
if (incNumbers == true) {
  bigArray = bigArray.concat(numbers);
}
// else keep going
if (incSpecials == true) {
  bigArray = bigArray.concat(specials);
}

var i;
for (i = 0; i < passLength; i++) {

  var password = bigArray[Math.floor(Math.random() * bigArray.length)];

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
