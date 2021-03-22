/*let js='amazing';
        if (js==='amazing') alert('my fist js code is here');         
          console.log(10+15-4*8);
          console.log("kusum");
          console.log(15+25-9);


        //variable defining

        //variable name start with small letters 

let firstName= "kusum";
console.log(firstName);
console.log(firstName);

//boolean 
 javascriptIsFun=true;
 console.log(javascriptIsFun);
 console.log(typeof true);
 console.log(typeof 23);
 console.log('jonas');


 //dynamic typing --> easly changing the typle of value holded by variable


 javascriptIsFun ='YES!';
 console.log(typeof javascriptIsFun);

 

*/
/*//decelering variable in js
 //let ,const== ES6 ma aako  and var(old way)

 //let can be change later -->for emptylai pani let use garne
 let age =20;
 age =30;//mutaed
 console.log(age);


 //value in const is never changed 
 const birthYear =1999;
 birthYear=1990;  


 //const halda first mai value hunu parcha
 //var is old and work as let 

 var job ='programmer';
 job='techer';

 lastName ='lamichhane';
 console.log(lastName);
*/
/*
 //basic operators in js

 //mathmatical , assigiment , logical,  arithmetical
 //mathmetical
 const now = 2020;
 const ageKusum = now - 1999;
 const ageUnika = now - 1996;
 console.log(ageKusum, ageUnika);
 console.log(ageKusum*2,ageUnika/10);
 
 
 //FOR PLUS OPERATORS[TO CONATINATE TWO VARIABLES]
 const firstName='kusum';
 const lastName='lamichhane';
 console.log(firstName+' '+lastName);
*/

//assignment operator
// is equal sign
/*
 let x = 10+6;
 x += 10;
 x*=4;
 x++;
 x--;
 x--;
 console.log(x);


 //comprasion operators

 const now = 2020;
 const ageKusum = now - 1999;
 const ageUnika = now - 1996;
 console.log(ageKusum, ageUnika);

 

 console.log(ageKusum> ageUnika);
 console.log(ageKusum>=21);

 const isFullAge = ageKusum 

 //string templetes
 const firstName ='jonas';
 const job ='teacher';
 const birthYear= 1999;
 const year =2037;
 const jonas ="I'm"+ firstName  + ' , a ' + (year-birthYear)+ 'years old' + job + '!';

//templete string concept
 console.log(jonas);
 const jonasNew =` I'm ${firstName}`;
 console.log(jonasNew);
*/
/*
//MULTIPLE LINE
console.log('this is a " \n\ "multiple " \n\   line ');
*/

//IF ELSE
//const age=16;
/*
 
if (age>=18) {
 console.log('unika can have driving license');

 
}
else
{
 const yearsLeft =18-age;

 console.log(`unika can have driving license , go ahead in ${yearsLeft}  years `);
}

/n/

const birthYear=1991;
let century;
if (birthYear<=2000){


century =20;
}
else{
  century =21;

}
console.log(century);
*/

//coding challange
/*
const massMark=78;
const heightMark =1.188;
const massJohn=85;
const heightJohn =1.76;

const BMIMark = massMark/heightMark**2;
const BMIJohn =massJohn/(heightJohn *  heightJohn);
console.log(BMIMark,BMIJohn);

if (BMIMark>BMIJohn) {
  console.log("mark's bmi is heigher tan john's !")
}
else{
  console.log("john's BMI is heigher than John's !")
}
*/

//eqaulity operators


/*  const age = 18;
if (age ===18)
console.log("you just become an adult(strict)");
if (age ==18)
console.log("you just become an adult(loose)");
 
const favroite = Number(prompt("what is your favrioute number"));
console.log(favroite);
console.log(typeof favroite);
if(favroite===23)
{
  console.log('cool! 23 is an amazing number');

}
else if(favroite===7){
    console.log("7 is also an amazing number ");

}
else{
  console.log("both are not either 7or 23");
}
*/
//BOOLEAN LOGIC

/* and ->  true ,false false ,false
or-> true, true , true , false
*/
//LOGICAL
/* const hasDriverLicense = true;
const hasGoodVision = true;
console.log(hasGoodVision
  ||  hasDriverLicense);
console.log(hasDriverLicense && hasGoodVision);
console.log(!hasDriverLicense );


const isTired = true ;
console.log(hasDriverLicense && hasGoodVision && isTired);
if (hasDriverLicense && hasGoodVision && isTired)
{
  console.log ("sarah is able to drive !");
}
else{
  console.log("someone else should drive ");
} */


//CODING CHALLAGEE
/* const dolphine = 96 + 108 + 89 ;
 const koalas = 88 + 91 + 110 ;
 const averagedolphine =(dolphine)/3 ;
  const averagekoalas =(koalas)/3 ;
 console.log( "the average score  of team dolphine is " + averagedolphine);
 
 console.log( "the average score  of team koalas is " + averagekoalas);
{
 if (averagedolphine > averagekoalas){
   console.log("winner team is dolphine with average score with" + averagedolphine );
 }
       else if (averagekoalas>averagedolphine)
       {
        console.log("winner team is koalas with average score with" + averagekoalas );
   }
  else if ( averagedolphine === averagekoalas )
   {
     console.log(" the match is draw ");
    }
  } */
//SWITCH STATEMENTS
const day = 'wednesday';
switch (day) {
  case 'monday':
    console.log('plan course structure');

    console.log('go to coding meeting');
    //break;

  case 'tuesday':
    console.log('prepare theory videoes');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
  case 'friday':

    console.log('record videoes');
  case 'saturday':
  case 'sunday':
    console.log('enjoy weekend');
    break;
  default:

    console.log('Not valid day ');
}