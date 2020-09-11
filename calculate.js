
let numbers = document.querySelectorAll(".number");
//console.log(numbers);
let display = document.querySelector(".display");
let resetBttn = document.getElementById("reset");
let computingBttns = document.querySelectorAll(".computing");
let equalBttn = document.getElementById("equal");


let computing = {
    displayNum: "",
    input:0,
    result:0,
    plusFunction: function(a, b){ return a+b},
    minusFunction: function(a, b){ return a-b},
    multiplyFunction: function(a, b){return a * b},
    divideFunction: function(a, b){return a / b},
    modFunction: function(a, b){return a % b},
}


//Reset the display
resetBttn.addEventListener("click", function(){
    computing.result = 0;
    computing.input = 0;
    computing.displayNum = "";
    display.innerText = "0";
    console.log(computing.result);

})
function resetDisplay(){
    display.style.backgroundColor = "rgba(220,200, 190,1)";
    if(computing.result === computing.displayNum){
        computing.displayNum = "";
    }
}

//Update the display when number buttons are clicked
for(var i =0; i<numbers.length; i++){
    numbers[i].addEventListener("click", function(){
        resetDisplay();
        computing.displayNum += this.value;
        if(computing.displayNum[0] === "0" && computing.displayNum[1] !== "."){   
            computing.displayNum = "0";}
        else if(computing.displayNum.indexOf(".") !== computing.displayNum.lastIndexOf(".")){
        computing.displayNum = computing.displayNum.slice(0, computing.displayNum.lastIndexOf("."));
        } else{
            display.innerText = computing.displayNum;
            
  
        }
    })
    }

  

function executeComputing(funName){
    computing.input = Number(display.innerText);
    if (computing.result === 0){
        computing.result += computing.input;
    } else{
        computing.result = computing[funName](computing.input, computing.result);
    }
    //要判斷四則運算，要做一個執行陣列
    //每按下一次運算button，push一次funcName到陣列裡面
    //每次執行execyteComputing()的時候要比較陣列前一個值
    //若陣列是空的，代表第一次執行運算，result = input
    //若陣列不是空的，比較這次push的funcName跟上次push的funcName
    //若是同級運算，如前一個funcName是加法，新的funcName也是加法
    //則執行前一次的運算
    //若非同級運算，如前一個funcName是加法，新的funcName是乘法
    //則暫時不執行
    //等到下一次input才做運算
    //在非同級運算的狀況下需要三個變數來儲存，第一個是result，第二個是currValue，第三個是preValue


    computing.displayNum = computing.result;
    display.innerText = computing.displayNum;
    display.style.backgroundColor = "rgba(200, 180, 180, 1)";
}

for(let i = 0; i<computingBttns.length; i++){
    computingBttns[i].addEventListener("click", function(){
        console.log("Computing button is invoked!")
        let funcName = computingBttns[i].value;
        executeComputing(funcName);
    
    })
    
}

   
 equalBttn.addEventListener("click",function(){
     computing.input = Number(display.innerText);
     //How to decide which exect button is clicked?
     computing.result += computing.input;
        computing.displayNum = computing.result;
    display.innerText = computing.displayNum;
 });

