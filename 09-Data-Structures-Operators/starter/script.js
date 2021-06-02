'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant =0`{
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
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return this.starterMenu[starterIndex], this.mainMenu[mainIndex];
  },
  orderDelivery: function ({ time, address, mainIndex, starterIndex }) {
    console.log(`
      order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
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
