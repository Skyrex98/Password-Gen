var isNumeric = (isCapital = isSmaller = isSpecial = false);
$("body").delegate("#generatePassword", "click", function () {
  askForInputs();
  var selection = buildSelectionString();

  var finalPassword = generatePassword(selection);
  $("#password-output").val(finalPassword);
});
function askForInputs() {
  var passwordLength = prompt(
    "What Length's Password You want to generate? (8-128)"
  );
  if (passwordLength < 8 || passwordLength > 128) {
    return askForInputs();
  }
  isSpecial = confirm("Include special characters?");
  isNumeric = confirm("Include numbers?");
  isCapital = confirm("Include uppercase letters?");
  isSmaller = confirm("Include Lowercase Letters?");
}
function buildSelectionString() {
  var capitalLettersArray = [
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
  var smallerLettersArray = [
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
  var specialCharactersArray = ["!", "?", "@", "#", "$", "%", "^", "&", "*"];
  var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var newArray = [];
  if (isSpecial) {
    specialCharactersArray.forEach((element) => {
      newArray.push(element);
    });
  }
  if (isNumeric) {
    numbersArray.forEach((element) => {
      newArray.push(element);
    });
  }
  if (isCapital) {
    capitalLettersArray.forEach((element) => {
      newArray.push(element);
    });
  }
  if (isSmaller) {
    smallerLettersArray.forEach((element) => {
      newArray.push(element);
    });
  }
  return newArray;
}
function generatePassword(selectionArray) {
  var password = "";

  for (var i = 0; i < selectionArray.length; i++) {
    var character =
      selectionArray[Math.floor(Math.random() * selectionArray.length)];

    password = password + character;
  }
  return password;
}
