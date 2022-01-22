function multiply(a, b) {
  return a * b;
}

const result = multiply(2, 4);

console.log(result);

// Pick a string. Your string can have any number of characters.
var my_string = 'a';
// Calculate the ASCII value of the first character, i.e. the character at the position 0. 
var ASCII_value = my_string.charCodeAt(0);

// Let us print
console.log(ASCII_value);
// To view in terminal type node file name (e.g., tinkering.js)


var my_string = 'Udacity';
// Iterate using a Loop
for (var i = 0; i < my_string.length; i++) {
  console.log(my_string.charCodeAt(i));
}

console.log('green' == 'blue')
console.log('green' == 'green')
console.log('green' == 'Green')
console.log('Green' == 'green')
console.log('green' > 'blue')
console.log('green' > 'green')
console.log('green' > 'Green')
console.log('Green' == 'green')


// The below should print the joke below on two lines with special characters.

// <Why couldn't the shoes go out and play?
// They were all "tied" up!>

/*
 * Programming Quiz: All Tied Up (2-5)
 
 * Quiz Requirements
 * 1. Your code should have a variable joke
 * 2. Your joke should use only one string
 * 3. Your joke should match the expected format
*/
var joke = 'Why couldn\'t the shoes go out and play?\nThey were all \"tied\" up!'
console.log(joke);




// The below should print like this. Note the \n placement within the '' single quotes after the + 

// Blowing from the west
// Fallen leaves gather
// In the east.
/*
 * Programming Quiz: Yosa Buson (2-6)
 */
 
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `haiku`
 * 2. Your code should use string concatenation
 * 3. Your poem should match the famous haiku poem
 */

var haiku = 'Blowing from the west'+'\nFallen leaves gather'+'\nIn the east.'
console.log(haiku);



// BOOLEAN SECTION EXAMPLES

var a = 10;
var b = 20;
// a comparison - we will study this in detail in upcoming lesson
if (a>b) // The outcome of a>b will be a boolean
    console.log("Variable `a` has higher value"); // if a>b is true
else 
    console.log("Variable `b` has higher value"); // if a>b is false

//In general cases (regular equality check), a true corresponds to number 1, whereas false represents a number 0. For example:

    if(1){
      console.log("This statement will always execute because conditional is set to 1 i.e., true");
  }
  
  if(0){
          console.log("This statement will NEVER execute because conditional is set to 0 i.e., false");
  }

// NULL, UNDEFINED, NaN
// [null] refers to the "value of nothing", while 
// [undefined] refers to the "absence of value", 
// [NaN] stands for "Not-A-Number" and it's often returned indicating an error with number operations.

// calculating the square root of a negative number will return NaN
console.log(Math.sqrt(-10))

// trying to divide a string by 5 will return NaN
console.log("hello"/5)

// Undefined example

var signedIn;
console.log(signedIn);

// EQUALITY
// So far, you’ve seen how you can use == and != to compare numbers and strings for equality. However, if you use == and != in situations where the values that you're comparing have different data-types, it can lead to some interesting results. For example,

console.log("1" == 1)
// Returns: true

console.log(0 == false)
// Returns: true. The == operator is unable to differentiate 0 from false.

console.log(' ' == false)
// Returns: true. Both the operands on either side of the == operator are first converted to zero, before comparison.

// The above return 'true' due to 'type comparison' == (first converted to numbers, before comparison) 
// If we don't want to convert the operands, before comparison, we have to use a strict comparison ===

// IMPLICIT TYPE COERCION

console.log("Hello" % 10)

console.log("3" > 1) //true
console.log(3 != "3") //false
console.log(true >= 0) //true
console.log(1 !== false) //true
console.log("false" === 0) //false
console.log(3 === 3) //true

// "3" > 1 is true because 3 is greater than 1 (implicit type coercion)
// true >= 0 is true because 1 greater than or equal to 0 (implicit type coercion)
// 1 !== false is true because 1 does not equal false (strict equality)
// 3 === 3 is true because 3 equals 3 (strict equality)

/*
 * Programming Quiz: Semicolons! (2-8)
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have two variables -  `thingOne` and `thingTwo`
 * 2. Your code should only have one `console.log` statement
 * 3. Your code should print out the values of `thingOne` and `thingTwo` using concatenation
 * 4. Your code should contain semicolons at the end of each line
 */

