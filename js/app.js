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


let x = 30;

while (x > 0) {
	x /= 2;
	x--;

	if (x % 1 != 0) {
		break;
	}
	
	console.log(x);
}


