// Variable Declarations and Function Definitions
let firstNum = "",
    secondNum = "",
    value = "",
    operator = "",
    buttons = Array.from(document.getElementsByClassName('number_button')),
    operational_buttons = [],
    number_buttons = [],
    number_input = document.getElementById('number_input');
    clear_btn = document.getElementsByClassName('clear_button')[0];
    delete_btn = document.getElementsByClassName('delete_button')[0];
    plus_btn = "",
    minus_btn = "",
    multiply_btn = "",
    division_btn = "",
    equals_btn = ""


const clearTextboxes = () => number_input.value = ""

/**
* a has a value , first time it's 78 and must go into firstNum ,
* so if secondTime firstNum is not empty then a must go into secondNum
* thirdtime if both are not empty then eval and return result to firstNum , clear secondNum
*/
const checkNumberVariables = (value = "" , operator = "")  => {
    switch(true){
        case (firstNum.length === 0):
            firstNum = value
            console.log(firstNum)
            clearTextboxes()
            break
        case (firstNum.length !== 0):
            console.log(firstNum)
            secondNum = value
            console.log(secondNum)
            clearTextboxes()
            break
        default:
            console.log("what the fuck are we doing here")
    }  
    if(firstNum.length !== 0 && secondNum.length !== 0)
        equals()
    
}

const clear = () => {
    firstNum = ""
    secondNum = ""
    number_input.value = ""
}

const getNumbers = number_buttons => 
    number_buttons.map(number_button => number_button.onclick = function(e){
        let numberValue = 0;
        number_input.value += e.target.dataset.number
        if(number_input.value.includes(","))
            number_input.value = number_input.value.replace(/,/g,'')
        if(number_input.value.includes(".")) console.log(number_input.value)
        numberValue = Number(number_input.value)
        number_input.value = numberValue.toLocaleString('en')
        value = number_input.value
    })

const filterNumbers = buttons => {
    buttons.filter(button => button.dataset.number ? number_buttons.push(button) : operational_buttons.push(button))
    getOperators(operational_buttons)
}

const getOperators = operational_buttons => {
    plus_btn = operational_buttons.filter(operation => operation.classList.contains('plus'))[0];
    minus_btn = operational_buttons.filter(operation => operation.classList.contains('minus'))[0];
    multiply_btn = operational_buttons.filter(operation => operation.classList.contains('multiply'))[0];
    division_btn = operational_buttons.filter(operation => operation.classList.contains('division'))[0];
    equals_btn = operational_buttons.filter(operation => operation.classList.contains('equals'))[0];
}

function deleteNum(){
    firstNum = number_input.value.slice(0, -1)
    number_input.value = firstNum
}

const equals = (operation = false) => {
    if(operation){
        secondNum = number_input.value 
        firstNum = eval(`${firstNum} ${operator} ${secondNum}`)
        number_input.value = firstNum
        setTimeout(() => secondNum = "", 1200)
    } else { 
        firstNum = eval(`${firstNum} ${operator} ${secondNum}`)
        number_input.value = firstNum
        secondNum = ""
        console.log(firstNum, secondNum)
        setTimeout(() => clearTextboxes(), 1200)
    }
    
}


// Initialization Methods
filterNumbers(buttons)
getNumbers(number_buttons)


clear_btn.onclick = () => {
    clear()
}
delete_btn.onclick = () => {
    deleteNum()
}

plus_btn.onclick = function(){
    operator = "+"
    // console.log(firstNum)
    checkNumberVariables(value , operator)
}
minus_btn.onclick = () => {
    operator = "-"
    // console.log(firstNum)
    checkNumberVariables(value , operator)
}
multiply_btn.onclick = () => {
    operator = "*" 
    // console.log(firstNum)
    checkNumberVariables(value , operator)
}
division_btn.onclick = () => {
    operator = "/"
    // console.log(firstNum)
    checkNumberVariables(value , operator)
}

equals_btn.onclick = () => {
    equals(true)
}












// Variable Declarations and Function Definitions


// Initialization Methods
