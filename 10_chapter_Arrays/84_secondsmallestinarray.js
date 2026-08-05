// const data = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
// const n = data[0];
// const arr = data.slice(1, 1 + n);
// Write your solution here
const arr=[12, 34, 10, 1];
const n = arr.length;
let smallest= Infinity;
let secondsamllest = Infinity;

for (let i = 0; i < n; i++) {
    if (arr[i] < smallest)
    {
        secondsamllest = smallest;
        smallest = arr[i];
    }
    else if  (arr[i] > secondsamllest && arr[i] !== smallest)
    {
        secondsamllest = arr[i];
    }
}
console.log(secondsamllest);