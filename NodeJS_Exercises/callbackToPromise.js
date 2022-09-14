const { response } = require('express');

const prompt = require('prompt-sync')();

let num1 = Number(prompt("enter the 1st number : "));
let num2 = Number(prompt("enter the 2nd number : "));

function sum(result1) {
    return new Promise((resolve, reject) => {
        result1 = num1 + num2
        resolve(result1)
    })

}
function mult(result2) {
    return new Promise((resolve, reject) => {
        result2 = num1 * num2
        resolve(result2)
    })

}
function div(result3) {
    return new Promise((resolve, reject) => {
        result3 = num1 / num2
        resolve(result3)
    })

}
function sub(result4) {
    return new Promise((resolve, reject) => {
        result4 = num1 - num2
        resolve(result4)

    })
}

sum().then((result1) => {
    return mult().then((result2) => {
        return div().then((result3) => {
            return sub().then((result4) => {
                finalResult = result1 + result2 + result3 + result4
                console.log(`Final Result  = ${finalResult}`)
            })
        })
    })
})
