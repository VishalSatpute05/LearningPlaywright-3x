// const n=5;
// for (let i = 1; i <= n; i++) 
//     {
//     let spaces = ' '.repeat(n - i);
//     let stars =  '*'.repeat(2 * i - 1);
//     console.log(spaces + stars);
// }


let n = 5;
for(let i=1;i<=n;i++){
        let row = "";
        for(let j=1;j<=n-i;j++){
               row += " ";
        }
        for(let j=1;j<=2*i-1;j++){
            row = row + "*";
        }
        console.log(row);
}