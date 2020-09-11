
let numbers = document.querySelectorAll(".number");
//console.log(numbers);
let display = document.querySelector(".display");
let calNum = "";
let resetBttn = document.getElementById("reset");
let plusBttn = document.getElementById("plus");
let equalBttn = document.getElementById("equal");
let input;
let lastInput;
let result = 0;




//Display number when the button is clicked
for(var i =0; i<numbers.length; i++){
numbers[i].addEventListener("click", function(){
    calNum += this.value;
    //Stop number input when the length is longer than the display box can contain
    //the decimal point can only appear in the second 
    if(calNum[0] === "0" && calNum[1] !== "."){   
        calNum = "0";}
        //The 0 dispear after clicking on the decimal button??
    else{
       display.innerText = calNum;
    }
})
}

//Reset the display
resetBttn.addEventListener("click", function(){
    display.innerText = "0";
    calNum = "";

})

//get the input when a execute button is clicked
//how to store the second input for later use?
//Why I have to click twice to fire the function??
function plus(){
    plusBttn.addEventListener("click", function(){
        input = Number(display.innerText);
        result += input;
        calNum = "";
        display.innerText = calNum;
    })
}

function equal(){
 equalBttn.addEventListener("click",function(){
     lastInput = Number(display.innerText);
     //How to decide which exect button is clicked?
     result += lastInput;
     display.innerText = result;
     result = 0;
 });
} 
