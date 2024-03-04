// Q1
// var name = prompt()
// alert("Welcome To city of Lights")

// Q2
// Take gender as input from user
// let gender = prompt("Enter your gender (male/female):").toLowerCase();

// if (gender === "male") {
//   alert("Hello sir, good morning!");
// } else if (gender === "female") {
//   alert("Hello madam, good morning!");
// } else {
//   alert("Sorry, I didn't understand your input. Please enter either 'male' or 'female'.");
// } 

// Q 3
// let color = prompt("Enter Colour:").toLowerCase();
// if (color === "red") {
//   alert("Must Stop");
// } else if (color === "yellow") {
//   alert("Ready to move");
// }  else(color === "green"); {
//   alert("Move now");
// } 

// Q 4
// let fuel = prompt("Enter the remaining fuel in your car (in liters):");

// if (fuel < 0.25) {
//   alert("Please refill the fuel in your car!");
// }
// else {
//     alert("abhi bh kam h or dlawa")
// }

// Q 5

// Function to calculate grade and remarks
// function calculateGrade(percentage) {
//     let grade, remarks;
//     if (percentage >= 80) {
//       grade = 'A-one';
//       remarks = 'Good';
//     } else if (percentage >= 70) {
//       grade = 'A';
//       remarks = 'You need to improve';
//     } else if (percentage >= 60) {
//       grade = 'B';
//       remarks = 'You need to improve';
//     } else {
//       grade = 'Fail';
//       remarks = 'Sorry';
//     }
//     return { grade, remarks };
//   }
  
//   // Function to calculate percentage and display marks sheet
//   function displayMarksSheet() {
//     const subject1Marks = parseInt(prompt("Enter marks obtained in Subject 1:"));
//     const subject2Marks = parseInt(prompt("Enter marks obtained in Subject 2:"));
//     const subject3Marks = parseInt(prompt("Enter marks obtained in Subject 3:"));
//     const totalMarks = parseInt(prompt("Enter total marks:"));
  
//     const marksObtained = subject1Marks + subject2Marks + subject3Marks;
//     const percentage = (marksObtained / totalMarks) * 100;
//     const { grade, remarks } = calculateGrade(percentage);
  
//     alert('Marks Sheet');
//     alert(`Total marks: ${totalMarks}`);
//     alert(`Marks obtained: ${marksObtained}`);
//     alert(`Percentage: ${percentage.toFixed(2)}%`);
//     alert(`Grade: ${grade}`);
//     alert(`Remarks: ${remarks}`);
//   }
  
//   // Example usage:
//   displayMarksSheet();


// Q 6

// Function to check the type of the given character
// function checkCharType(char) {
//     const asciiCode = char.charCodeAt(0);
  
//     if (asciiCode >= 48 && asciiCode <= 57) {
//       return 'Number';
//     } else if (asciiCode >= 65 && asciiCode <= 90) {
//       return 'Uppercase letter';
//     } else if (asciiCode >= 97 && asciiCode <= 122) {
//       return 'Lowercase letter';
//     } else {
//       return 'Invalid input';
//     }
//   }
  
//   // Example usage:
//   const inputChar = prompt('Enter a character:');
//   const charType = checkCharType(inputChar);
  
//   alert(`The given character is a ${charType}.`);


// Q 7

// Function to find the larger of two integers
// function findLarger(num1, num2) {
//     let larger;
  
//     if (num1 === num2) {
//       larger = 'The given integers are equal.';
//     } else if (num1 > num2) {
//       larger = num1;
//     } else {
//       larger = num2;
//     }
  
//     return larger;
//   }
  
//   // Example usage:
//   const num1 = parseInt(prompt('Enter the first integer:'));
//   const num2 = parseInt(prompt('Enter the second integer:'));
  
//   const larger = findLarger(num1, num2);
  
//   alert(`The larger of ${num1} and ${num2} is ${larger}.`);


// Q 8

// Function to calculate the sum of digits in an integer
// function sumOfDigits(num) {
//     let sum = 0;
//     let n = num;
  
//     while (n > 0) {
//       sum += n % 10;
//       n = Math.floor(n / 10);
//     }
  
//     return sum;
//   }
  
//   // Example usage:
//   const num = parseInt(prompt('Enter an integer:'));
//   const sum = sumOfDigits(num);
  
//   alert(`The sum of digits in ${num} is ${sum}.`);

// Q 9
// Function to calculate the factorial of an integer
// function factorial(num) {
//     let result = 1;
  
//     for (let i = 2; i <= num; i++) {
//       result *= i;
//     }
  
//     return result;
//   }
  
//   // Example usage:
//   const num = parseInt(prompt('Enter a non-negative integer:'));
//   const factorialResult = factorial(num);
  
//   alert(`The factorial of ${num} is ${factorialResult}.`);


// Q     10

// // Store correct password in a JS variable
// const correctPassword = 'jawan';

// // Ask user to enter his/her password
// const userPassword = prompt('Please enter your password');

// // Check if user has entered the correct password
// if (userPassword === correctPassword) {
//   alert('Correct! The password entered matches the original password.');
// } else if (userPassword === '') {
//   alert('Please enter your password.');
// } else {
//   alert('Incorrect password. The password entered does not match the original password.');
// }

// // Check if the given input is a number, uppercase letter, or lowercase letter
// function checkInputType(input) {
//       if (typeof input === 'number') {
//             return 'number';
//   } else if (input.toUpperCase() === input) {
//     return 'uppercase letter';
//   } else if (input.toLowerCase() === input) {
//     return 'lowercase letter';
//   } else {
//     return 'unknown';
//   }
// }

// // Ask user to enter a character (number or string)
// const userInput = prompt('Please enter a character (number or string)');

// // Check the input type and display the result
// alert(`The input type is: ${checkInputType(userInput)}`);

// Q 11

// var city = "Karachi";
// if (city === "Karachi") {
//   console.log("The City OF Lights");
// }

// Q 12

// var x = 1;
// var y = 1;
// if (x === y) {
//   var z = prompt("Please enter the value of z:");
//   var newVar = parseInt(z);
//   if (isNaN(newVar)) {
//     console.log("Invalid input. Please enter a number.");
//   } else {
//     var newVar = newVar + 3;
//     console.log("The new value of z is: " + newVar);
//   }
// }

// Q 13

// var zipCode = "10010";
// if (zipCode === "10010") {
//   alert("Karachi");
// } else {
//   alert("Please write correct city");
// }

// Q 14

// var password = "correctPassword";
// var userPassword = prompt("Please enter your password:");
// if (userPassword === password) {
//   console.log("Correct!");
// } else {
//   console.log("Incorrect password. Please try again.");
// }

// Q 15

// if (city !== "Karachi") {
//     console.log("The city of lights")
// }

// Q 16

// if (variable !== 11) {
//     variable = 12;
//   }

// Q 17

// if (11 !== 12) {
//     alert("Congratulations! You guessed correctly.");
//   }

// Q 18 

// var firstName = prompt("Please enter your first name.");

// Q 19 

// var city = "Karachi";
// if (city !== "Karavi") {
//   console.log("The City OF Lights");
// }

// var variable1 = 11;
// var variable2 = 12;
// if (variable1 >= variable2) {
//   variable1 = 12;
// }

// if (11 !== 12) {
//   alert("Congratulations! You guessed correctly.");
// }

// var firstName = prompt("Please enter your first name.");
// if (firstName !== "Sheri") {
//   alert("No match");
// }


