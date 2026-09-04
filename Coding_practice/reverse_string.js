// const data = require('fs').readFileSync(0, 'utf8');
// const str = data.split('\n')[0];
// Write your solution here

const str = "Hello";
let reverse = "";
for (let i = str.length - 1; i >= 0; i--)
{
    reverse = reverse + str[i];
}
console.log(reverse);