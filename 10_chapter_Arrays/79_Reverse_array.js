/*const data = require('fs').readFileSync(0, 'utf8');
const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
const n = tokens[0];
const arr = tokens.slice(1, 1 + n);*/

// Write your solution here
const arr =[1, 2, 3, 4, 5];
arr.sort((a, b) => b - a); // Descending order
console.log(arr.join(" "));//to remove the array brackets and commas
arr.reverse();
