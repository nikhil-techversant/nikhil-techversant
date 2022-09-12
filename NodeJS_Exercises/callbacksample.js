const prompt = require('prompt-sync')();

let num1 = Number(prompt("enter the 1st number : "));
let num2 = Number(prompt("enter the 2nd number : "));
final(num1,num2)

function sum(num1,num2){
    result1 = num1+num2
    return result1
}
function mult(num1,num2){
    result2 = num1*num2
    return result2
}
function div(num1,num2){
    result3 = num1/num2
    return result3
}
function sub(num1,num2){
    result4 = num1-num2
    return result4
}
function final(num1,num2){
    result1 = sum(num1,num2)
    result2 = mult(num1,num2)
    result3 = div(num1,num2)
    result4 = sub(num1,num2)
    finalResult = result1 +result2+result3+result4;
    console.log("Final Result : ",finalResult);
}

