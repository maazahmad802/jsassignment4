//P#1. Write a js program to find the length of a string.
// let sentence = "Hey I'm Muslim and Fazi is my friend";
// console.log(sentence.length);


// P2 Write a js program to concatenate two strings.
// let string1 = "Hey I'm Muslim and";
// let string2 = "Fazi is my Friend.";
// let concatenate = `${string1} ${string2}`
// console.log(concatenate);

// P3 Write a js program to convert a string to uppercase.
//  let sentence = "Hey I'm Muslim and Fazi is my friend";
//  let sentence1 = sentence.toUpperCase();
//  console.log(sentence1);

// P4 Write a js program to convert a string to lowercase.
// let sentence2 = "HEY I'M MUSLIM AND FAZI IS MY FRIEND";
// let sentence3 = sentence.toLowerCase();
// console.log(sentence3);

// P5 Write a js program to check if a string contains a specific substring.
// const str = 'This is my example string!';
// const substr = 'my example';

// console.log(str.includes(substr));

// P6 Write a js program to find the index of a specific character in a string.
//  const str = 'This is my example string!';
// const char = 'e';
// console.log(str.indexOf(char));

// P7 Write a js program to replace a specific substring in a string.

// let orignalString = "I love Pakistan from UK";
// let subStringToReplace = "UK";
// let replacementString ="USA"

// let modifiyString = orignalString.replace(subStringToReplace , replacementString);
//  console.log(modifiyString);

// P8 Write a js program to remove leading and trailing whitespace from a string.

// let orignalString = "     Hello,World!     ";
// let removeWhiteSpaceString = orignalString.trim();
// console.log(removeWhiteSpaceString);

// P9 Write a js program to split a string into an array of substrings.

// let orignalString = "Apple, Banana,  Orange";
// let splitString = orignalString.split(",");
// console.log(splitString);

// P10 Write a js program to reverse a string.
// let orignalString ="Helo World ";
// let reverseString ="";

// for (let i = orignalString.length -1; i >= 0; i--) {
//    reverseString += orignalString[i];   
// }
// console.log(reverseString);


// NUMBER PROBLEMS

// p1 Write a js program to find the sum of two numbers.
// let num1 = 12;
// let num2 =10;
// let sumOfTwo = num1 + num2;
// console.log(sumOfTwo);

// p2 Write a js program to find the difference between two numbers.

// let num1 = 10;
// let num2 = 5;

// let difference = num1 - num2;

// console.log(difference);

// p3 Write a js program to find the product of two numbers.
//  let num1 = 12;
//  let num2 = 12;
//   let productOfTwoNumber = num1*num2;
//   console.log(productOfTwoNumber);

// p4 Write a js program to find the quotient and remainder of two numbers.

// let num1 = 10;
// let num2 = 3;

// let quotient = Math.floor(num1 / num2);
// let remainder = num1 % num2;

// console.log("Quotient: " + quotient); 
// console.log("Remainder: " + remainder);

// p5 Write a js program to round a number to the nearest integer.

// let num = 3.6;
// let rounded = Math.round(num);
// console.log(rounded); 

// p6 Write a js program to generate a random number between 0 and 1
// let randomNum = Math.random();
// console.log(randomNum);

// p7 Write a js program to find the maximum and minimum of two numbers.
// let num1 = 10;
// let num2 = 5;

// let maxNum = Math.max(num1, num2);
// let minNum = Math.min(num1, num2);

// console.log("The maximum number is: " + maxNum);
// console.log("The minimum number is: " + minNum);


// p8 Write a js program to calculate the square root of a number.
// let num = 16;
// let sqrtNum = Math.sqrt(num);
// console.log(sqrtNum);
 
// p9 Write a js program to calculate the absolute value of a number.
// let num = -5;
// let absNum = Math.abs(num);
// console.log(absNum);

 
//p10 Write a js program to calculate the power of a number.

// let num = 2;
// let exponent = 3;
// let result = Math.pow(num, exponent);
// console.log(result);

// DATE PROBLEMS

// p1 Write a js program to get the current date and time.
// const date = new Date(); 
// console.log(date);

// p2 Write a js program to get the current year.

// const now = new Date();
// const currentYear = now.getFullYear();

// console.log(`Current year: ${currentYear}`);

// p3 Write a js program to get the current month.
// const now = new Date();
// const currentMonth =  now.getMonth();
// console.log(`currentMonth : ${currentMonth}`);

// p4 Write a js program to get the current day of the week.
// const now = new Date();
// const currentDay =  now.getDay();
// console.log(`currentDay : ${currentDay}`);

// p5 Write a js program to add a specific number of days to a date.

// const date = new Date('2023-03-13');
// const daysToAdd = 4;

// date.setDate(date.getDate() + daysToAdd);

// console.log(`New Date: ${date}`);
 
