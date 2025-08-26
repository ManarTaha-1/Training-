let lis = document.querySelectorAll("ul li");
let itm = document.querySelector(".item");

// window.localStorage.clear();//remove all items in local storage
if(window.localStorage.getItem("color")){//if there is color
    //[1] add color to div
    itm.style.backgroundColor=window.localStorage.getItem("color");
    //[2] remove active class from all lis
            lis.forEach((li) =>{
            li.classList.remove("active");
        });
    //[3] add active class to the li that has the same color
    document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
}else{//If No Color In local storage
    console.log("No");
}

lis.forEach((li) => {
    li.addEventListener("click", (e) => {
        // console.log(e.currentTarget.dataset.color);
        //add active class to the clicked div
        e.currentTarget.classList.add("active");
        //add current color to localStorage
        window.localStorage.setItem("color" , e.currentTarget.dataset.color);
        //change div background
        itm.style.backgroundColor=e.currentTarget.dataset.color;
    });
});