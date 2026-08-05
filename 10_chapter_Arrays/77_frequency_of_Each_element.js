/*const data = require('fs').readFileSync(0, 'utf8');
const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
const n = tokens[0];
const arr = tokens.slice(1, 1 + n);*/

// Write your solution here
const arr =[1, 2, 1, 3, 2];
const freq = new Map();

for (const num of arr)
{
    freq.set(num, (freq.get(num) || 0) + 1);
}

let result = [];

for (const [num, count] of freq) {
    result.push(`${num} appears ${count} times`);
}

console.log(result.join("\n"));