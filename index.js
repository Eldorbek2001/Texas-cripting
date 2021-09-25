/*
Author: Ali Elbekov
Class: CSC 337
File:index.js
Description: This is a javaScript File
for Programming Assignmnet #5
This file handles programming side of "Welcome to Jumble",
or in our case "Texas Encrpting"

*/





//Ciphering Starts
function main() {
  inputValue = document.getElementsByTagName("input")[0].value;
  inputValue = inputValue.toLowerCase();
  createNewText(inputValue, showRange());
  // input string from the user is got here.
  // and sent to the cipher coding
  boxOutput(getPreviousTableLetters());
}



/*The following function fetches the value of range input in the HTML File
and returns it.*/
function showRange() {
  var rangeValue = document.getElementsByTagName("input")[1].value;
  document.getElementsByTagName("p")[0].innerText = rangeValue;
  return rangeValue;
}


/*The following function creates the first encripted output of our
program. It will get arguments like range and input value.
Using them, it will create the correct encripted output*/
function createNewText(inputValue, rangeValue) {
  var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
    'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g',
    'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];
  var stringOut = "";
  for (var indexTwo = 0; indexTwo < inputValue.length; indexTwo++) {
    if (letters.includes(inputValue[indexTwo]) == false) {
      stringOut += inputValue[indexTwo];
    }
    for (var i = 0; i < letters.length; i++) {
      if (inputValue[indexTwo] == letters[i]) {
        var rangeNum = Number(rangeValue);
        rangeValue = Number(rangeValue);
        stringOut += letters[rangeValue + i];
        break;
      }
    }
  }
  document.getElementsByClassName("topInnerText")[0].innerText = stringOut;
  stringOut = "";
}
//Siphering ends
//Box encripting starts starts




/*Every time update button is pressed, the followiung function is called
 and a new random box is created and the second encripted output is
 also created in the html.*/
function updateBox() {
  jumbledLetters = [];
  var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
    'w', 'x', 'y'
  ];
  while (jumbledLetters.length < 25) {
    var i = Math.round(Math.random() * (24 - jumbledLetters.length));
    jumbledLetters.push(letters[i]);
    letters.splice(i, 1);
  }
  for (var indexThree = 0; indexThree < jumbledLetters.length; indexThree++) {
    document.getElementsByTagName("td")[indexThree].innerText = jumbledLetters[indexThree];
  }
  boxOutput(jumbledLetters);
}


/*This function is called when there is new inputValue
it will not update the box but rather fetches the
previous one8*/
function getPreviousTableLetters() {
  var tdList = document.getElementsByTagName("td");
  var previousLetterValues = [];
  for (var index = 0; index < tdList.length; index++) {
    previousLetterValues.push(tdList[index].innerText);
  }
  return previousLetterValues;
}

/*This function creates the last version of box siphering output.
it gest current jumbles/not jumbled values as an argement*/
function boxOutput(jumbledLetters) {
  inputValue = document.getElementsByTagName("input")[0].value;
  inputValue = inputValue.toLowerCase();
  var lettersOne = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
    'w', 'x', 'y'
  ];

  retString = "";
  for (var i3 = 0; i3 < inputValue.length; i3++) {
    if (lettersOne.includes(inputValue[i3])) {
      var letterIndex = lettersOne.indexOf(inputValue[i3]);
      retString += jumbledLetters[letterIndex];
    } else {
      retString += inputValue[i3];
    }
  }
  document.getElementsByClassName("bottomInnerText")[0].innerText = retString;
  retString = "";
}
