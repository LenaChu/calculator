Computing Steps:

let computing = {
displayNum : “”;
Input;
Result: 0;
computingFunction: function(a, b){a+b};
}


Click 3 → If computing.Result !== 0, computing.displayNum = “”; computing.displayNum += this.Value; Display computing.displayNum; computing.Input = computing.displayNum;
Click + → If computing.Result === 0, computing.Result += computing.Input; Else(computing.Result =  computingFunction(computing.Input + computing.Result)); computing.displayNum = computing.Result; Display computing.disPlayNum.
Click 5 → If computing.Result !== 0, computing.displayNum = “”; computing.displayNum += this.Value; Display computing.displayNum; computing.Input = computing.displayNum;
Click + → If computing.Result === 0, computing.Result += computing.Input; Else(computing.Result =  computingFunction(Input + Result)); computing.displayNum = computing.Result; Display computing.disPlayNum.
Click 6 → If computing.Result !== 0, computing.displayNum = “”; computing.displayNum += this.Value; Display computing.displayNum; computing.Input = computing.displayNum;
Click = →  comupting.Result =  computingFunction(computing.Input + computing.Result); computing.displayNum = computing.Result; Display comupting.displayNum;
Click AC → Reset; computing.Input = 0; computing.Result = 0; computing.displayNum = “”; display.innerText = "0";

