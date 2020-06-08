let state = 0;

const sum = a => state += a;
const minus = b => state -= b;
const mult = c => state *= c;
const div = d => state /= d;
const clear = () => state = 0;


console.log(sum(12))
console.log(minus(2))
console.log(mult(3))
console.log(div(2))
