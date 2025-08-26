// window.alert("Hello JavaScript");

// const { decl } = require("postcss");

// we use alert rarely because it might break the code
document.write("<h2> Hello JavaScript </h2>");
console.log("hell0");   //this message will appear in console
// ممكن افتح ال console علطول عن طريق ctrl shift i
console.log("hello form %cjs file", "color: green ; font-size: 30px");
// directive c  %c ممكن نستخدمها اكتر من مرة 
// console is web api
// ES6 Ecma Script 6 هي عبارة عن معايير اللي بتمشي اللغة عليها وبتتطور كل سنة
//  ورقم ستة ده يعني الاصدار السادس
//  اللي تم انشاؤه في 2016 بتسهل اللغة
//  علينا اكتر وكمان بتوفر مكان لاكواد كتيرة 
// وكمان هي بتحاول تقرب المعايير او الشكل بتاع اللغة
// لغات التانية بحيث ميبقاش في صعوبة في التنقل بين اللغات
// او دراسة اكتر من لغة في وقت واحد
console.log(typeof "manar taha"); 
console.log("#".repeat(10));
// هنا هيطلع نوع الكلام اللي انا دخلتهوله 
/*
data types  :----
string 
number  (double or float)
array => object
object 
boolean
*/
/*
variable syntax(keyword | variable name | assignment operator | variable value)
*/
var user ="Manar", 
age = 19;
console.log(user);
console.log(age);
var user="Ahmed"; //redeclare
console.log(user); //redeclare
let userr =  "Manar"; //redeclare
/*camelCase identifire like java*/
/* 
var 
 -redeclare (Yes)
 -access before declare (undefined)
 -variable scope [added to window] (ده بيتضاف للويندو وده غلط )
 -block or function scope
 
let
 -redeclare (no => error)
 -access before declare (error)
 -variable scope [added to window] (ده لا )
 -block or function scope
const
 -redeclare (no => error)
 -access before declare (error)
 -variable scope [added to window] (ده لا )
 -block or function scope

*/

let q = 100;
q < 10
  ? console.log(10)
  : q >= 10 && q <= 40
  ? console.log("10 To 40")
  : q > 40
  ? console.log("> 40")
  : console.log("Unknown");
console.log("#".repeat(10));

console.log('Elzero Web "School"');    //true
console.log("Elzero Web 'School'");   //true
console.log("Elzero Web \"School\"");   //true هنا هيتعامل مع ("")كأنهم 
//نص عادي ومش هيعمل error
// (\) اسمه escape character and line continue
console.log("Elzero\
 Web  \
    School")
console.log("Elzero\nWeb\nSchool")
let a="We Love";
let b="JavaScript";
let c="And";
let d="Programming"; 
// formating in ES6 teplate literals (template strings)
console.log(`${a} ${b}
    "" ''' \\\\ ${c} ${d}`)
    console.log(typeof NaN); //ودي بتظهر لما 
console.log("#".repeat(10));

//اطرح رقم من سترينج والعكس لانه مينفعش وهي اختصار ل 
//Not a Number
// (**) => معناها اس 
/*
 +unary plus [return number if it is not number]
 -unary Negation [return number if it is not number + negates it]
 --=+ نفي النفي اثبات 
 Number() لو حطيت دبل كوتس وجواهم رقم يعني
  سترينج داخل الاقواس
  هيحوله لرقم ودي 
 طريقة تانية
     */

 //type coercion 
 console.log("10" + 20 + true);
 console.log(+"10" + 20 + true);
 //هام الفرق بينهم
 let s="Elzero Web school";
 console.log(s.split(""));
 console.log(s.split("o"));
 console.log(s.split(" "));
 console.log(s.split("l"));
 console.log(s.slice(2,4));
 console.log(s.slice(-4)); // [يجيب اخر اربعة]
 console.log(s.repeat(2));
 console.log(s.substring(6,2));//عادي هيبدلهم هو
 console.log(s.substring(2,6));//نفس نتيجة اللي فوقهم
 console.log(s.substring(-2));//هيبدأ من الصفر لانه اصغر منه فهيعتبره صفر
 console.log(s.substr(-3));
