// const data = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
// const n = data[0];
// const arr = data.slice(1, 1 + n);
// Write your solution here
// const arr=[1, 2, 3, 4];
// const n = arr.length;
// let even = [];
// let odd = [];

// for (let i = 0; i < n; i++)
// {
//     if (arr[i] % 2 === 0)
//     {
//         even.push(arr[i]);
//     }
//     else {
//         odd.push(arr[i]);
//     }
// }

// console.log("Even Numbers: " + even.join(" "));
// console.log("Odd Numbers: " + odd.join(" "));

//working within the SDET club

const arr=[1, 2, 3, 4];
const n = arr.length;
process.stdout.write("Even Numbers: ");
for (let i = 0; i < n; i++) {
    if (arr[i] % 2 === 0) {
        process.stdout.write(arr[i] + " ");
    }
}

process.stdout.write("\n");

process.stdout.write("Odd Numbers: ");
for (let i = 0; i < n; i++) {
    if (arr[i] % 2 !== 0) {
        process.stdout.write(arr[i] + " ");
    }
}