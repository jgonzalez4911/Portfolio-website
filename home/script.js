console.log("h");

var toggleButton = document.querySelector(".start");
var banner = document.querySelector(".banner_page");
var home = document.querySelector(".second-page");
var flipOne = document.querySelector(".box1");
var flipTwo = document.querySelector(".box2");
var flipThree = document.querySelector(".box3");
var flipFour = document.querySelector(".box4");
var hamburger = document.querySelector(".ham");
var menu = document.querySelector(".menu");

/**********************************
 Banner Transition
 **********************************/

toggleButton.addEventListener("click", function() {
    home.style.display="flex";
    // document.documentElement.scrollTop = window.screen.height;
    banner.style.animationPlayState = "running";
    
    setTimeout(function () {
        banner.style.display="none";
        
        // home.style.backgroundPosition= "200px 400px";
        
        }
    , 1484);
});

/**********************************
 Flip Cards
 **********************************/
var flipCounterOne = 0;
var flipCounterTwo = 0;
var flipCounterThree = 0;
var flipCounterFour = 0;

flipOne.addEventListener("click", function() {
    flipCounterOne++;
    if(flipCounterOne %2 == 1){
        console.log("hi");
        flipOne.style.transform="rotateY(180deg)";
    }
    else{
        flipOne.style.transform="rotateY(360deg)";
    }
    
});
flipTwo.addEventListener("click", function() {
    flipCounterTwo++;
    if(flipCounterTwo %2 == 1){
        console.log("hi");
        flipTwo.style.transform="rotateY(180deg)";
    }
    else{
        flipTwo.style.transform="rotateY(360deg)";
    }
    
});
flipThree.addEventListener("click", function() {
    flipCounterThree++;
    if(flipCounterThree %2 == 1){
        console.log("hi");
        flipThree.style.transform="rotateY(180deg)";
    }
    else{
        flipThree.style.transform="rotateY(360deg)";
    }
    
});
flipFour.addEventListener("click", function() {
    flipCounterFour++;
    if(flipCounterFour %2 == 1){
        console.log("hi");
        flipFour.style.transform="rotateY(180deg)";
    }
    else{
        flipFour.style.transform="rotateY(360deg)";
    }
    
});
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

    

