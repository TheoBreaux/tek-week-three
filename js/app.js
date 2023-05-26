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

// const names = ["John", "Abagail", "Jerome", "Cynthia"];
// // const greetings = [];

// // for (let i = 0; i < names.length; i++) {
// // 	greetings[i] = "Hello, " + names[i] + "!";
// // 	console.log(greetings[i]);
// // }

// for ( n of names) {
//     console.log(n)
// }

// // Using a Class/Constructor Function (less common syntax)
// let nums = new Array(2, 4, 18);
// // let nums = Array(2, 4, 18);

// // Using Array Literal syntax (recommended best practice)
// // let nums = [2, 4, 18];
// console.log(nums);

// let favMovies = ["Go", "House of Gucci", "Rent"];

// console.log(favMovies);

// let movies = ['Caddyshack', 'Interstellar', 'Scarface'];
// let firstMovie = movies[0];  // 'Caddyshack'
// console.log(firstMovie);

// let yourMovies = ['Caddyshack', 'Interstellar', 'Scarface'];
// let myMovies = ["Batman", "The Count of Monte Cristo", "Shrek"];

// let ourMovies = yourMovies.concat(myMovies);

// // console.log(ourMovies); // ['Caddyshack', 'Interstellar', 'Scarface', 'Batman', 'The Count of Monte Cristo', 'Shrek']

// let yourMoviesManyTimes = yourMovies.concat(yourMovies, yourMovies, yourMovies);

// // console.log(yourMoviesManyTimes); // ['Caddyshack', 'Interstellar', 'Scarface', 'Caddyshack', 'Interstellar', 'Scarface', 'Caddyshack', 'Interstellar', 'Scarface', 'Caddyshack', 'Interstellar', 'Scarface']

// let yourMoviesCopy = yourMovies.concat();

// console.log(yourMoviesCopy); // ['Caddyshack', 'Interstellar', 'Scarface']

// let movieString = myMovies.join(" and ");

// console.log(movieString + " all walk into a bar..."); // Batman and The Count of Monte Cristo and Shrek all walk into a bar...

// console.log(movieString);

// console.log(movieString.split(' '));

// myMovies.push('Trading Places', 'Antitrust');
// myMovies.unshift('Star Wars');

// console.log(myMovies);

// let movies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];

// // let removedMovies = movies.splice(3, 1, 'Spaceballs', 'Alien');
// // This starts at element 3 (Trading Places), removes 1 element, and adds Spaceballs and Alien.
// // removedMovies => ['Trading Places']
// // movies => ['Caddyshack', 'Interstellar', 'Scarface', 'Spaceballs', 'Alien']
// // console.log(removedMovies);
// // console.log(movies);

// // removedMovies = movies.splice(0, 3);
// // This starts at element 0 and removes 3 elements.
// // removedMovies => ['Caddyshack', 'Interstellar', 'Scarface']
// // movies => ['Spaceballs', 'Alien']

// // console.log(movies);

// // console.log(removedMovies);

// removedMovies = movies.splice(1, 0, 'The Sting');
// // This starts at element 1 and does not remove anything, but adds The Sting.
// // removedMovies => []
// // movies => ['Spaceballs', 'The Sting', 'Alien']

// console.log(removedMovies);
// console.log(movies);

// let movies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];

// let middleMovies = movies.slice(1,3);
// // middleMovies => ['Interstellar', 'Scarface']
// // movies => ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places']

// console.log(movies);
// console.log(middleMovies);
// console.log(movies);

// let movies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];

// let myMovie = movies.at(2); // 'Scarface'
// let myMovie2 = movies.at(-2); // 'Scarface'

// console.log(myMovie);
// console.log(myMovie2);

// let movies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];

// movies.reverse(); // ['Trading Places', 'Scarface', 'Interstellar', 'Caddyshack']
// console.log(movies);

// let numArray = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ];

// console.log(numArray.flat());
// console.log(numArray.flat(2));

// let numArray = [4, 8, 1, 0, -14, 22, 77, 1388, 20];
// let movies = ['Shrek', 'Caddyshack', 'Batman', 'Interstellar', 'Scarface', 'Spaceballs', 'Alien', 'The Count of Monte Cristo'];

// numArray.sort(); // [-14, 0, 1, 1388, 20, 22, 4, 77, 8]
// movies.sort(); // ['Alien', 'Batman', 'Caddyshack', 'Interstellar', 'Scarface', 'Shrek', 'Spaceballs', 'The Count of Monte Cristo']

// console.log(numArray);
// console.log(movies);
// let movies = ['Shrek', 'Caddyshack', 'Batman', 'Interstellar', 'Scarface', 'Spaceballs', 'Alien', 'The Count of Monte Cristo'];

// let batmanIndex = movies.indexOf('Batman'); // 2
// console.log(batman);

// let movies = ['Shrek', 'Caddyshack', 'Batman', 'Interstellar', 'Scarface', 'Spaceballs', 'Alien', 'The Count of Monte Cristo'];

// const result = movies.forEach((movie) => {
// 	console.log(movie + ' is sooooo good!');
// });

// console.log(result);
// let movies = ['Shrek', 'Caddyshack', 'Batman', 'Interstellar', 'Scarface', 'Spaceballs', 'Alien', 'The Last Airbender', 'The Count of Monte Cristo'];

// // const result = movies.forEach((movie, i) => {
// // 	console.log(i + ') ' + movie);
// // });

// // console.log(result);

// for (let movie of movies) {
// 	if (movie === 'The Last Airbender') continue;
// 	console.log(movie);
// }

// const vehicle = {
// 	color: "blue",
// 	hp: 4000,
// 	year: 1989,
// 	"active registration": true
// }

// vehicle.color = "red"; // changing an existing property value
// vehicle.make = "Audi"; // adding a new key:value pair
// delete vehicle["active registration"]; // removing an existing property

// console.log(vehicle); // {color: 'red', hp: 4000, year: 1989, make: 'Audi'}

// let myMovies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];
// let yourMovies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];

// console.log(myMovies == yourMovies); // false

// const vehicle1 = {
// 	color: "blue",
// 	year: 1989,
// 	make: "Audi",
// 	engine: {
// 		cylinders: 6,
// 		hp: 4000,
// 		size: 3.2
// 	}
// }

// const vehicle2 = {
// 	color: "blue",
// 	year: 1989,
// 	make: "Audi",
// 	engine: {
// 		cylinders: 6,
// 		hp: 4000,
// 		size: 3.2
// 	}
// }

// console.log(vehicle1 == vehicle2); // false
