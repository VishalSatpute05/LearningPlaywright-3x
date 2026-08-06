//const data = require("fs").readFileSync(0, "utf8").trim();

const n = 5;

if (n <= 1) {
    console.log("NO");
} else {
    let isPrime = true;

    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log("YES");
    } else {
        console.log("NO");
    }
}