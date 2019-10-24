console.log("hi");
var hamburger = document.querySelector(".ham");
var menu = document.querySelector(".menu");

var arrowLeft = document.querySelector(".arrowLeft");
var arrowRight = document.querySelector(".arrowRight");
var picOne = document.querySelector(".picOne");
var picTwo = document.querySelector(".picTwo");
var picThree = document.querySelector(".picThree");
var picFour = document.querySelector(".picFour");
var picFive = document.querySelector(".picFive");
var picSix = document.querySelector(".picSix");
var picSeven = document.querySelector(".picSeven");
var picEight = document.querySelector(".picEight");
var picNine = document.querySelector(".picNine");
var picTen = document.querySelector(".picTen");
var picEleven = document.querySelector(".picEleven");
var picTwelve = document.querySelector(".picTwelve");



pictures = [picOne,picTwo,picThree,picFour,picFive,picSix,picSeven,picEight,picNine,picTen,picEleven,picTwelve]

/**********************************
Hamburger
**********************************/
var hamCounter =0;
hamburger.addEventListener("click", function() {
    hamCounter++;
    if(hamCounter %2 == 1){
        menu.style.display="block";
        
    }
    else{
        menu.style.display="none";
    }
    
});
window.addEventListener('resize', function(){
    menu.style.display="none";
});

/**********************************
Gallery
**********************************/
var currLocation = 0;
var currLocationTwo = 0;

arrowLeft.addEventListener("click", function(){
    pictures[currLocation].style.display="none";
    if(currLocation == 0){
        currLocation = 11;
    }
    else{
        currLocation--;
    }
    pictures[currLocation].style.display="block";
    
});

arrowRight.addEventListener("click", function(){
    pictures[currLocation].style.display="none";
    if(currLocation == 11){
        currLocation = 0;
    }
    else{
        currLocation++;
    }
    pictures[currLocation].style.display="block";
    
});
