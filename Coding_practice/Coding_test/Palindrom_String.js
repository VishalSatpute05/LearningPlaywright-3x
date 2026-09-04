let str= "odd";
let reversed= str.split("").reverse().join("");
if(str===reversed)
    {
    console.log("Palindrome");
}  
else{
    console.log("Not Palindrome");
}