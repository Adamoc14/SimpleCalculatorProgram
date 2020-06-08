// Variable Declarations and Function Definitions
let state = 0,
    buttons = Array.from(document.getElementsByClassName('number_button')),
    operational_buttons = [],
    number_buttons = [],
    number_input = document.getElementById('number_input');


const sum = a => state += a;
const minus = b => state -= b;
const mult = c => state *= c;
const div = d => state /= d;
const clear = () => state = 0;

// Initialization Methods
// console.log(sum(12))
// console.log(minus(2))
// console.log(mult(3))
// console.log(div(2))

buttons.filter(button => button.dataset.number ? number_buttons.push(button) : operational_buttons.push(button));
console.log(buttons , number_buttons, operational_buttons);

number_buttons.map(number_button => number_button.onclick = function(e){
    console.log(e);
});

