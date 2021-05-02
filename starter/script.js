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
 */

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
console.log(yearUntilRetirement( 1999));