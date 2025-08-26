let container = document.createElement('div');
let textcontainer = document.createElement('div');
let text = document.createTextNode('Hello Flowers');
let image = document.createElement('img'); 
image.style.display = 'block';
image.style.margin = '100px auto';
image.style.border = '2px solid #ccc';
image.style.borderRadius = '10px';
image.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
image.style.transition = 'transform 0.2s';
image.src = '../flower/images/pro3.png';
image.alt = 'Flower Image';
image.style.width = '300px';
textcontainer.style.textAlign = 'center';
textcontainer.style.fontSize = '24px';
textcontainer.style.color = 'rgb(201, 47, 147)';
textcontainer.style.fontWeight = 'bold';
textcontainer.style.fontFamily = 'Arial, sans-serif';
textcontainer.appendChild(text);
container.appendChild(image);
container.appendChild(textcontainer);
document.body.appendChild(container);
// setTimeout(() => { 
//     console.log('Hello Flowers');
// }, 2000);
// setTimeout(msg ,3000, "Manar", "20" );
// function msg(user , age){
//     console.log(`Hello ${user} your age is ${age}`);
// }
// setTimeout(msg("abeer", "30"),4000);
// function msg(user , age){
//     console.log(`Hello ${user} your age is ${age}`);
// }
 

// function crazy(){
//     console.log("are you crazy");
// }

// let counter= setTimeout(crazy ,3000);
// let btn = document.querySelector("button");
//  btn.onclick = function (){
//     clearTimeout(counter);
//  }

// setTimeout(() => {
//     window.open("https://google.com","","width=400, height=400");
// }, 2000);
 let btn = document.querySelector("button");
btn.style.display = "none";
 window.onscroll=function(){
    if(window.scrollY >= 700){
        btn.style.display="block";
    }
    else {
        btn.style.display="none";
    }
 };
 btn.onclick = function () {
    window.scrollTo({
        left:0,
        top:0,
        behavior:"smooth",
    })
 };

 window.localStorage.setItem("color", "red");
 window.localStorage.fontWeight="bold";
 window.localStorage.fontSize="20";
 console.log(window.localStorage);