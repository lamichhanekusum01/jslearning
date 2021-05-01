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
console.log(age1,age2);