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
/* 
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
} */
/* 
//coding challange

const calcTip =function (billAmount)
{
    return billAmount >=50 && billAmount<=300 ?billAmount * 0.15 :billAmount*0.2;
}

const billAmount =[125,555,44];
const tip =[calcTip(billAmount[0]),calcTip(billAmount[1]),calcTip(billAmount[2])];
console.log(billAmount,tip);

const total = [billAmount[0]+tip[0],billAmount[1] + tip[1] ,billAmount[2] + tip[2] ];
console.log(total); */
/* 
//OBJECT
  

const kusum ={
    firstName: 'kusum',
    lastName :'lamichhane',
    age:2078-2055,
    job: 'developer',
    friends:['kusum','joshna','preety']

};
console.log(kusum);
console.log(kusum.lastName);
//bracketsnotation
console.log(kusum['lastName']);

const nameKey ='Name';
console.log(kusum['first'+nameKey]);
console.log(kusum['last'+nameKey]);
 *//* 
const kusum ={
   firstName: 'kusum',
   lastName :'lamichhane',
   birthYear:2055,
   job: 'developer',
   friends:['kusum','joshna','preety'],
   hasDriversLicense:true,
      calcAge: function() 
{
   this.age = 2078-this.birthYear;
   return this.age;
},
getSummary:function()
{
   return ` ${this.firstName} is a ${this.calcAge()} years old , and he has ${this.hasDriversLicense? 'a': 'no'} drivers licences`
}
};

console.log(kusum.calcAge());
console.log(kusum.age);

console.log(kusum.getSummary()); */
//coding challange
const mark = {
    fullName: 'mark miller',
    mass:78,
    height: 169,
    calcBMI: function () {
        this.Bmimark = mark.mass / (mark.height * mark.height);
        return this.Bmimark;
    }
};
const john = {
    fullName: 'john smith',
    mass: 92,
    height: 195,
    calcBMI: function () {
        this.Bmijohn = john.mass / (john.height * john.height);
        return this.Bmijohn;
    }
};

 console.log(mark.calcBMI());

if(this.Bmimark>this.Bmijohn)
{
    console.log(`${mark.fullName} has bmi of ${mark.calcBMI()} is higher than ${john.fullName} bmi of ${john.calcBMI()}`);
}
else{
   console.log(`${john.fullName} has bmi of ${john.calcBMI()} is higher than ${mark.fullName} bmi of ${mark.calcBMI()}` );
};

