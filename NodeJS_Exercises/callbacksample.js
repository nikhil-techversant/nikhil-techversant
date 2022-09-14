const prompt = require('prompt-sync')();

let num1 = Number(prompt("enter the 1st number : "));
let num2 = Number(prompt("enter the 2nd number : "));

function sum(result1) {
    result1(num1 + num2)
}
function mult(result2) {
    result2(num1 * num2)
}
function div(result3) {
    result3(num1 / num2)
}
function sub(result4) {
    result4(num1 - num2)
}

sum((result1) => {
    mult((result2) => {
        div((result3) => {
            sub((result4) => {
                finalResult = result1 + result2 + result3 + result4
                console.log(`Final Result = ${finalResult}`)
            })
        })

    })
})


