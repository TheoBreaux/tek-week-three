////////////////////////////////
// Easy Going
////////////////////////////////
for (let i = 1; i <= 20; i++) {
  //   console.log(i);
}

////////////////////////////////
// Get Even
////////////////////////////////
for (let i = 2; i <= 200; i += 2) {
  if (i % 2 === 0) {
    // console.log(i);
  }
}
////
////////////////////////////
// Fizz Buzz
////////////////////////////////

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    // console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    // console.log("Fizz");
  } else if (i % 5 === 0) {
    // console.log("Buzz");
  } else {
    // console.log(i);
  }
}

////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

plantee[2] = 5001;
// console.log(plantee);

wolfy[3] = "Gotham City";
// console.log(wolfy);

dart[4] = "Hawkins";
// console.log(dart);

wolfy.splice(0, 1, "Gameboy");
// console.log(wolfy);

////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

const turtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (const turtle of turtles) {
  // console.log(turtle.toUpperCase());
}

////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = [
  "Jaws",
  "The Fellowship of the Ring",
  "Howl's Moving Castle",
  "Django Unchained",
  "Cloud Atlas",
  "The Usual Suspects",
  "Toy Story",
  "Conan the Barbarian",
  "Titanic",
  "Harry Potter",
  "Fried Green Tomatoes",
  "Volver",
  "Oculus",
  "Seven",
  "Black Panther",
  "Harry Potter",
  "Imitation of Life",
  "Snatch",
  "Fast and Furious",
];

// console.log(favMovies.indexOf('Titanic'));

// console.log(favMovies.sort());

// console.log(favMovies.pop());
// console.log(favMovies.push("Guardians of the Galaxy"));
// console.log(favMovies);

// favMovies.reverse();
// console.log(favMovies);

// console.log(favMovies.shift());
// console.log(favMovies.unshift());

// favMovies.splice(favMovies.indexOf("Django Unchained"), 1, "Avatar")

// console.log(favMovies.slice(favMovies.length/2));

const slicedMovies = favMovies.slice(favMovies.length / 2);
// console.log(slicedMovies);

// console.log(favMovies.indexOf('Fast and Furious'))

////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],

  ["Petunia", ["Baked Goods", "Waldo"]],
];

whereIsWaldo.splice(1, 1);

whereIsWaldo[1][2] = "No One";

// console.log(whereIsWaldo[2][1][1]);

////////////////////////////
// Excited Kitten
////////////////////////////////

const catSpeak = [
  "...human... why you taking pictures of me...?",
  "...the catnip made me do it...",
  "...why does the red dot always get away...?",
];

// const randomCatSpeak = Math.floor(Math.random() * 2 + 1);
// console.log(randomCatSpeak);

for (let i = 1; i <= 20; i++) {
  const randomCatSpeak = Math.floor(Math.random() * 3);
  if (i % 2 === 0) {
    // console.log(i, catSpeak[randomCatSpeak]);
  } else {
    // console.log(i);
  }
}

////////////////////////////
// Find the Median
////////////////////////////////
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

const sortedNumsLength = nums.sort();
console.log(sortedNumsLength);

const medValue = Math.floor(sortedNumsLength.length/2);

console.log(medValue);





////////////////////////////
// Hungry for More?
////////////////////////////////



////////////////////////////
// Alien Attire
////////////////////////////////



////////////////////////////
// Dress Us Up
////////////////////////////////



////////////////////////////
// Dirty Laundry
////////////////////////////////



////////////////////////////
// Inventory
////////////////////////////////
