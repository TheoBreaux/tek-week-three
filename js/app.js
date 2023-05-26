// Count down from 10 to 1.
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// Output odd numbers from 1 to 10.
// for (let i = 1; i <= 10; i += 2) {
//   console.log(i)
// }

// Output even number from 1 to 10.
// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }

// Output multiples of 3, starting at 6 and ending at 60.
// for (let i = 6; i <= 60; i += 3) {
//   console.log(i);
// }

// Output an increasing number of # symbols, from 1 to 7, as shown below.
// let star = "";

// for (let i = 0; i < 7; i++) {
//   star += "#";
//   console.log(star);
// }

// Now, write a for loop that iterates from 1 to 20. The loop should:
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i,  "even");
//   } else if (i % 2 === 1) {
//     console.log(i, "odd");
//   }
// }

// const str = "Hello World";

// for (let i = 0; i < str.length; i++) {
// 	console.log(str[i]);
// }

// const str = "Hello World";

// for (const i in str) {
// 	console.log(str[i]);
// }

// const str = "Hello World";

// for (const c of str) {
// 	console.log(c);
// }

// const str = "Hello World";

// for (let i = 0; i < str.length; i++) {
// 	if (str[i] == "l") {
// 		break;
// 	}

// 	console.log(str[i]);
// }

// const str = "Hello World";

// for (const i in str) {
// 	if (str[i] == "l") {
// 		continue;
// 	}

// 	console.log(str[i]);
// }

// for (const c of str) {
// 	if (c == "l") {
// 		continue;
// 	}

// 	console.log(c);
// }

// let x = 30;

// while (x > 0) {
// 	x /= 2;
// 	x--;

// 	if (x % 1 != 0) {
// 		break;
// 	}

// 	console.log(x);
// }

// Count down to 0 from a given number.

// let num = 200;

// while (num >= 0) {
// 	console.log(num);
// 	num--;
// }

// Log integers in multiples of 3 as long as they are less than 35.

// let num = 0;

// while (num < 35) {
//   console.log(num);
//   num += 3;
// }

// Print integers in multiples of 5 as long as they are less than 100
// let num = 0;

// while (num < 100) {
//   console.log(num);
//   num += 5;
// }

// Print integers between 0 and 20 with the following conditions:

// All numbers divisible by 2 should be multiplied by 3 before they are output.
// All other integers should not be output.

// let num = 0;

// while (num <= 20) {
//   //check if num is divisibile by 2
//   if (num % 2 === 0) {
//    console.log(num * 3);
//   }
// 	// increment num by 1
// 	num++;
//   }

// let cookie = 4;
// let payment = 10;

// let change = payment - cookie;

// let totalQuarters = 0;

// while (change > 0) {
// 	change -= .25;
// 	totalQuarters++;
// }

// console.log(totalQuarters);

// let x = 10;

// do {
// 	x--;
// 	console.log(x);
// } while (x > 50);

// let x = 1;
// let y = 1;

// myLoop: while (true) {
//   console.log(`Outer loop ${x}.`);
//   x++;

//   while (true) {
//     console.log(`Inner loop ${y}.`);
//     y++;

//     if (x == 5 && y % 5 == 0) {
//       break myLoop;
//     } else if (y % 5 == 0) {
//       break;
//     }
//   }
// }

// -----------------------------------------------------------------
// Reverse a string using a for loop(no using .reverse())
// let str = "PerScholas";
// let result = "";

// for (let i = str.length - 1; i >= 0; i--) {
// 	result += str[i];
// }
// console.log(result);

// Write a for loop that calculates and prints the sum of all numbers from 1 to 100.
// let sum = 0;

// for (let i = 1; i <= 100; i++) {
// 	sum += i;
// 	console.log(sum);
// }

// Write a for loop that prints the multiplication table for a given number

// let num = 3;

// for (let i = 1; i <= 100; i++) {
//   console.log(i * num);
// }
