var hamburger = document.querySelector(".ham");
var menu = document.querySelector(".menu");

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