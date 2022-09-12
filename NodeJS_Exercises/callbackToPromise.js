const prompt = require('prompt-sync')();

let num1 = Number(prompt("enter the 1st number : "));
let num2 = Number(prompt("enter the 2nd number : "));

function final(num1, num2) {
    return new Promise((resolve, reject) => {
        result1 = sum(num1, num2)
        result2 = mult(num1, num2)
        result3 = div(num1, num2)
        result4 = sub(num1, num2)
        finalResult = result1 + result2 + result3 + result4;
        resolve()
    })
}

const sum=(num1, num2)=> {
    result1 = num1 + num2
    return new Promise((resolve, reject) => {
        resolve()
    }).then(()=>{
        const mult = (num1, num2)=> {
            result2 = num1 * num2
            return result2
        }

    })
}







const p = final(num1, num2);

p.then(() => {
    console.log("Final Result : ", finalResult);
}).catch(() => {
    console.error("error");
})





function div(num1, num2) {
    result3 = num1 / num2
    return result3
}
function sub(num1, num2) {
    result4 = num1 - num2
    return result4
}


