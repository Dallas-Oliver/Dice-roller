const d4 = document.querySelector(".D4");
const d6 = document.querySelector(".D6");
const d8 = document.querySelector(".D8");
const d10 = document.querySelector(".D10");
const d20 = document.querySelector(".D20");
const container = document.querySelector(".container");
const displayText = document.querySelector(".display-text");
const rollButton = document.querySelector("#roll-button");
const diceSound = new Audio("diceSound.wav");
const numberRolled = document.getElementById("number-rolled");
const modifier = document.getElementById("modifier-field");
const numberOfDice = document.getElementById("dice-count");
const plusMod = document.getElementById("plus-mod");
const minusMod = document.getElementById("minus-mod");
const minusDice = document.getElementById("minus-dice");
const plusDice = document.getElementById("plus-dice");
const dropdownItems = document.getElementsByClassName("dropdown-item");

const image = document.getElementById("display-image");
let whichDie;

modifier.value = 0;
numberOfDice.value = 1;

console.log(dropdownItems);

function chooseDie(die) {
  numberRolled.innerHTML = "";
  rollButton.style.visibility = "visible";
  switch (die) {
    case d4:
      whichDie = d4;
      image.src = "";
      image.src = "d4.png";
      displayText.innerHTML = "You've chosen a D4!";
      break;
    case d6:
      whichDie = d6;
      image.src = "";
      image.src = "d6.png";
      displayText.innerHTML = "You've chosen a D6!";
      break;
    case d8:
      whichDie = d8;
      image.src = "";
      image.src = "d8.png";
      displayText.innerHTML = "You've chosen a D8!";
      break;
    case d10:
      whichDie = d10;
      image.src = "";
      image.src = "d10.png";
      displayText.innerHTML = "You've chosen a D10!";
      break;
    case d20:
      whichDie = d20;
      image.src = "";
      image.src = "d20.png";
      displayText.innerHTML = "You've chosen a D20!";
      break;
  }
}

function whichDeterminer(number) {
  const initialRoll = parseInt(Math.floor(Math.random() * number) + 1);
  const withModifier = initialRoll + Number(modifier.value);
  const Total = withModifier * parseInt(numberOfDice.value);

  setTimeout(function() {
    return (numberRolled.innerHTML = `You rolled ${
      numberOfDice.value
    } D${number} with a modifier of ${
      modifier.value
    } . Your total is ${Total}.`);
  }, 2500);
}

function positiveMod(e) {
  e.preventDefault();

  modifier.value++;
}

function negativeMod(e) {
  e.preventDefault();

  modifier.value--;
}

function addDice(e) {
  e.preventDefault();

  numberOfDice.value++;
}

function subtractDice(e) {
  e.preventDefault();

  numberOfDice.value--;

  if (numberOfDice.value <= 0) {
    numberOfDice.value = 1;

    numberRolled.innerHTML = "You can't roll less than a single die.";
  }
}

function rollDie(e) {
  e.preventDefault();

  diceSound.play();

  numberRolled.innerHTML = "Rolling...";

  if (whichDie === d4) {
    whichDeterminer(4);
  } else if (whichDie === d6) {
    whichDeterminer(6);
  } else if (whichDie === d8) {
    whichDeterminer(8, "an");
  } else if (whichDie === d10) {
    whichDeterminer(10);
  } else if (whichDie === d20) {
    whichDeterminer(20);
  }
}

rollButton.addEventListener("click", e => rollDie(e));
plusMod.addEventListener("click", e => positiveMod(e));
minusMod.addEventListener("click", e => negativeMod(e));
plusDice.addEventListener("click", e => addDice(e));
minusDice.addEventListener("click", e => subtractDice(e));

//8, 11, 18 need to have 'an' in front instead of 'a'
//add modifiers and input field for # of dice to roll and get rid of advantage/disadvantage buttons.
