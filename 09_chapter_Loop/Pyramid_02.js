const n=5;
for(let i = 5; i >= 1; i--)
{
    let stars = ' * '.repeat(2 * i - 1);
    let spaces = '  '.repeat(n - i);
    
    console.log(spaces + stars);
}
