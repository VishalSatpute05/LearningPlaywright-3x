function calculate(a,b, operation)
{
    const result = operation(a,b);
    console.log("Result:", result);
}
function add(x,y)
{
    return x + y;
}
function multiply(x,y)
{
    return x * y;
}
calculate(11, 5, add);
calculate(12, 5, multiply);