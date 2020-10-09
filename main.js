//PART I
//Define variables - I found 'querySelectorAll' on W3Schools 
//querySelectAll returns all elements in the document that matches a specified CSS selectors(s)
var boxes = document.querySelectorAll(".box");
console.log(boxes);

//Create the function 
function highlight()
{
    for (i = 0; i < boxes.length; i++) {
        boxes[i].classList.toggle("color") 
    }
};

//Attaching an event listener in a for loop 
//Since I used the method "toggle", we can use the same function for mouse out I THINK 
for (i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("mouseover", highlight);
    boxes[i].addEventListener("mouseout", highlight);
}

//PART II - IV

var boxOneMessage = document.createElement("p")
boxOneMessage.innerHTML = "Oooh - so close, but no cigar"
document.getElementById("one").addEventListener("click",
function(){
    document.getElementById("one").appendChild(boxOneMessage);
}, false
);

var boxTwoMessage = document.createElement("p")
boxTwoMessage.innerHTML = "DING DING DING - We have a winner"
document.getElementById("two").addEventListener("click",
function(){
    document.getElementById("two").appendChild(boxTwoMessage);
}, false
);

var boxThreeMessage = document.createElement("p")
boxThreeMessage.innerHTML = "Oops, butter luck next time"
document.getElementById("three").addEventListener("click",
function(){
    document.getElementById("three").appendChild(boxThreeMessage);
}, false
);