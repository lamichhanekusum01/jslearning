/* 'use strict';
let hasDriversLicense = true;
const passTest = true;


if(passTest) hasDriversLicense =true;
if (hasDriversLicense) 
console.log('I can drive ');

//const interface =audio; //private or resererved codes 


// function 

function fruitJuice (apple , orange)
{
    console.log(apple,orange);
    const juice = `juice with ${orange} oranges and ${apple} apples`;
    return juice ;
}
const FirstJuice = fruitJuice(1,2);
console.log(FirstJuice);
const SecondJuice = fruitJuice(5,8);
console.log(SecondJuice); */

/* 

//function decleration
function calcAge1(birthYear)
{
    
    return 2037-birthYear;
}
const age1 = calcAge1(1999);

//ananomous function
const calcAge2 =function (birthYear)
{
    return 2037-birthYear;
}
const age2 =calcAge2(1998); 
console.log(age1,age2); */

/* //ARROW FUNCTION
 const calcAge3 = birthYear => 2021-birthYear;
 const age3 = calcAge3(1999);
 console.log(age3);

 /* const yearUntileRetirement = (birthYear,firstName) => {
     const age =2037 -birthYear;
     const retirement =65 -age;
     return `${firstName} retires in ${retirement} years`;

 }
 console.log(yearUntileRetirement(1999, 'kusum'));
 console.log(yearUntileRetirement(2005, 'hardik')); */
/* function cutfruitPieces(fruit)
{
    return fruit * 4;
}
function fruitProcessor (apples,oranges)
{
    const applePieces = cutfruitPieces(apples);
    const orangePieces = cutfruitPieces(oranges);
    const juice = `juice with ${applePieces}  apples and ${orangePieces} oranges.`;
    return juice;
    

}
console.log(fruitProcessor(2,3));
*//* 

const calcAge =function(birthYear)
{
    return 2021-birthYear;
}

const yearUntilRetirement = function(birthYear,firstName)  {
   const age =calcAge(birthYear);
   const retirement =65 -age;
   if(retirement >0) 
   {
       console.log ( `${firstName} retires in ${retirement} years`); 
return retirement;
}
else
{
   return -1;
} 
   // return `${firstName} retires in ${retirement} years`;
 
}
console.log(yearUntilRetirement( 1999)); */
/* //CODINGCHALLANGE

const calcAverage = (a, b, c) => (a + b + c) / 3
const scoreDolphine = calcAverage(44, 23, 71);
const scoreKolas = calcAverage(65, 54, 49);
console.log(scoreDolphine, scoreKolas );

const checkWinner = function (avgDolphine, avgKoalas) {
    if (avgDolphine >= 2 * avgKoalas) {
        console.log(`Dolphines wins 🥇 (${avgDolphins} vs. ${avgKoalas})`);
    }
    else if (avgKoalas >= 2 * avgDolphine) {
        console.log(`kolas wins🥇 (${avgKoalas} vs. ${avgDolphins})`);
    }
    else{
        console.log(` 😜noone wins`);
    }
}
checkWinner(scoreDolphine,scoreKolas );


 */


/* //ARRAY
const friends =['kusum', 'joshna','preety'];
console.log(friends);
console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length-1]);
friends[2]='hareram';
console.log(friends);

firstName ='kusum';
const myDetails = [firstName ,'lamichhane',2021-1999,friends];
console.log(myDetails);


const calcAge = function (birthYear)
{
    return 2021 - birthYear;
}
const years =[1997,1998,1957,1965];
const age1 = calcAge(years[0]);
const age2 =calcAge(years[1]);
const age3 =calcAge(years[years.length-1]);
console.log(age1,age2,age3);

const ages = [calcAge(years[0]),calcAge(years[1]), calcAge(years[years.length-1])];
console.log(ages); */

const friends =['kusum','joshna','peter'];
//ADD ELEMENT
const newLength =friends.push('utsav');

console.log(friends);
console.log(newLength);
friends.unshift('kusum');
console.log(friends);
//REMOVE THE ELEMENTS
friends.pop();
const popped =friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('kusum'));
console.log(friends.indexOf('joshna'));

console.log(friends.includes('kusum'));
console.log(friends.includes('unika'));
if (friends.includes('unika'))
{
    console.log('you have a friend called kusum');
}
else{
    console.log('you dont have any friend named so ');
}