var thingOne = "red"; 
var thingTwo = "blue";
console.log(thingOne + " " + thingTwo);

/*
 * Programming Quiz: Out to Dinner (2-10)
 */
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables - `bill`, `tip`, and `total`
 * 2. Your variables - `bill`, `tip`, and `total` should be declared using the `var` keyword
 * 3. Your variable `bill` should be a number, having a value equal to the result of `10.25 + 3.99 + 7.15`
 * 4. Your variable `tip` should be a number, having a value equal to 15% of the `bill`
 * 5. Your variabe `total` should be a number, having a value equal to the `bill` and `tip` added together
 * 6. Your code should print the total to the console
 */
 
// your code goes here

var bill = 10.25 + 3.99 + 7.15;
var tip = 0.15 * bill;
var total = bill + tip;

console.log(total)

/*
 * Programming Quiz: MadLibs (2-11)
 * 
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables - `adjective1`, `adjective2`, `adjective3`, and `madLib`.
 *
 * 2. Use the adjective1, adjective2, and adjective3 variables to set the madLib variable to the message:
 * 'The Intro to JavaScript course is amazing. James and Julia are so fun. I cannot wait to work through the rest of this entertaining content!'
 *
 * 3. Your madLib should match the given string
 * 4. The madLib variable should be printed to the console
 */
 
 // your code goes here

 var adjective1 = "amazing";
 var adjective2 = "fun";
 var adjective3 = "entertaining";
 var madLib = "The Intro to JavaScript course is "+ adjective1 +". James and Julia are so "+ adjective2 +". I cannot wait to work through the rest of this "+ adjective3 +" content!";
 
 console.log(madLib)

 /*
 * Programming Quiz: One Awesome Message (2-12)
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Create the following variables:
 *     - firstName
 *     - interest
 *     - hobby
 *
 * 2. Create `awesomeMessage` variable, and set it to a message using string concatenation and the variables above. The `awesomeMessage` variable should use `firstName`, `interest`, and `hobby`
 *
 * 3. The `awesomeMessage` variable should have the correct format, as shown below:
 * "Hi, my name is _____. I love ______. In my spare time, I like to ______."
 *
 * 4. Print `awesomeMessage` variable to the console using log() method
 */
 
 /*
 * Example:
 * - Assuming, firstName would have been assigned to "Julia",
 *   interest to "cats", and hobby to "play video games" to produce the following message:
 * 
 *   Hi, my name is Julia. I love cats. In my spare time, I like to play video games.
 *
 * - Be sure to include spaces and periods where necessary!
 */
 
 
var firstName = "Sarah";
var interest = "my dog";
var hobby = "play hockey";
var awesomeMessage = "Hi, my name is " + firstName + ". I love " + interest + ". In my spare time, I like to " + hobby + ".";
console.log(awesomeMessage);


// CONDITIONALS Flowchart to Code

const price = 15.00; // price of our hammer
const money = 20.00; // how much money i have

if (money >= price) {
  console.log("Buy the hammer");
}
  else {
    console.log("Don't buy the hammer");
}


var a = 1;
var b = 2;

if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than or equal to b");
}

// Else if statements
// In JavaScript, you can represent this secondary check by using an extra if statement called an else if statement.

let weather = "sunny";

if (weather === "snow") {
  console.log("Bring a coat.");
} else if (weather === "rain") {
  console.log("Bring a rain jacket.");
} else {
  console.log("Wear what you have on.");
}

/*
 * Programming Quiz: Even or Odd (3-2)
 *
 * Write an if...else statement that prints `even` if the 
 * number is even and prints `odd` if the number is odd.
 *
 * Note - make sure to print only the string "even" or the string "odd"
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `number`, and include an `if...else` statement
 * 2. Your conditional should use a strict comparison (`===` or `!==`), and use the modulo ( `%` ) operator
 * 3. Your code should produce the expected output - "even" or "odd" using console.log() method
 */
 
 
// change the value of `number` to test your if...else statement
var number = 2;

if (0 === number % 2) { 
    console.log("even");
} else {
console.log("odd");
}


/*
 * Programming Quiz: Musical Groups (3-3)
 */
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `musicians`, and include `if...else if...else` conditional statement
 * 2. Your code should produce the expected output, as mentioned above. Read each condition carefully. 
 */
 
