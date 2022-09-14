const { response } = require('express');
const prompt = require('prompt-sync')();

let num1 = Number(prompt("enter the 1st number : "));
let num2 = Number(prompt("enter the 2nd number : "));

async function sum(result1) {
    return new Promise((resolve, reject) => {
        result1 = num1 + num2
        resolve(result1)
    })

}
async function mult(result2) {
    return new Promise((resolve, reject) => {
        result2 = num1 * num2
        resolve(result2)
    })

}
async function div(result3) {
    return new Promise((resolve, reject) => {
        result3 = num1 / num2
        resolve(result3)
    })
}
async function sub(result4) {
    return new Promise((resolve, reject) => {
        result4 = num1 - num2
        resolve(result4)

    })
}

const final = async ()=>{
    try {
        res = await Promise.all([
            sum(),
            mult(),
            div(),
            sub()
        ]);
          console.log( res.reduce((a, b) => a + b, 0))
        } catch (error) {
        console.log(error);
    }
}
final();