//logical or|| nullish coalescing operator ??
let theprice=0;
 console.log(`the price = ${theprice||300}`);
 theprice=null;
 console.log(`the price = ${theprice||300}`);
 theprice;
 console.log(`the price = ${theprice||300}`);
theprice=0;
 console.log(`the price = ${theprice??300}`);
 theprice=null;
 console.log(`the price = ${theprice??300}`);
 theprice;
 console.log(`the price = ${theprice??300}`);
 let day= 2; 
 switch(day){
    case 0:
        console.log("Saturday");
        break;
    case 1:
    case 2:
        console.log("Sunday");
        break;
    case 3:
        console.log("Monday");
        break;
    default:
        console.log("Unknown Day");
        break;
 }
 let friends=["Ahmed", "Mohamed", "Ali", "Hassan"];
 console.log(`${friends[0][0]}`);//هنا هيجيب اول حرف من اول اسم
 console.log(Array.isArray(friends)); //true
 console.log(friends);
 friends.unshift("Hossam"); //add to the first
 console.log(friends);
 friends.push("Hossam"); //add to the last     
    console.log(friends); 
friends.shift(); //remove from the first
console.log(friends);
friends.pop(); //remove from the last
console.log(friends);
//لو عملت slice مش هيغير اي حاجة في الاراي هيظهر ارايز جديدة والاراي الاصلية هتفضل زي ما هي 
//لكن لو عملتي splice هيغير في الاراي الاصلية
friends.splice(1, 2 , "Hassanen","hend");
console.log(friends); // ["Ahmed", "Hassanen", "hend"]
let products=["Mouse","Keyboard", "Monitor", "CPU","Printer", "Speaker"];
let colors=["Red", "Green", "Blue", "Black"];
let count=5;
    document.write(`<h2 style="color: rgb(100, 0, 200); font-weight: bold; font-size: 30px;"> We have ${count} products</h2>`);
