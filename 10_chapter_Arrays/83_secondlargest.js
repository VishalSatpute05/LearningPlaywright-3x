// const data = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
// const n = data[0];
// const arr = data.slice(1, 1 + n);
// Write your solution 
const arr=[12, 34, 10, 1];
const n = arr.length;
let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < 6; i++)
{
    if (arr[i] > largest)
    {
        secondLargest = largest;
        largest = arr[i];
    }
    else if (arr[i] > secondLargest && arr[i] !== largest)
    {
        secondLargest = arr[i];
    }
}
console.log(secondLargest);