// p6 Write a js program to subtract a specific number of days from a date.
//  const date = new Date('2023-03-13');
//  const dayToSubtract = 5;
//  date.setDate(date.getDate() + dayToSubtract);
//  console.log(`New Date : ${date}` );

// p7 Write a js program to get the time in milliseconds.
// const timeInMilliseconds = new Date().getTime();

// console.log(`Current time in milliseconds: ${timeInMilliseconds}`);

// MATH methods

// p1 Write a js program to find the absolute value of a number.
//  let num  = -100;
//  let absNum =  Math.abs(num);
//  console.log(absNum);

// p2 Write a js program to find the highest value in a list of numbers.
 

// let numList =  [ 1,2,4,5,6,7,8,9,6,5,4,3,223,535,5];
// let highestNumber= Math.max(numList);
// console.log(highestNumber);

// function findHighest(numbers) {
//    let highest = numbers[0];
//    for (let i = 1; i < numbers.length; i++) {
//      if (numbers[i] > highest) {
//        highest = numbers[i];
//      }
//    }
//    return highest;
//  }
 
//  const numbers = [2, 10, 6, 8, 4];
//  const highest = findHighest(numbers);
//  console.log(highest); 
 


// FOR LOOP PROGRAMS

// p1 Write a program that uses a for loop to print the numbers from 1 to 10.

// for (let number = 0; number < 10; number++) {
//    console.log(number);
// }

// p2 Write a program that uses a for loop to print the elements of an array.

// const array = [1, 2, 3, 4, 5];

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// p3 Write a program that uses a for loop to calculate the factorial of a number.

// function factorial(n) {
//    let result = 1;
 
//    for (let i = 1; i <= n; i++) {
//      result *= i;
//    }
 
//    return result;
//  }
 
 
//  console.log(factorial(9)); 
 
// p4 Write a program that uses a for loop to generate a multiplication table for a given number.

// let number = 2;
// for (let i = 1; i <= 10; i++) {
//   let result = i * number;

//   console.log(`${number} x ${i} = ${result}`);
// }

// p5 Write a program that uses a for loop to find the sum of all even numbers from 1 to 100.

// let sum = 0;
//  for (let i = 0; i <= 100; i++) {
//    if (i%2==0 ) {
//       sum = sum + i;
//    }
//    console.log(sum);
//  }

// While Loop:

// p1 Write a program that asks the user to enter a number and then prints out all the odd numbers up to that number.

// let userNumber = parseInt(prompt("enter a number"));
// let i =1;
// while (i<= userNumber) {
//    if (i%2!==0) {
//       console.log(i);
//    }
//    i++;
// }

// p2 Write a program that asks the user to enter a number and then prints out the multiplication table for that number, up to 10.

// let userInput = parseInt(prompt("Enter a number"));
// i=1;

// while (i<=10) {
//   let result = i * userInput;
//    console.log(`${userInput} * ${i} = ${result}`);
//    i++;
// }

// p3 Write a program that generates a random number between 1 and 100 and asks the user to guess it. The program should keep asking the user for guesses until they get the number.

// let number = parseInt(Math.random(0)*100);
// let userGuess ;
// while (number!== userGuess) {
//     userGuess = parseInt(prompt("Enter your Guessed number"))
//       if (userGuess>number) {
//          console.log("you Guess is high");
//       }
//       else if(userGuess<number){
//          console.log("you Guess is small");

//       }
//       else{
//          console.log(`you Guess is correct the number is  ${number} `);
//       }
// }

// let number = Math.floor(Math.random() * 100) + 1;
// let userGuess;

// while (number !== userGuess) {
//   userGuess = parseInt(prompt("Enter your Guessed number"));

//   if (userGuess > number) {
//     console.log("Your guess is high!");
//   } else if (userGuess < number) {
//     console.log("Your guess is small!");
//   } else {
//     console.log(`You guessed correctly! The number was ${number}.`);
//   }
// }

// p4 Write a program that asks the user to enter a word and then prints out the word in reverse order.

// let word = prompt("Enter a word:");
// let reversed = "";
// let i = word.length - 1;

// while (i >= 0) {
//   reversed += word[i];
//   i--;
// }

// console.log("The word in reverse order is:", reversed);

// p5 Write a program that asks the user to enter a series of numbers and then finds the sum and average of those numbers.


// Do-while Loop:

//p1 Write a program that asks the user to enter a password. Keep asking the user to enter a password until they enter the correct password.

// let password = "";
// do {
//    password = prompt(" Enter your password");
// } while (password == "maazahamd");
// console.log("congrats your Password is correct");

// p2 Write a program that asks the user to enter a number and then prints out all the numbers from that number down to 1.

let num;

do {
  num = prompt("Enter a number greater than 0:");
} while (num <= 0);

for (let i = num; i >= 1; i--) {
  console.log(i);
}