for(let i=0 ; i<count ; i++){
    document.write(`<div>`);
    document.write(`<h3> ${i+1} - ${products[i]}</h3>`);
    for(let j=0 ; j<colors.length ; j++){
        document.write(`<span style="color: ${colors[j]}; font-weight: bold; font-size: 20px;"> ${colors[j]} </span>`);
    }
    document.write(`</div>`);
}
function calc(...numbers){
    console.log(Array.isArray(numbers)); //true
    let sum=0;
    for(let i=0 ; i<numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}
console.log(calc(10, 20, 30, 40)); //100
console.log(calc(10, 20, 30, 40, 50, 60)); //210
function showdetails(name, age , hired){
    if(typeof name == "string" && typeof age === "number" && typeof hired === "boolean"){
        console.log(`Name: ${name} , Age: ${age} , Hired: ${hired}`);
    }
    else if(typeof name == "number" && typeof age === "string" && typeof hired === "boolean"){
        console.log(`Name: ${age} , Age: ${name} , Hired: ${hired}`);
    }
    else if(typeof name == "boolean" && typeof age === "number" && typeof hired === "string"){ 
        console.log(`Name: ${hired} , Age: ${age} , Hired: ${name}`);
    }
    else if(typeof name == "boolean" && typeof age === "string" && typeof hired === "number"){ 
        console.log(`Name: ${age} , Age: ${hired} , Hired not available: ${name}`);
    }
}
showdetails("Manar", 19, true);
showdetails(19, "Manar", true);     
showdetails(true, 19, "Manar");
showdetails(false, "Manar", 19);
//arrow function
let print = _ => 10;
console.log(print()); //10
let printt = ()=>{
    return 10;
}
console.log(printt()); //10

 let friendss=["Ahmed", "Mohamed", "Ali", "Hassan"];
let filteredfriends = friendss.filter(function(friend){
    return friend.startsWith("A");
}).join(",");
console.log(filteredfriends); //Ahmed,Ali
let mapping=friendss.map(function (ele){
    return `Hello ${ele}`;
}).join(",");
console.log(mapping); //Hello Ahmed,Hello Mohamed,Hello Ali,Hello Hassan

console.log("#".repeat(10));


let userName="name";
let userInfo={
    name: "John",
    age: 30,
    "isAdmin":true,
    skills: {
        html:40,
        css: 70,
    },
    sayHello: function(){
        console.log(`Hello ${this.name}`)
    }
};

//destructuring object
let {name:na, age:ag , skills:{html} } = userInfo;
console.log(na); //John
console.log(ag); //30
console.log(html); //40

console.log(userInfo.name);
console.log(userInfo.age);
console.log(userInfo["age"]);
console.log(userInfo["isAdmin"]); //true
userInfo.sayHello();
console.log("#".repeat(10));

/*Bom browser object model
alert(message) => Need no responde only ok available
confirm(message) => need response and return a boolean
prompt(message, default message) => collect data
*/
// window.alert("hahahaha");
// alert("new alert");
// this.alert("weeeeeeeeeee");
// let confirmmsg=confirm("are you okay?");
// console.log(confirmmsg);
// let promptmsg = prompt("hello","Good Day to you?");
// console.log(promptmsg);

// setTimeout(() => {
//     console.log(`I am message`);
// }, 3000);

// setTimeout(sayHello,3000);
// function sayHello(){
//     console.log(`Hello User `);
// }

// let counter = setInterval(sayHellHello,4000);
//     function sayHellHello (){
//         console.log("Hello Hello");
//     }

// clearInterval(counter);

// console.log(location);
console.log(location.href);
// location.href="https://google.com";
// location.href="/#sec02";
// location.href="https://اي لينك خارجي";


console.log(location.host);//اسم + port
console.log(location.hostname);//اسم بس
console.log(location.pathname);//الصفحة اللي انا فيها   
console.log(location.protocol);//https or http

// location.replace("https://google.com");//replace my page to google
//locatoin.assign("https://google.com");//open google in new tab وبيحفظه في الهيستوري على عكس الريبلاس
//window.close();//you can close only the page you openned with window.open()


/*setTimeout(function(){
    // window.open("https:google.com " , "_blank //default" , "width=400, height=400 , left=200 , top=100 without px");
}, 2000);*/

// console.log(history);
// history.back(); //بيرجع خطوة لورا
// history.forward();//بيطلع خطوة لقدام
// history.go(); // لو الرقم داخل الاقواس موجب بيطلع لقدام لو سالب بيرجع لورا
console.log("#".repeat(10));


//destructuring array
let l = 1;
let m = 2;
let n = 3;
let o = 4;
let p = 5;

let myFriends = ["Awatef" , "Manar", "Malak", "Mariam"];

[l="LLL",m,n,o] = myFriends;

console.log(l);
console.log(m);
console.log(n);
console.log(o);
console.log(p);

let [h,,,i]=myFriends;
console.log(h);
console.log(i);


let myFamily = ["Ahmed" , "Amgad" , ["Ali" , "Hesham",["Maged" , "Mazen"]]];
console.log(myFamily[2][2][1]);

//destructuring object

const User= {
    theName: "Manoura",
    theAge: "20",
    skills :{
        html: 90 ,
        css:88 ,
    }
};

function showInfo(obj){
    console.log(obj.theName);
    console.log(obj.theAge);
    console.log(obj.skills.css);
}
showInfo(User);
//desturcturing Challenge
let chosen=3; // Change The Value To 1, 2, or 3
let myFriendss=[
  {title: "Osama" , age: 39 , available: true , skills: ["html" , "css"]},
  {title: "Ahmed" , age: 25 , available: false , skills: ["python" , "django"]},
  {title: "sayed" , age: 33 , available: true , skills: ["php" , "laravel"]},
];

let [{title:tit1 , age:ag1 , available:av1 ,skills:sk1},
  {title:tit2 , age:ag2 , available:av2 ,skills:sk2},
  {title:tit3 , age:ag3 , available:av3 ,skills:sk3}]=myFriendss;
if(chosen==1){
  console.log(tit1);
  console.log(ag1);
  console.log(av1="available");
  console.log( sk1[1]);
}else if(chosen==2){
  console.log(tit2);
  console.log(ag2);
  console.log(av2="available");
  console.log( sk2[1]);
}else if(chosen==3){
  console.log(tit3);
  console.log(ag3);
  console.log(av3="available");
  console.log( sk3[1]);
}


console.log("#".repeat(10));



//set data type
let myData=[1,1,1,2,3];//array تقبل بالتكرار
// let myUniqueData = new Set(myData);//set لا تقبل بالتكرار
// let myUniqueData = new Set([1,1,1,2,3]);//set لا تقبل بالتكرار
let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3);//set لا تقبل بالتكرار
console.log(myData);
console.log(myUniqueData);
console.log(myData[0]);//1
console.log(myUniqueData[0]);//undefiend => we can not access set elements with index 

