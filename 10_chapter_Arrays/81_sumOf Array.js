// const data = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
// const n = data[0];
// const arr = data.slice(1, 1 + n);
// Write your solution here
const arr=[12, 34, 10];
let sum = 0;
for (let i = 0; i < 3; i++) 
    {
    sum = sum + arr[i];
}
console.log(sum);