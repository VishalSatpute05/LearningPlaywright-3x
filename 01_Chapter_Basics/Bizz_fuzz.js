const data = require('fs').readFileSync(0, 'utf8');
// Write your solution here
const n = Number(data);

for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}