console.log("#".repeat(10));
//set methods
//weak set store objects only


let mySet = new Set([1,1,1,2,3,"A"]);
console.log(mySet.has("a"));
console.log(mySet.has("a".toUpperCase()));
let iterator = mySet.keys();
console.log(iterator);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());//done true

//for each
mySet.forEach((el) => console.log(el));


//weak set operations
// let mywkst = new WeakSet([1,2,3,"a"]);//undefined => objects only
let obj1 = {name: "Manar" , age:20};
let obj2 = {name: "Hassan", age:25};
let mywkst = new WeakSet([obj1,obj2]);//objects only
console.log(mywkst);
//there is no prototype to know the size 
console.log(mywkst.has(obj1)); //true
console.log(mywkst.has(obj2)); //true

//weakSet use Cases search
console.log("#".repeat(10));

//object has default values but map no 
//map data type
let myMap = new Map();//تقبل اي داتا تايب 
myMap.set(10,"Number");
myMap.set("10","String");
let myObject = {
    10: "Number",
    "10": "String",
};
console.log(myObject);
console.log(myMap);


//map methods
console.log(myMap.has(10));//true
console.log(myMap.has("10"));//true
console.log(myMap.get(10));//"Number"
console.log(myMap.get("10"));//"String"
console.log(myMap.size);//2
myMap.delete(10);
console.log(myMap.has(10));//false
console.log(myMap.size);//1
myMap.clear();
console.log(myMap.size);//0


//map and weak map such as set and weak set
let myWeakMap = new WeakMap();
let obj3 = {name: "Manar" , age:20};
let obj4 = {name: "Hassan", age:25};
myWeakMap.set(obj3, "Object 1");
myWeakMap.set(obj4, "Object 2");
console.log(myWeakMap.has(obj3)); //true
console.log(myWeakMap.has(obj4)); //true
console.log(myWeakMap.get(obj3)); //Object 1
console.log(myWeakMap.get(obj4)); //Object 2
console.log(myWeakMap); 
console.log("#".repeat(10));
//map use cases search

//array function
let myArray = [1,2,3,4,5];
let myArray2 = myArray.map((el) => el * 2);
console.log(myArray2);
//from function
console.log(Array.from("12345", function(n){
    return n + n;
}));//return string
console.log(Array.from("12345", function(n){
    return +n + +n;
}));//return number
// from function arrow function with array
console.log(Array.from("12345" , (n) => +n + +n));
let myNewArray = [1,1,1,2,3,4];//how to get the unique numbers only in this array
let myNewSet = new Set(myNewArray);
console.log(Array.from(myNewSet));//return array with unique numbers onlyyyy
//another solution we will learn in the future
console.log([...new Set(myNewArray)]);