// change the value of `musicians` to test your conditional statements
let musicians = 1;

if (musicians <= 0) {
    console.log("not a group");
} else if (musicians === 1) {
    console.log("solo");
} else if (musicians === 2) {
    console.log("duet");
} else if (musicians === 3) {
    console.log("trio");
} else if (musicians === 4) {
    console.log("quartet")
} else if (musicians >= 5) {
    console.log("this is a large group");
}

// note that when the ; was placed after the else if (musicians >= 5); and not after the "this is a large group" it printed both solo and this is a large group to the console

/*
 * Programming Quiz: Murder Mystery (3-4)
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variables - `room`, `suspect`, `weapon`, and `solved`
 * 2. Your code should include a conditional statement
 * 3. The variable `suspect` should use one of the provided values
 * 4. The variable `weapon` should be based on the `room`
 * 5. Your code should produce the expected output: __________ did it in the __________ with the __________!
 * Example: Mr. Parkes did it in the dining room with the knife!
 *
 * 6. For unmatching combination of the suspect and the room, print nothing on the console
 */

/* ****************************************** */
/* TESTING LOGIC */ 
// Change the value of `room` and `suspect` to test your code

// A room can be either of - dining room, gallery, ballroom, or billiards room
// var room = "billiards room";

// A suspect can be either of - Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, or Mr. Kalehoff
// Test your code by giving matching as well as unmatching names of the suspect
// var suspect = "Mr. Parkes"; 

/* ****************************************** */

/* IMPLEMENTATION LOGIC*/

// Initial values
let weapon = "";
let room = "ballroom";
let suspect = "Mr. Kalehoff";
let solved = false;


/*
* To help solve this mystery, write a combination of conditional statements that:
* 1. sets the value of weapon based on the room and
* 2. sets the value of solved to true if the value of room matches the suspect's room
*/

if (room === 'ballroom') {
  weapon = 'poison';
  if(suspect === "Mr. Kalehoff")
  solved = true;
  
} else if (room === 'gallery') {
  weapon = 'trophy';
  if(suspect === 'Ms. Van Cleve')
  solved = true;
  
} else if (room === 'billiards room') {
  weapon = 'pool stick';
  if (suspect === 'Mrs. Sparr')
  solved = true;
  
} else if (room === 'dining room') {
    weapon = 'knife';
    if (suspect === 'Mr. Parkes')
    solved = true;
}

/* ****************************************** */
// The code below will run only when `solved` is true
if (solved) {
	console.log(suspect + " did it in the "+ room +" with the "+weapon+"!");
}
/* ****************************************** */



/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `balance`, `checkBalance`, `isActive`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should produce the expected output
 * 4. Your code should not be empty
 * 5. BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED. 
 */
 
// change the values of `balance`, `checkBalance`, and `isActive` to test your code
let balance = 325.00;
let checkBalance = true;
let isActive = false;

if (checkBalance === true) {
  if (isActive === true && balance > 0) {
    console.log("Your balance is $" + balance.toFixed(2)".");
  }
  else if (isActive === false) {
    console.log("Your account is no longer active")
  }
  else if (isActive === true && balance === 0) {
  console.log("Your account is empty")
  }
  else if (isActive === true && balance < 0) {
    console.log("Your balance is negative. Please contact bank.")
  }  
else {
  console.log("Thank you. Have a nice day!");
}
}

let balance = -325;
let checkBalance = true;
let isActive = true;

if (checkBalance === true) {
    
  if (isActive === true && balance > 0) {
    console.log("Your balance is $" + balance.toFixed(2) + ".");
  }
  else if (isActive === true && balance === 0) {
  console.log("Your account is empty.");
  }
  else if (isActive === true && balance < 0) {
    console.log("Your balance is negative. Please contact bank.");
  }  
   else if (isActive === false) {
    console.log("Your account is no longer active.");
  }
}

else {
  console.log("Thank you. Have a nice day!");
}


var flavor = "strawberry";
var vessel = "cone";
var toppings = "cookies";

// Add your code here
if ((flavor === "vanilla" || flavor === "chocolate") && (vessel === "cone" || vessel === "bowl") && (toppings === "sprinkles" || toppings === "peanuts")){
        console.log ("I'd like two scoops of " + flavor + "ice cream in a " + vessel + "with " + toppings + ".")
}

