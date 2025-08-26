// manage settings box
let settingsBox = document.querySelector('.settings-box');
let settingsButton = document.querySelector('.toggle-settings i');
// select settings button
function settings() {
    //open settings box
    if( settingsBox.style.left == '-340px') {
        settingsBox.style.left = '0px';
        settingsButton.classList.add('fa-spin');
    } else {
        settingsBox.style.left = '-340px';
        settingsButton.classList.remove('fa-spin');
    }
    //click out of settings box to close it
    document.addEventListener('click', (e) => {
        if(e.target !== settingsBox && e.target !== settingsButton) {
            settingsBox.style.left = '-340px';
            settingsButton.classList.remove('fa-spin');
        }
    });
}
let mainColors= localStorage.getItem('main-color');

if(mainColors !==null){
    document.documentElement.style.setProperty('--main-color', mainColors);
    document.querySelectorAll('.colors-list li').forEach(li => {
        li.classList.remove('active');
                if(li.dataset.color === mainColors) {
            li.classList.add('active');
        }
    });
}
//change colors
let colorsList = document.querySelectorAll('.colors-list li');
colorsList.forEach( li => {
    li.addEventListener('click', (e) => {
        //remove active class from all li
        colorsList.forEach( li => {
            li.classList.remove('active');
        });
        //add active class to clicked li
        e.target.classList.add('active');
        //change background color
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
        // save color when close the page and open it again
        localStorage.setItem('main-color', e.target.dataset.color);
    });
});

// manage random background button yes or no
let randomBackgroundButton = document.querySelector('.random-background span');
// let randomBackground = true;

if(mainColors !==null){
    document.documentElement.style.setProperty('--main-color', mainColors);
    document.querySelectorAll('.colors-list li').forEach(li => {
        li.classList.remove('active');
        if(li.dataset.color === mainColors) {
            li.classList.add('active');
        }
    });
}
//random background
// select landing page
let landingPage = document.querySelector('.landing-page');
let images = ["./images/image1.png", "./images/image2.png", "./images/image3.jpg", "./images/image4.jpg", "./images/image5.png", "./images/image6.png"];


let backgroundOption = true;
let backgroundInterval;
function randomizeImages() {
    if(backgroundOption === true){
    backgroundInterval = setInterval(() => {
    let randomNumber = Math.floor(Math.random() * images.length);
    landingPage.style.backgroundImage = `url(${images[randomNumber]})`;
}, 5000);
}
}



let randomBackgroundStorage = localStorage.getItem('random-background');

let randomBackground = document.querySelectorAll('.random-backgrounds span');

randomBackground.forEach( span => {
    span.addEventListener('click', (e) => {
        //remove active class from all li
        e.target.parentElement.querySelectorAll('.active').forEach( element => {
            element.classList.remove('active');
        });
        e.target.classList.add('active');
        if(e.target.dataset.background === 'yes') {
            backgroundOption = true;
            randomizeImages();
            localStorage.setItem('random-background', true);
        } 
        else {
            backgroundOption = false;
            clearInterval(backgroundInterval);
            localStorage.setItem('random-background', false);
        }
    });
});

// local storage for random background
if(randomBackgroundStorage !== null) {
    // check if randomBackgroundStorage is true or false
    if(randomBackgroundStorage === 'true') {
        backgroundOption = true;
    } else {
        backgroundOption = false;
    }
    document.querySelectorAll('.random-backgrounds span').forEach(element => {
        element.classList.remove('active');
    });
    if( randomBackgroundStorage === 'true') {
        document.querySelector(".random-backgrounds .yes").classList.add('active');
    } else {
        document.querySelector(".random-backgrounds .no").classList.add('active');
    }
}

let ourSkills = document.querySelector('.skills');
window.addEventListener("scroll", function() {
    let skillsSection = ourSkills.getBoundingClientRect();
    if (skillsSection.top <= window.innerHeight && skillsSection.bottom >= 0) {
        let allSkills = document.querySelectorAll('.skill-box .skill-progress span');
        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress;
        });
    }
});

// create popup with image
let OurGallery = document.querySelectorAll('.gallery img');
OurGallery.forEach(img => {
    img.addEventListener('click', (e) => {
        let overlay = document.createElement('div');
        overlay.className = 'popup-overlay';
        document.body.appendChild(overlay);
        let popupBox = document.createElement('div');
        popupBox.className = 'popup-box';
        let popupImage = document.createElement('img');
        popupImage.src = img.src;
        popupBox.appendChild(popupImage);
        document.body.appendChild(popupBox);
        let closeButton = document.createElement('span');
        closeButton.className = 'close-button';
        closeButton.innerText = 'X';
        closeButton.addEventListener('click', () => {
            document.body.removeChild(popupBox);
            document.body.removeChild(overlay);
        });
        popupBox.appendChild(closeButton);
        //click out of popup to close it
        overlay.addEventListener('click', () => {
            document.body.removeChild(popupBox);
            document.body.removeChild(overlay);
        });
    });
});
