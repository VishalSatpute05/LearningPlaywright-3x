function processNumber(number,callback){
    const result=callback(number);
    console.log("The result is: "+result);
}
function square(num){
    return num*num;
}
function double(num){
    return num*2;
}       
processNumber(6, square);
processNumber(7, double);
