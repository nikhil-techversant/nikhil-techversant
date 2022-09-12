const prompt = require('prompt-sync')();

const arr = []

let arrLen = Number(prompt("enter the length of array : "))
if (arrLen < 2) {
    console.log("minimum 2 nubers required");
    return;
} else {
    for (i = 0; i < arrLen; i++) {
        let num = Number(prompt("enter the values to array : "));
        if (isNaN(num)) {
            console.log("Invalid data ! only numbers accepted");
            return
        } else {
            arr.push(num)
        }
    }
}
let sum = 0;
arr.forEach(values)
function values(item){
    sum+= item
}
console.log("numbers are : ",...arr.join(','));
console.log("sum of numbers is  : ", sum);

