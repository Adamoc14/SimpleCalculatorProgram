// Variable Declarations and Function Definitions
let state = 0;
let buttons = document.getElementsByClassName('number_button');
console.log(buttons);
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


buttons.onclick = function(e){
    console.log(e.target.value);
}