/*
 * Programming Quiz: What do I Wear? (3-7)
 *
 * Using if/else statements, create a series of logical expressions that logs the size of a t-shirt based on the measurements of:
 *   - shirtWidth
 *   - shirtLength
 *   - shirtSleeve
 *
 * Use the chart above to print out one of the following correct values:
 *   - S, M, L, XL, 2XL, or 3XL
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `shirtWidth`, `shirtLength`, and `shirtSleeve`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should use logical expressions
 * 4. Your code should produce the expected output
 * 6. Your code should not be empty
 * 7. BE CAREFUL ABOUT THE EXACT CHARACTERS TO BE PRINTED.
 */
 


// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;

var size = "NA"

/*
 * To gain confidence, check your code for the following combination of [shirtWidth, shirtLength, shirtSleeve, expectedSize]:
 * [18, 28, 8.13, 'S']
 * [19.99, 28.99, 8.379, 'S']
 * [20, 29, 8.38, 'M']
 * [22, 30, 8.63, 'L']
 * [24, 31, 8.88, 'XL']
 * [26, 33, 9.63, '2XL']
 * [27.99, 33.99, 10.129, '2XL']
 * [28, 34, 10.13, '3XL']
 * [18, 29, 8.47, 'NA']
*/

// WRITE YOUR CODE HERE

var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;

if ((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength < 29) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38)) {
  size = "S";
}
  else if ((shirtWidth >= 20 && shirtWidth < 22) && (shirtLength >= 29 && shirtLength < 30) && (shirtSleeve >= 8.38 && shirtSleeve < 8.63)) {
  size = "M";
}
  else if ((shirtWidth >= 22 && shirtWidth < 24) && (shirtLength >= 30 && shirtLength < 31) && (shirtSleeve >= 8.63 && shirtSleeve < 8.88)) {
  size = "L";
}
  else if ((shirtWidth >= 24 && shirtWidth < 26) && (shirtLength >= 31 && shirtLength < 33) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63)) {
    size = "XL";
}
  else if ((shirtWidth >= 26 && shirtWidth < 28) && (shirtLength >= 33 && shirtLength < 34) && (shirtSleeve >= 9.63 && shirtSleeve < 10.13)) {
    size = "2XL";
}
  else if ((shirtWidth >= 28) && (shirtLength >=34) && (shirtSleeve >= 10.13)) {
  size = "3XL";
  }
  else {
    size = "NA";
  }
  
  console.log(size);



/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `eatsPlants`, `eatsAnimals`
 * - Your code should include ternary statements. Do not use if....else statement. 
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
 
// change the values of `eatsPlants` and `eatsAnimals` to test your code

/*
 * Test your code agaist the followig possible input/output combinations of (`eatsPlants`, `eatsAnimals`, expected output):
 * - (true, true, omnivore)
 * - (false, true, carnivore)
 * - (true, false, herbivore)
 * - (false, false, undefined)
 */

var eatsPlants = false;
var eatsAnimals = true;

var category = eatsPlants ? (eatsAnimals ? "omnivore" : "herbivore") : (eatsAnimals ? "carnivore" : "undefined");

console.log(category); 


/*
 * Programming Quiz: Back to School (3-9)
 *
 * Write a switch statement to set the average salary of a person based on their type of completed education.
 *
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `education`, and `salary`
 * - Your code should include a switch statement
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
 
// no high school diploma earned an average of $25,636/year,
// a high school diploma earned an average of $35,256/year,
// an Associate's degree earned an average of $41,496/year,
// a Bachelor's degree earned an average of $59,124/year,
// a Master's degree earned an average of $69,732/year,
// a Professional degree earned an average of $89,960/year,
// and a Doctoral degree earned an average of $84,396/year.

// change the value of `education` to test your code
var education = 'no high school diploma';

// set the value of this based on a person's education
var salary = 0;

switch (education) {
  case "no high school diploma":
    salary = 25636;
    break;
  case "a high school diploma":
    salary = 35256;
    break;
  case "an Associate's degree":  
    salary = 41496;
    break;
  case "a Bachelor's degree":  
    salary = 59124;
    break;
  case "a Master's degree":
    salary = 69732;
    break;
  case "a Professional degree":
    salary = 89960;
    break;
  case "a Doctoral degree":
    salary = 84396;
    break;
}

console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year.");