//array copy
let arr = [10,20,30,40,50,"A","B"]
// arr.copyWithin(3);//[10,20,30,10,20,30,40] with the same size
// arr.copyWithin(4,6);//[10,20,30,40,"B","A","B"] 
arr.copyWithin(1,-2,-1);//[10,"A",30,40,50,"A","B"] هنا انا عايزة A بس وبما ان not include end يبقى هعمل النهاية -1 اللي هو B بس هس مش هتبقى معانا 
console.log(arr);

//array some at least in one vlaue in array
let nums = [1,2,3,4,5,6,7];
let check = nums.some(function (e) {
    console.log("Test");//هتتطبع 6 مرات بس لان اول ما هتلاقي رقم اكبر من 5 بتتطلع ترو ومش بتكمل
    return e > 5 ;
});
console.log(check);


//array every must true in all values in array
const locations = {  //object
    20: "Place 1",
    30: "Place 2",
    10: "Place 3",
    40: "Place 4",
};
let mainLocation = 15;

let locationsArray = Object.keys(locations);
console.log(locationsArray);

let locationArrayNumbers = locationsArray.map((n=>+n));
console.log(locationArrayNumbers);

let checK = locationArrayNumbers.every(function (e){
    return e>this
}, mainLocation);
console.log(checK);


//spread operator => ...iterable
console.log("Manar");
console.log(..."Manar");
console.log([..."Manar"]);
//concatenat array
let array1 = [1,2,3];
let array2 = [4,5,6,];
let allArray = [...array1 , ...array2 ];
console.log(allArray);
//copy array
let copiedArray = [...allArray];
console.log(copiedArray);
//push inside array
let allFriends = ["Awatef", "Malak" ,"Mariam"];
let newFriends = ["abeer", "lola"];
allFriends.push(newFriends);//nested array
allFriends.push(...newFriends);//addition to the main array
//math.max()
let myNums=[100,2000,5000,-10000,8000];
console.log(Math.max(...myNums));//5000
//merge objects
let objOne = {
    a:1,
    b:2,
};
let objTwo = {
    c:3,
    d:4,
};

console.log({...objOne, ...objTwo , e:5});//new object

console.log("#".repeat(10));
//map and set challenge
//using * operator only
let n1 = [10,30,10,20];
let n2 = [30,20,10];
console.log(n1.map(function (n){ let sum = 0 ; sum = n* new Set(n2).size; let allsum = sum;  return (allsum);}));//210
// console.log(n1,(arc,arg));//210

//search method => regular expression
let myStr = "Hello Elzero web School I Love elzero";
let regEx = /Elzero/;
console.log(myStr.match(regEx)); //["Elzero", index: 6, input: "Hello Elaero web School I Love elzero", groups: undefined]
// i => case-insensitive the first 
// g => global all
// m => multilines
// returns null if no match is found
// tld => top level domain

let tld = "Com Net Org Info Code Io";
let tldRe = /(org|info|io)/ig;
console.log(tld.match(tldRe));

let numbs = "12345678910";
let numbsRe = /[0-9]/g;
console.log(numbs.match(numbsRe));

let notnumbs = "12345678910";
let notnumbsRe = /[^0-2]/g;
console.log(notnumbs.match(notnumbsRe));

let practice = "Os1 Os1Os Os2 Os8 Os8Os";
let practiceRe = /Os[5-9]Os/;
console.log(practice.match(practiceRe));

//email validation
let email = "O@@@...com o@g.com o@g.net A@y.com o-g.com 1@1.com";
let valid = /\w@\w.(com|net)/g;//all
console.log(email.match(valid)); 
 

//\b =>matches at the beginning or end of a word.

let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5";
let re = /(\bspam|spam\b)/ig;
console.log(names.match(re));

//test method pattern.test(input)

