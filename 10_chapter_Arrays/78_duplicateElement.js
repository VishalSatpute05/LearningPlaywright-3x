/*const data = require('fs').readFileSync(0, 'utf8');
const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
const n = tokens[0];
const arr = tokens.slice(1, 1 + n);*/

// Write your solution here
const arr =[1, 2, 3, 2, 4, 1];
const freq = new Map();
const duplicates = [];
for (const num of arr)
{
    const count = (freq.get(num) || 0) + 1;
    freq.set(num, count);

    if (count === 2)
    {
        duplicates.push(num);
    }
}
if (duplicates.length === 0)
{
    console.log("duplicate not found")
}
else {
    console.log(duplicates.join('\n'));
}