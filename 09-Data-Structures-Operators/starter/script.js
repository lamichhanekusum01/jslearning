'use strict';

// Data needed for a later exercise
//const flights =
// '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto', 'momo'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 25,
    },
  },

  order: function (starterIndex, mainIndex) {
    return this.starterMenu[starterIndex], this.mainMenu[mainIndex];
  },
  orderDelivery: function ({ time, address, mainIndex, starterIndex }) {
    console.log(`
      order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta made of ${ing1},${ing2},${ing3}`);
  },
  orderPizza: function (mainIngredients, ...otherIngridents) {
    console.log(mainIngredients);
    console.log(otherIngridents);
  },
};
restaurant.orderDelivery({
  time: '11.06PM',
  address: 'mulpani',
  mainIndex: 2,
  starterIndex: 2,
});
const { openingHours, name, categories } = restaurant;
console.log(openingHours, name, categories);
//can be givern new variable name
const { openingHours: hours, name: resturant, categories: tags } = restaurant;
console.log(resturant, tags, hours, tags, hours, restaurant);
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu.starters);
//mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 77 };
({ a, b } = obj);
console.log(a, b);
//nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(open, close);
/* const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const [x, y, z] = arr;
console.log[(x, y, z)];

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary);
console.log(restaurant.order(1, 3));

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k); */

const arr = [2, 3, 4];
const newArray = [1, 5, 7, ...arr];
console.log(newArray);

const newArr = [...arr, '5', '6'];
console.log(newArr);
const NewMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(NewMenu);

//iterables
const str = 'kusum';
const letters = [...str, ' ', 'm.'];
console.log(letters);

const ingredients = [
  //prompt('ingredient 1'),
  //prompt('ingredient 2'),
  //prompt('ingredient 3 '),
];
console.log(ingredients);
restaurant.orderPasta[(ingredients[0], ingredients[1], ingredients[2])];
restaurant.orderPasta(...ingredients);
//objects
const newResturant = { foundeIN: 1999, ...resturant, funder: 'kusum' };
console.log(newResturant);
//REST PATTERN
const array = [1, 2, ...[4, 5]];
const [d, e, ...others] = [1, 2, 3, 4, 5];
console.log(d, e, others);
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
//FUNCTIONS
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(2, 6, 3);
add(2, 6, 9, 3);
const x = [25, 256, 32];
add(...x);

restaurant.orderPizza('mushroom', 'spanich', 'mucur');
restaurant.orderPizza('mushroom');
//short circuting
//use any data types , return any datta type
console.log(3 || 'jonas');
console.log('' || 'jonas');
console.log(true || 0);
console.log(undefined || 'null');
console.log(undefined || 0 || '' || 'hello' || 23);
restaurant.numGuest = 0;
const guess1 = restaurant.numGuest ? restaurant.numGuest : 1;
console.log(guess1);
const guests2 = restaurant.numGuest || 10;
console.log(guests2);
console.log('........AND.........');
console.log(0 && 'kusum');
console.log('hello' && 23 && null && 'kusum');
console.log(7 && 'kusum');
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'salad');
}
restaurant.orderPizza && restaurant.orderPizza('mushroom', 'salad');