console.log(re.test(names));//true
console.log(re.test("Osama"));//false

let emails = "nl@oo.com  hm@kv.net hm@kv.org Manar@gmail.com Osama@mail.ru";
let emailsRe = /\w\w@\w\w.(com|net)/ig;
console.log(emails.match(emailsRe));

// \w+ => one or more
// \w* => zero or more
// \w? => zero or more

let accurateMalils = /\w+@\w+.\w+/ig;//all mails
console.log(emails.match(accurateMalils));


let myNumbs = "0110 10 150 05120 0560 350 00";//0 Numbers or no 0
let myNumbsRe = /0\d0/ig;
console.log(myNumbs.match(myNumbsRe));//null we want 0number0 and there is no 
console.log(myNumbs.match(/0\d+0/ig));//كل اللي قبله صفر وبعده صفر وجواه على الاقل رقم
console.log(myNumbs.match(/0\d*0/ig));//كل اللي قبله صفر وبعده صفر وجواه مفيش ارقام

let urls = "https://google.com http://www.website.net"; //http+https
let urlsRe = /https?:\/\/(www.)?\w+.\w+/ig; // it means : the letter s may be in the word or not 
console.log(urls.match(urlsRe));


let serials = "S100S S3000S S50000S S950000S";

console.log(serials.match(/S\d{3}S/ig));//S[Three Number]S
console.log(serials.match(/S\d{4,5}S/ig));//S[Four or Five number]S
console.log(serials.match(/S\d{4,}S/ig));//S[at Least Four]S

//quantifiers 
//$ = > end with something
//^ = > Start with something
//?= = > Followed by something
//?! = > not followed by something

let statement = "We Love Programming";
let theNames = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

console.log(/ing$/ig.test(statement));
console.log(/^we/ig.test(statement));
console.log(/^7/ig.test(theNames));
console.log(/^\d/.test(theNames));
console.log(/^\s/.test(theNames));//space


console.log(theNames.match(/\d\w{5}(?=z)/ig));
console.log(theNames.match(/\d\w{8}(?!z)?/ig));


//replace and replaceAll

let text="we Love @ and programing because @ is amazing";

console.log(text.replace("@", "JavaScript"));
console.log(text.replaceAll("@", "JavaScript"));


// //OOP => constructor function

// function User (id , username , salary){
//     this.i = id;
//     this.u = username;
//     this.s = salary + 1000;
// }

//OOP => new syntax constructor function
class Uuser {
    static count = 0 ; 
    constructor(id, username, salary) {
        //properties
        this.i = id;
        this.u = username || "Unknown"; //it means if the username has not value we assigned unknown as a value 
        this.s = salary + 1000;
        Uuser.count++;
        this.msg = function(){
            return `Hello ${this.u} Your salary is ${this.s}`;
        };
    }
    //methods
    writeMsg(){
        return `Hello ${this.u} Your salary is ${this.s}`;
    }
    static countMemebers(){
        return `${this.count} Members are created`;
    }
}


let userOne = new Uuser(100 , "Farida" , 10000);
let userTwo = new Uuser(101 , "Samir" , 5000);
let userThree = new Uuser(102 , "Tasbeeh" , 7000);
console.log(userOne.i);
console.log(userTwo.s);
console.log(userThree.u);

console.log(userOne instanceof Uuser);
console.log(userOne.constructor === Uuser); 

console.log(userOne.msg);//native code
console.log(userOne.msg());//value

console.log(userOne.writeMsg()); // the same output of the function in constructor

let strOne = "Elzero";
let strTwo = new String("Elzero");

console.log(typeof strOne);//string
console.log(typeof strTwo);//object

console.log(strOne instanceof String);//false
console.log(strTwo instanceof String);//true

console.log(strOne.constructor === String);//true
console.log(strTwo.constructor === String);//true

// if property or method is static object can not access but class can and we write it out of the constructor
console.log(userOne.count);
console.log(Uuser.count);

