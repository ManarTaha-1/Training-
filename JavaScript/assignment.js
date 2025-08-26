// assignment 1
document.write('<h1 style="color: blue; font-size: 80px; font-weight: bold; text-align: center; font-family: Arial;">Elzero</h1>');
console.log("%cElzero %cWeb %cSchool", "color: red; font-size: 40px", "color: green; font-size: 40px; font-weight: bold; " ,"background-color: blue; color: white; font-size:40px");
console.log("%cManar" , "color: yellow; font-weight: bold ; font-size: 30px; ") ;
console.table(["Elzero", "Ahmed", "Sameh", "gamal"]);
console.group('Group 1');
console.log("Message One");
console.log("Message Two");
console.group('Child Group');
console.log("Message One");
console.log("Message Two");
console.group('Grand Child Group');
console.log("Message One");
console.log("Message Two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group('Group 2');
console.log("Message One");
console.log("Message Two");
console.groupEnd();
let theTitle="Elzero" , theDesc="Elzero Web School" , theDate="25/10";
let cardContent=` <div class="card" ><h3> Hello ${theTitle}</h3>
<p> ${theDesc}</p>
<span> ${theDate} </span>
</div>`;
document.write( `${cardContent} ${cardContent} ${cardContent} ${cardContent}` );
// assignment 2
let numberOne=10;
let numberTwo=20;
console.log(""+numberOne + numberTwo);
console.log(typeof(""+numberOne + numberTwo));
console.log(`${numberOne}${numberTwo}`); //Template Literals
console.log(typeof`${numberOne}${numberTwo}`); //Template Literals
console.log(numberOne+"\n"+numberTwo);
console.log(`${numberOne}
${numberTwo}`);//Template Literals
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object
console.log("`I'm In"+"\n"+"\\\\"+"\n"+"Love \\\\ \"\"\" \'\'\'"+"\n"+"++ With ++"+"\n"+"\\\"\"\\\"\\\"\"\""+"\n"+"\"\"JavaScript\"\"\`\`");
let a = 21;
let b = 20;

console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}`); // _21_2021_2021_2021_20_
// assignment 3
// Replace ? With Arithmetic Operators
console.log(10 * 20 * 15 % 3 * 190 * 10 * 400); // 0
let num = 3;
// Solution One
console.log(num+num); // 6
// Solution Two
console.log(num*(true+true)); // 6
// Soultion Three
console.log(num* Number(true+true)); // 6
// Soultion Four
console.log(num+num); // 6
// Solution Five
console.log(++num +true +true); // 6
// Solution Six
console.log(num +true +true); // 6
console.log(Number.isInteger(10)+Number.isInteger(10)); // 2
let flt = 10.4;

console.log(parseInt(flt)); // 10
console.log(flt.toFixed()); // 10
console.log(Math.round(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.random()*4); // 0 || 1 || 2 || 3 || 4