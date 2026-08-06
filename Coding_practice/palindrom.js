//const data = require('fs').readFileSync(0, 'utf8');
const str = "triangle";
const reversed = str.split("").reverse().join("");

if (str === reversed) {
    console.log("YES");
} else {
    console.log("NO");
}