console.log(Uuser.countMemebers());



//class inheritance

class Admin extends Uuser {
    constructor(id,userName,permissions){
        super(id,userName);
        this.p = permissions;
    }
}

let adminOne = new Admin(101,"Hady",1); 


//class encapsulation   

class encapsulation {
    //private property 
    #e; 
    constructor(eSalary){
        this.#e = eSalary;
    }
    getSalary(){
        return parseInt(this.#e);
    }
}

let encapsulationOne = new encapsulation("5000 gneh");
console.log(encapsulationOne.getSalary());


Uuser.prototype.sayWelcome = function(){
    return `Welcome ${this.u}`;
}

// Object.prototype.love = "Elzero Web School"; // in any object 
// String.prototype.love = "Elzero Web School"; // in any string

console.log(userOne.sayWelcome());


//object meta data
const myyObject = {
    a: 1,
    b: 2,
};
Object.defineProperty(myyObject,"c",{ //modify or create property
    writable: true, //we can modify or not
    enumerable: true, // بشيلها من اي لوب او لا بدون حذفها من الاوبجكت
    configurable: true, //عملية الحذف مش هتتم لو عملتها false وكمان مقدرش اعدل عليها
    value: 3,
});

//in loop

for(let prop in myyObject){
    console.log(prop , myyObject[prop]);
}

console.log(myyObject);

myyObject.c = 100;

console.log(myyObject); 
// console.log(delete myyObject.c); //true

//multiple values 

Object.defineProperties(myyObject, {
    d: {
        configurable: true,
        value: 5,
    },
    e: {
        configurable: true,
        value: 6,
    },
    f: {
        configurable: true,
        value: 7,
    }
});

console.log(myyObject);


console.log(Object.getOwnPropertyDescriptors(myyObject));
console.log(Object.getOwnPropertyDescriptor(myyObject,"d"));

//date and time

let dateNow = new Date();
console.log(dateNow);
console.log(Date.now());

let seconds = Date.now()/1000; // from 1970
console.log(`Number of seconds is ${seconds}`);

//date methods 
let birthday = new Date("Mar 1 , 05");
console.log(birthday);

let diff = dateNow-birthday;
console.log(diff/1000/60/60/24/365);//my age

console.log(dateNow.getDate());
console.log(dateNow.getTime());
console.log(dateNow.getFullYear());
console.log(dateNow.getMonth());//بيبدأ من زيرو اندكس هيحيب الشهر اللي قبله
console.log(dateNow.getDay());//بيبدأ من زيرو اندكس هيحيب اليوم اللي قبله sunday = 0
console.log(dateNow.getHours());


let dateOne = new Date("1 Mar 05");
console.log(dateOne);

let dateTwo = new Date(2025,20,13);
console.log(dateTwo);

let dateThree = new Date("1@3@2005");
console.log(dateThree);

let dateFour = new Date("82");
console.log(dateFour);

let dateFive = new Date("1/3/2005");
console.log(dateFive);

//track operations time
//search for performance.now() in console and performance.mark() and performance.measure() for more accurate time tracking
//performance.now() returns the time in milliseconds since the page was loaded
//start time
let start = new Date();
//operations
for(let i = 0 ; i < 1000000 ; i++){
    Math.sqrt(i);
}
//time end
let end = new Date();
//operation duration
let duration = end - start;
console.log(`Operation duration is ${duration} milliseconds`);


//generators
function* generatorFunction() {
    yield 1;
    // alert("Generator Function Executed");
    yield 2;
    yield 3;
}
let generator = generatorFunction();
console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
console.log(generator.next()); // { value: undefined, done: true }
//typeof generator is object
console.log(typeof generator); // object

//nested generators
function* nestedGenerator() {
    yield* generatorFunction();
    yield 4;
    yield 5;
    yield* [7,8,9];
}   
let nested = nestedGenerator();
console.log(nested.next()); // { value: 1, done: false }
console.log(nested.next()); // { value: 2, done: false }
console.log(nested.next()); // { value: 3, done: false }
console.log(nested.next()); // { value: 4, done: false }
console.log(nested.next()); // { value: 5, done: false }
console.log(nested.next()); // { value: 7, done: false }
console.log(nested.next()); // { value: 8, done: false }
console.log(nested.next()); // { value: 9, done: false }
console.log(nested.next()); // { value: undefined, done: true }

/* modules 
import and export in two files 
1- we must export 
2- import files 
Ex: 
in file one :
export let a=10 ;
exprot let arr = [1,2,3,4];
export function sayHello(){
return `Hello`;
}
another way:
export {
}

in file two :
import {a,arr,sayHello} from "";
we can change these names
import {a as number ,arr as array ,sayHello} from "";


export default function sayManar(){
return `Manar`;
}



import {sayManar, a as number ,arr as array ,sayHello} from ""; //error
import sayManar, { a as number ,arr as array ,sayHello} from ""; //true syntax for default 
import lola, { a as number ,arr as array ,sayHello} from ""; //true syntax for default 


**import all
improt * as allModules = > any name  from " ";


console.log(allmodules.arr); etc.....


*/

/*waht is JSON? => JavaScript Object Notation
    - format for sharing data between server and client 
    - JSON derived from JS
    - file extension is .json



    JSON syntax :
    - inside  { }
    -key should be string wrapped in double qoutes
    -data seperated by comma 
    -square brackets [] for arrays 
    -curly braces for objects
*/


/*  *JSON*
    API => application programming interface
*/

// convert js object to json object and opposite

const myJsonObjectFromServer = '{"Username" : "Osama" , "Age" : 39 }';
console.log(typeof myJsonObjectFromServer);
console.log(myJsonObjectFromServer);

const myJsObject = JSON.parse(myJsonObjectFromServer);
console.log(typeof myJsObject);
console.log( myJsObject);

const myJsonObjectToServer = JSON.stringify(myJsObject);
console.log(typeof myJsonObjectToServer);
console.log(myJsonObjectToServer);

//synchronos 
// console.log("1");
// console.log("2");
// window.alert("hahaha");
// console.log("3");

//asynchronos 
// console.log("1");
// console.log("2");
// setTimeout(() => console.log("operation"),3000)
// console.log("3");


//ajax =>asynchronous js and xml

//status code => 404 not found وهكذا

// let myRequest = new XMLHttpRequest();
// myRequest.open("GET" , /*api*/);
// myRequest.send(); 
// console.log(myRequest);

//200 response is successful
//404 not found

//promise something will happen
//1-pending  2-fulfilled  3-rejected

const myPromise = new Promise((resolve,reject)=>{
let connect = true;
if(connect){
    resolve("connection established");
} else {
    reject(Error("connection failed"));
}
})

console.log(myPromise);
myPromise.then(
    (resolveValue) => console.log(`Good ${resolveValue}`),
    (rejectValue) => console.log(`Bad ${rejectValue}`)
); 

//fetch api

fetch("https://api.github.com/users/elzerowebschool/repos").then((result) => {
    console.log(result);
    //i want data object
    let myData = result.json();
    console.log(myData);
    return myData;
}).then((myData)=> {
    myData.length = 10;
    return myData;
}).then((myData)=>{
    console.log(myData[0].name);
})
//مش لازم نفس الاسم ممكن اغيرها عادي اللي هي كلمة myData

//to make error throw "Error";
function sum(a,b){
    console.log(a + b);
}
sum(2,3);
function myFun(a,b){
    if(arguments.length !== 2){
        throw new Error("You must pass two arguments");
    }

//must number

    if(typeof a !== "number" || typeof b !== "number"){
        throw new Error("You must pass two numbers");
    }

    return a + b;
}
console.log(myFun(4,5));

// var manoura = "Manoura";

