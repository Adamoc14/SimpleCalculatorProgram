// Variable Declarations and Function Definitions
let state = 0;
let buttons = Array.from(document.getElementsByClassName('number_button'));
let operational_buttons = [];


const sum = a => state += a;
const minus = b => state -= b;
const mult = c => state *= c;
const div = d => state /= d;
const clear = () => state = 0;

// Initialization Methods
console.log(sum(12))
console.log(minus(2))
console.log(mult(3))
console.log(div(2))

buttons = buttons.filter(button => button.dataset.number !== true ? operational_buttons.push(button) : buttons.push(button));
console.log(buttons , operational_buttons);
buttons.map(button => button.onclick = function(e){
    console.log(e);
    
});

