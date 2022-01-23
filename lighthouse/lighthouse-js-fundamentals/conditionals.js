const raining = true;
const cold = false;
const temperature = -4;

if (raining) {
  console.log("Don't forget your umbrella!");
}
if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");


if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine.");
}

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

// Logical Operators

const isCitizen = true;
const age = 26;

// && logical AND 
if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}


// || logical OR
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}


// ! logical NOT
if (!raining) {
  console.log("Leave your umbrella at home!");
}

// wichSchool Assignment
const whichSchool  = function (age) {
  if (age < 13) {
    console.log("Elemenatary School");
  }
  else if (age >= 13 || <=18) {
    console.log("Secondary School");
  }
  else {
    console.log("Lighthouse Labs");
  }
}
console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));