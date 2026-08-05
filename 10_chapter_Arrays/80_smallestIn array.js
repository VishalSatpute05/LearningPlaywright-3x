
const arr=[12, 34, 10, 1];
let smallest = arr[0];

for (let i = 1; i < 5; i++) {
    if (arr[i] < smallest) {
        smallest = arr[i];
    }
}

console.log(smallest);